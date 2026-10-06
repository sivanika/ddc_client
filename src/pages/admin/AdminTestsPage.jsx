import React, { useState, useEffect } from 'react';
import { 
  FlaskConical, 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  X, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCw 
} from 'lucide-react';
import api from '../../services/api';
import { useToast } from '../../context/ToastContext';

const CATEGORIES = [
  'Hematology',
  'Biochemistry',
  'Diabetes Care',
  'Endocrinology',
  'Cardiology',
  'Radiology',
  'Immunology',
  'Clinical Pathology',
  'Serology & Infectious'
];

const emptyTestForm = {
  code: '',
  name: '',
  category: 'Hematology',
  sampleType: 'EDTA Blood (2 ml)',
  fastingRequired: false,
  fastingHours: 0,
  tatHours: 4,
  price: 500,
  mrp: 650,
  description: '',
  preparation: 'No specific preparation needed.',
  isActive: true,
  isPopular: false,
  homeCollectionAvailable: true
};

const AdminTestsPage = () => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const [modalOpen, setModalOpen] = useState(false);
  const [editingTestId, setEditingTestId] = useState(null);
  const [formData, setFormData] = useState(emptyTestForm);
  const [submitting, setSubmitting] = useState(false);

  const { addToast } = useToast();

  const fetchTests = async () => {
    setLoading(true);
    try {
      const res = await api.get('/tests');
      if (res.data.success) {
        setTests(res.data.data);
      }
    } catch (err) {
      console.error('Error fetching tests:', err);
      addToast('Failed to load tests catalog', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTests();
  }, []);

  const handleOpenAddModal = () => {
    setEditingTestId(null);
    setFormData(emptyTestForm);
    setModalOpen(true);
  };

  const handleOpenEditModal = (test) => {
    setEditingTestId(test._id);
    setFormData({
      code: test.code,
      name: test.name,
      category: test.category,
      sampleType: test.sampleType,
      fastingRequired: test.fastingRequired || false,
      fastingHours: test.fastingHours || 0,
      tatHours: test.tatHours || 4,
      price: test.price,
      mrp: test.mrp,
      description: test.description || '',
      preparation: test.preparation || '',
      isActive: test.isActive !== false,
      isPopular: test.isPopular || false,
      homeCollectionAvailable: test.homeCollectionAvailable !== false
    });
    setModalOpen(true);
  };

  const handleDeleteTest = async (testId, testName) => {
    if (!window.confirm(`Are you sure you want to delete test "${testName}"?`)) return;

    try {
      const res = await api.delete(`/tests/${testId}`);
      if (res.data.success) {
        addToast('Test deleted successfully', 'success');
        fetchTests();
      }
    } catch (err) {
      addToast('Failed to delete test', 'error');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.code.trim()) {
      addToast('Test name and code are required', 'error');
      return;
    }

    setSubmitting(true);
    try {
      if (editingTestId) {
        const res = await api.put(`/tests/${editingTestId}`, formData);
        if (res.data.success) {
          addToast('Test updated successfully', 'success');
          setModalOpen(false);
          fetchTests();
        }
      } else {
        const res = await api.post('/tests', formData);
        if (res.data.success) {
          addToast('New test created successfully', 'success');
          setModalOpen(false);
          fetchTests();
        }
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to save test';
      addToast(msg, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const filteredTests = tests.filter((t) => {
    const matchCat = categoryFilter === 'All' || t.category.toLowerCase() === categoryFilter.toLowerCase();
    const matchQ =
      searchQuery === '' ||
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <div className="admin-tests-view">
      
      <div className="admin-page-header">
        <div>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>
            Diagnostic Tests Catalog Management
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
            Add, update pricing, specimen protocols, and manage laboratory tests.
          </p>
        </div>

        <button onClick={handleOpenAddModal} className="btn btn-primary btn-sm">
          <Plus size={16} />
          <span>Add New Test</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="admin-filter-bar">
        <div style={{ display: 'flex', gap: '10px', flex: 1, minWidth: '280px' }}>
          <div style={{ display: 'flex', alignItems: 'center', background: '#fff', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '4px 10px', flex: 1 }}>
            <Search size={16} color="#94A3B8" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tests..."
              style={{ border: 'none', outline: 'none', paddingLeft: '8px', width: '100%', fontSize: '0.9rem' }}
            />
          </div>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="form-control"
            style={{ width: '180px' }}
          >
            <option value="All">Category: All</option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Tests Table */}
      <div className="card" style={{ padding: '1rem', overflowX: 'auto' }}>
        <table className="admin-full-table">
          <thead>
            <tr>
              <th>Test Code</th>
              <th>Test Name</th>
              <th>Department</th>
              <th>Specimen</th>
              <th>Fasting</th>
              <th>TAT</th>
              <th>Price / MRP</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="9" style={{ textAlign: 'center', padding: '3rem', color: '#94A3B8' }}>
                  Loading tests...
                </td>
              </tr>
            ) : filteredTests.length === 0 ? (
              <tr>
                <td colSpan="9" style={{ textAlign: 'center', padding: '3rem', color: '#94A3B8' }}>
                  No tests found.
                </td>
              </tr>
            ) : (
              filteredTests.map((test) => (
                <tr key={test._id}>
                  <td>
                    <strong style={{ color: 'var(--color-primary)' }}>{test.code}</strong>
                  </td>
                  <td>
                    <div style={{ fontWeight: 700, color: 'var(--color-text-main)' }}>{test.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                      {test.isPopular && <span className="badge badge-secondary" style={{ fontSize: '0.65rem', marginRight: '4px' }}>Popular</span>}
                      {test.homeCollectionAvailable ? 'Home Pickup' : 'Lab Only'}
                    </div>
                  </td>
                  <td>{test.category}</td>
                  <td style={{ fontSize: '0.8rem' }}>{test.sampleType}</td>
                  <td>
                    {test.fastingRequired ? (
                      <span className="badge badge-warning" style={{ fontSize: '0.7rem' }}>
                        {test.fastingHours}h Fasting
                      </span>
                    ) : (
                      <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>None</span>
                    )}
                  </td>
                  <td>{test.tatHours} hrs</td>
                  <td>
                    <strong style={{ color: 'var(--color-primary-dark)' }}>₹{test.price}</strong>
                    <span style={{ fontSize: '0.75rem', color: '#94A3B8', marginLeft: '4px', textDecoration: 'line-through' }}>
                      ₹{test.mrp}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${test.isActive ? 'badge-success' : 'badge-danger'}`}>
                      {test.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button
                        onClick={() => handleOpenEditModal(test)}
                        className="btn btn-outline btn-sm"
                        title="Edit Test"
                      >
                        <Edit3 size={14} />
                      </button>
                      <button
                        onClick={() => handleDeleteTest(test._id, test.name)}
                        className="btn btn-sm"
                        style={{ background: 'var(--color-danger-bg)', color: 'var(--color-danger)', border: '1px solid rgba(239, 68, 68, 0.3)' }}
                        title="Delete Test"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add / Edit Test Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
            <div className="modal-header">
              <h3 style={{ color: 'var(--color-primary)' }}>
                {editingTestId ? 'Edit Diagnostic Test' : 'Add New Diagnostic Test'}
              </h3>
              <button onClick={() => setModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                
                <div className="form-row">
                  <div className="form-group" style={{ flex: 1 }}>
                    <label className="form-label">Test Code *</label>
                    <input
                      type="text"
                      value={formData.code}
                      onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                      placeholder="e.g. DDC-BIO-08"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group" style={{ flex: 2 }}>
                    <label className="form-label">Test Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Serum Ferritin"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Department *</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="form-control"
                      required
                    >
                      {CATEGORIES.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Specimen / Sample Type *</label>
                    <input
                      type="text"
                      value={formData.sampleType}
                      onChange={(e) => setFormData({ ...formData, sampleType: e.target.value })}
                      placeholder="e.g. Serum Blood / Spot Urine"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Special Offer Price (₹) *</label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Standard MRP (₹) *</label>
                    <input
                      type="number"
                      value={formData.mrp}
                      onChange={(e) => setFormData({ ...formData, mrp: Number(e.target.value) })}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">TAT (Hours)</label>
                    <input
                      type="number"
                      value={formData.tatHours}
                      onChange={(e) => setFormData({ ...formData, tatHours: Number(e.target.value) })}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-row" style={{ alignItems: 'center' }}>
                  <div className="form-group">
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.85rem' }}>
                      <input
                        type="checkbox"
                        checked={formData.fastingRequired}
                        onChange={(e) => setFormData({ ...formData, fastingRequired: e.target.checked })}
                      />
                      <span>Fasting Required</span>
                    </label>
                  </div>

                  {formData.fastingRequired && (
                    <div className="form-group" style={{ flex: 1 }}>
                      <label className="form-label">Fasting Hours</label>
                      <input
                        type="number"
                        value={formData.fastingHours}
                        onChange={(e) => setFormData({ ...formData, fastingHours: Number(e.target.value) })}
                        className="form-control"
                      />
                    </div>
                  )}

                  <div className="form-group">
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.85rem' }}>
                      <input
                        type="checkbox"
                        checked={formData.isPopular}
                        onChange={(e) => setFormData({ ...formData, isPopular: e.target.checked })}
                      />
                      <span>Popular Test</span>
                    </label>
                  </div>

                  <div className="form-group">
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.85rem' }}>
                      <input
                        type="checkbox"
                        checked={formData.isActive}
                        onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                      />
                      <span>Active in Catalog</span>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Clinical Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows="2"
                    placeholder="Short description of what the test measures..."
                    className="form-control"
                  ></textarea>
                </div>

                <div className="form-group">
                  <label className="form-label">Preparation Guidelines</label>
                  <input
                    type="text"
                    value={formData.preparation}
                    onChange={(e) => setFormData({ ...formData, preparation: e.target.value })}
                    placeholder="e.g. 10-12 hours overnight fasting. Water allowed."
                    className="form-control"
                  />
                </div>

              </div>

              <div className="modal-footer">
                <button type="button" onClick={() => setModalOpen(false)} className="btn btn-outline btn-sm">
                  Cancel
                </button>
                <button type="submit" disabled={submitting} className="btn btn-primary btn-sm">
                  {submitting ? 'Saving...' : 'Save Test'}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      <style>{`
        .admin-page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .admin-filter-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        .admin-full-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
          text-align: left;
        }
        .admin-full-table th {
          background: var(--color-bg);
          padding: 10px 12px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          border-bottom: 1px solid var(--color-border);
          white-space: nowrap;
        }
        .admin-full-table td {
          padding: 12px;
          border-bottom: 1px solid var(--color-border-subtle);
          vertical-align: middle;
        }
        .admin-full-table tr:hover {
          background: #F8FAFC;
        }
      `}</style>
    </div>
  );
};

export default AdminTestsPage;
