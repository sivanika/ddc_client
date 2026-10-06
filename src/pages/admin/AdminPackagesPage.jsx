import React, { useState, useEffect } from 'react';
import { 
  Package, 
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

const emptyPkgForm = {
  code: '',
  name: '',
  description: '',
  targetAudience: 'Adults aged 25+',
  price: 1999,
  mrp: 3800,
  includedTests: [
    'Complete Blood Count (CBC with ESR)',
    'Fasting Blood Sugar (FBS)',
    'Lipid Profile Comprehensive',
    'Liver Function Test (LFT)',
    'Renal Function Test (RFT)',
    'Thyroid Profile (TSH)',
    'Urine Routine'
  ],
  fastingRequired: true,
  fastingHours: 10,
  preparation: '10 to 12 hours overnight fasting. Water allowed.',
  isPopular: true,
  isActive: true,
  homeCollectionAvailable: true
};

const AdminPackagesPage = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const [modalOpen, setModalOpen] = useState(false);
  const [editingPkgId, setEditingPkgId] = useState(null);
  const [formData, setFormData] = useState(emptyPkgForm);
  const [includedTestsInput, setIncludedTestsInput] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const { addToast } = useToast();

  const fetchPackages = async () => {
    setLoading(true);
    try {
      const res = await api.get('/packages');
      if (res.data.success) {
        setPackages(res.data.data);
      }
    } catch (err) {
      console.error('Error fetching packages:', err);
      addToast('Failed to load packages', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages();
  }, []);

  const handleOpenAddModal = () => {
    setEditingPkgId(null);
    setFormData(emptyPkgForm);
    setIncludedTestsInput(emptyPkgForm.includedTests.join('\n'));
    setModalOpen(true);
  };

  const handleOpenEditModal = (pkg) => {
    setEditingPkgId(pkg._id);
    setFormData({
      code: pkg.code,
      name: pkg.name,
      description: pkg.description || '',
      targetAudience: pkg.targetAudience || 'All Adults',
      price: pkg.price,
      mrp: pkg.mrp,
      includedTests: pkg.includedTests || [],
      fastingRequired: pkg.fastingRequired !== false,
      fastingHours: pkg.fastingHours || 10,
      preparation: pkg.preparation || '',
      isPopular: pkg.isPopular || false,
      isActive: pkg.isActive !== false,
      homeCollectionAvailable: pkg.homeCollectionAvailable !== false
    });
    setIncludedTestsInput((pkg.includedTests || []).join('\n'));
    setModalOpen(true);
  };

  const handleDelete = async (pkgId, pkgName) => {
    if (!window.confirm(`Are you sure you want to delete package "${pkgName}"?`)) return;

    try {
      const res = await api.delete(`/packages/${pkgId}`);
      if (res.data.success) {
        addToast('Package deleted successfully', 'success');
        fetchPackages();
      }
    } catch (err) {
      addToast('Failed to delete package', 'error');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.code.trim()) {
      addToast('Package name and code are required', 'error');
      return;
    }

    const parsedTests = includedTestsInput
      .split('\n')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const payload = {
      ...formData,
      includedTests: parsedTests,
      totalTestsCount: parsedTests.length
    };

    setSubmitting(true);
    try {
      if (editingPkgId) {
        const res = await api.put(`/packages/${editingPkgId}`, payload);
        if (res.data.success) {
          addToast('Package updated successfully', 'success');
          setModalOpen(false);
          fetchPackages();
        }
      } else {
        const res = await api.post('/packages', payload);
        if (res.data.success) {
          addToast('Package created successfully', 'success');
          setModalOpen(false);
          fetchPackages();
        }
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to save package';
      addToast(msg, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  const filteredPackages = packages.filter((p) =>
    searchQuery === '' ||
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="admin-packages-view">
      
      <div className="admin-page-header">
        <div>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>
            Health Packages Management
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
            Configure preventive health checkup packages, pricing, discounts, and included tests.
          </p>
        </div>

        <button onClick={handleOpenAddModal} className="btn btn-primary btn-sm">
          <Plus size={16} />
          <span>Add New Package</span>
        </button>
      </div>

      {/* Search */}
      <div className="admin-filter-bar">
        <div style={{ display: 'flex', alignItems: 'center', background: '#fff', border: '1px solid var(--color-border)', borderRadius: '8px', padding: '4px 10px', width: '320px' }}>
          <Search size={16} color="#94A3B8" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search health packages..."
            style={{ border: 'none', outline: 'none', paddingLeft: '8px', width: '100%', fontSize: '0.9rem' }}
          />
        </div>
      </div>

      {/* Packages Table */}
      <div className="card" style={{ padding: '1rem', overflowX: 'auto' }}>
        <table className="admin-full-table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Package Name</th>
              <th>Target Audience</th>
              <th>Tests Included</th>
              <th>Price / MRP</th>
              <th>Discount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="8" style={{ textAlign: 'center', padding: '3rem', color: '#94A3B8' }}>
                  Loading packages...
                </td>
              </tr>
            ) : filteredPackages.length === 0 ? (
              <tr>
                <td colSpan="8" style={{ textAlign: 'center', padding: '3rem', color: '#94A3B8' }}>
                  No packages found.
                </td>
              </tr>
            ) : (
              filteredPackages.map((pkg) => (
                <tr key={pkg._id}>
                  <td>
                    <strong style={{ color: 'var(--color-primary)' }}>{pkg.code}</strong>
                  </td>
                  <td>
                    <div style={{ fontWeight: 700, color: 'var(--color-text-main)' }}>{pkg.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                      {pkg.isPopular && <span className="badge badge-secondary" style={{ fontSize: '0.65rem', marginRight: '4px' }}>Popular</span>}
                      {pkg.homeCollectionAvailable ? 'Home Collection Available' : 'Lab Only'}
                    </div>
                  </td>
                  <td>{pkg.targetAudience}</td>
                  <td>
                    <span className="badge badge-primary">
                      {pkg.totalTestsCount || pkg.includedTests.length} Tests
                    </span>
                  </td>
                  <td>
                    <strong style={{ color: 'var(--color-primary-dark)' }}>₹{pkg.price}</strong>
                    <span style={{ fontSize: '0.75rem', color: '#94A3B8', marginLeft: '4px', textDecoration: 'line-through' }}>
                      ₹{pkg.mrp}
                    </span>
                  </td>
                  <td>
                    {pkg.discountPercentage > 0 ? (
                      <span className="badge badge-success">Save {pkg.discountPercentage}%</span>
                    ) : (
                      '—'
                    )}
                  </td>
                  <td>
                    <span className={`badge ${pkg.isActive ? 'badge-success' : 'badge-danger'}`}>
                      {pkg.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <button
                        onClick={() => handleOpenEditModal(pkg)}
                        className="btn btn-outline btn-sm"
                        title="Edit Package"
                      >
                        <Edit3 size={14} />
                      </button>
                      <button
                        onClick={() => handleDelete(pkg._id, pkg.name)}
                        className="btn btn-sm"
                        style={{ background: 'var(--color-danger-bg)', color: 'var(--color-danger)', border: '1px solid rgba(239, 68, 68, 0.3)' }}
                        title="Delete Package"
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

      {/* Add / Edit Package Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
            <div className="modal-header">
              <h3 style={{ color: 'var(--color-primary)' }}>
                {editingPkgId ? 'Edit Health Package' : 'Create New Health Package'}
              </h3>
              <button onClick={() => setModalOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
                
                <div className="form-row">
                  <div className="form-group" style={{ flex: 1 }}>
                    <label className="form-label">Package Code *</label>
                    <input
                      type="text"
                      value={formData.code}
                      onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                      placeholder="e.g. PKG-MHC-02"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group" style={{ flex: 2 }}>
                    <label className="form-label">Package Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Senior Citizen Wellness Profile"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Target Audience</label>
                    <input
                      type="text"
                      value={formData.targetAudience}
                      onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                      placeholder="e.g. Senior Citizens (Men & Women 55+)"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Offer Price (₹) *</label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Total MRP (₹) *</label>
                    <input
                      type="number"
                      value={formData.mrp}
                      onChange={(e) => setFormData({ ...formData, mrp: Number(e.target.value) })}
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Included Tests (Enter one test per line) *</label>
                  <textarea
                    value={includedTestsInput}
                    onChange={(e) => setIncludedTestsInput(e.target.value)}
                    rows="6"
                    placeholder="Complete Blood Count (CBC with ESR)&#10;Fasting Blood Sugar&#10;Lipid Profile&#10;Liver Function Test..."
                    className="form-control"
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <label className="form-label">Preparation Guidelines</label>
                  <input
                    type="text"
                    value={formData.preparation}
                    onChange={(e) => setFormData({ ...formData, preparation: e.target.value })}
                    placeholder="e.g. 10 to 12 hours overnight fasting. Water permitted."
                    className="form-control"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.85rem' }}>
                      <input
                        type="checkbox"
                        checked={formData.isPopular}
                        onChange={(e) => setFormData({ ...formData, isPopular: e.target.checked })}
                      />
                      <span>Featured / Popular Package</span>
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

              </div>

              <div className="modal-footer">
                <button type="button" onClick={() => setModalOpen(false)} className="btn btn-outline btn-sm">
                  Cancel
                </button>
                <button type="submit" disabled={submitting} className="btn btn-primary btn-sm">
                  {submitting ? 'Saving...' : 'Save Package'}
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

export default AdminPackagesPage;
