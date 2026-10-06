import React, { useState, useEffect } from 'react';
import { 
  Home, 
  MapPin, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Edit3, 
  CheckCircle2, 
  AlertCircle, 
  RefreshCw,
  X
} from 'lucide-react';
import api from '../../services/api';
import { useToast } from '../../context/ToastContext';

const TRICHY_LOCALITIES = [
  'All',
  'Thillai Nagar',
  'Cantonment',
  'KK Nagar',
  'Srirangam',
  'Woraiyur',
  'Tennur',
  'TVS Tollgate',
  'Palakkarai',
  'Ponmalai (Golden Rock)',
  'Edamalaipatti Pudur',
  'Crawford',
  'Kattur'
];

const PHLEBOTOMISTS = [
  'Unassigned',
  'Senthil Nathan (Phlebotomist)',
  'Ganesh Murugan (Phlebotomist)',
  'Kavitha R. (Phlebotomist)',
  'Manikandan S. (Phlebotomist)'
];

const AdminCollectionsPage = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [localityFilter, setLocalityFilter] = useState('All');
  const [activeModal, setActiveModal] = useState(null);

  const [newStatus, setNewStatus] = useState('confirmed');
  const [assignedPhlebotomist, setAssignedPhlebotomist] = useState('Unassigned');
  const [internalNotes, setInternalNotes] = useState('');
  const [saving, setSaving] = useState(false);

  const { addToast } = useToast();

  const fetchCollections = async () => {
    setLoading(true);
    try {
      let url = '/home-collections?';
      if (statusFilter !== 'all') url += `status=${statusFilter}&`;
      if (localityFilter !== 'All') url += `locality=${encodeURIComponent(localityFilter)}&`;

      const res = await api.get(url);
      if (res.data.success) {
        setCollections(res.data.data);
      }
    } catch (err) {
      console.error('Error fetching home collections:', err);
      addToast('Failed to load home collection requests', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCollections();
  }, [statusFilter, localityFilter]);

  const handleOpenModal = (hc) => {
    setActiveModal(hc);
    setNewStatus(hc.status);
    setAssignedPhlebotomist(hc.assignedPhlebotomist || 'Unassigned');
    setInternalNotes(hc.internalNotes || '');
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!activeModal) return;

    setSaving(true);
    try {
      const res = await api.patch(`/home-collections/${activeModal._id}/status`, {
        status: newStatus,
        assignedPhlebotomist,
        internalNotes
      });
      if (res.data.success) {
        addToast('Collection request updated successfully', 'success');
        setActiveModal(null);
        fetchCollections();
      }
    } catch (err) {
      addToast('Failed to update request', 'error');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-collections-view">
      
      <div className="admin-page-header">
        <div>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>
            Home Sample Collection Dispatch
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
            Coordinate door-step phlebotomy visits across Trichy localities.
          </p>
        </div>

        <button onClick={fetchCollections} className="btn btn-outline btn-sm">
          <RefreshCw size={14} className={loading ? 'spin' : ''} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="admin-filter-bar">
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="form-control"
            style={{ width: '180px' }}
          >
            <option value="all">Status: All</option>
            <option value="requested">Requested (New)</option>
            <option value="confirmed">Confirmed</option>
            <option value="sample_collected">Sample Collected</option>
            <option value="in_lab">In Lab</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>

          <select
            value={localityFilter}
            onChange={(e) => setLocalityFilter(e.target.value)}
            className="form-control"
            style={{ width: '180px' }}
          >
            {TRICHY_LOCALITIES.map((loc) => (
              <option key={loc} value={loc}>Locality: {loc}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Collections Table Card */}
      <div className="card" style={{ padding: '1rem', overflowX: 'auto' }}>
        <table className="admin-full-table">
          <thead>
            <tr>
              <th>Reference ID</th>
              <th>Patient &amp; Contact</th>
              <th>Pickup Address &amp; Locality</th>
              <th>Date &amp; Slot</th>
              <th>Requested Tests</th>
              <th>Assigned Staff</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="8" style={{ textAlign: 'center', padding: '3rem', color: '#94A3B8' }}>
                  Loading home collections...
                </td>
              </tr>
            ) : collections.length === 0 ? (
              <tr>
                <td colSpan="8" style={{ textAlign: 'center', padding: '3rem', color: '#94A3B8' }}>
                  No collection requests matching current filters.
                </td>
              </tr>
            ) : (
              collections.map((hc) => (
                <tr key={hc._id}>
                  <td>
                    <strong style={{ color: 'var(--color-secondary)', fontSize: '0.9rem' }}>
                      {hc.referenceNumber}
                    </strong>
                    <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
                      {new Date(hc.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td>
                    <div style={{ fontWeight: 700, color: 'var(--color-text-main)' }}>
                      {hc.patientName}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                      {hc.mobileNumber}
                    </div>
                  </td>
                  <td>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary)' }}>
                      {hc.locality}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-body)', maxWidth: '240px' }}>
                      {hc.address}
                    </div>
                  </td>
                  <td>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>{hc.preferredDate}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600 }}>
                      {hc.preferredSlot}
                    </div>
                  </td>
                  <td>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-body)' }}>
                      {hc.selectedTests ? hc.selectedTests.join(', ') : 'Tests requested'}
                    </div>
                  </td>
                  <td>
                    <span style={{
                      fontWeight: 600,
                      fontSize: '0.825rem',
                      color: hc.assignedPhlebotomist === 'Unassigned' ? '#EF4444' : 'var(--color-primary)'
                    }}>
                      {hc.assignedPhlebotomist}
                    </span>
                  </td>
                  <td>
                    <span className={`badge ${
                      hc.status === 'confirmed' ? 'badge-success' :
                      hc.status === 'requested' ? 'badge-warning' :
                      hc.status === 'completed' ? 'badge-primary' : 'badge-secondary'
                    }`}>
                      {hc.status.toUpperCase()}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => handleOpenModal(hc)}
                      className="btn btn-outline btn-sm"
                    >
                      <Edit3 size={14} />
                      <span>Dispatch</span>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Dispatch & Status Modal */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
            <div className="modal-header">
              <div>
                <span className="badge badge-secondary">{activeModal.referenceNumber}</span>
                <h3 style={{ marginTop: '4px', color: 'var(--color-primary)' }}>
                  Dispatch Phlebotomist &amp; Status
                </h3>
              </div>
              <button onClick={() => setActiveModal(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleUpdate}>
              <div className="modal-body">
                <div style={{ background: 'var(--color-bg)', padding: '10px 12px', borderRadius: '8px', marginBottom: '1.25rem', fontSize: '0.85rem' }}>
                  <div><strong>Patient:</strong> {activeModal.patientName} ({activeModal.mobileNumber})</div>
                  <div><strong>Locality:</strong> {activeModal.locality}</div>
                  <div><strong>Address:</strong> {activeModal.address}</div>
                  <div><strong>Pickup:</strong> {activeModal.preferredDate} ({activeModal.preferredSlot})</div>
                </div>

                <div className="form-group">
                  <label className="form-label">Assign Phlebotomist Staff:</label>
                  <select
                    value={assignedPhlebotomist}
                    onChange={(e) => setAssignedPhlebotomist(e.target.value)}
                    className="form-control"
                    required
                  >
                    {PHLEBOTOMISTS.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Update Operational Status:</label>
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    className="form-control"
                    required
                  >
                    <option value="requested">Requested</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="sample_collected">Sample Collected</option>
                    <option value="in_lab">In Lab (Testing)</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Internal Phlebotomy / Route Notes</label>
                  <textarea
                    value={internalNotes}
                    onChange={(e) => setInternalNotes(e.target.value)}
                    rows="2"
                    placeholder="e.g. Call patient 15 minutes ahead. Pre-label vacutainers with barcode."
                    className="form-control"
                  ></textarea>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" onClick={() => setActiveModal(null)} className="btn btn-outline btn-sm">
                  Cancel
                </button>
                <button type="submit" disabled={saving} className="btn btn-secondary btn-sm">
                  {saving ? 'Updating...' : 'Save Dispatch Updates'}
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

export default AdminCollectionsPage;
