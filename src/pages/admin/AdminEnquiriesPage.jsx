import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Search, 
  Phone, 
  Mail, 
  Clock, 
  Edit3, 
  CheckCircle2, 
  RefreshCw,
  X
} from 'lucide-react';
import api from '../../services/api';
import { useToast } from '../../context/ToastContext';

const AdminEnquiriesPage = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [activeModalEnq, setActiveModalEnq] = useState(null);
  const [newStatus, setNewStatus] = useState('in_progress');
  const [internalNotes, setInternalNotes] = useState('');
  const [saving, setSaving] = useState(false);

  const { addToast } = useToast();

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      let url = '/enquiries?';
      if (statusFilter !== 'all') url += `status=${statusFilter}&`;
      if (searchQuery) url += `q=${encodeURIComponent(searchQuery)}&`;

      const res = await api.get(url);
      if (res.data.success) {
        setEnquiries(res.data.data);
      }
    } catch (err) {
      console.error('Error fetching enquiries:', err);
      addToast('Failed to load enquiries', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEnquiries();
  }, [statusFilter]);

  const handleOpenModal = (enq) => {
    setActiveModalEnq(enq);
    setNewStatus(enq.status);
    setInternalNotes(enq.internalNotes || '');
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!activeModalEnq) return;

    setSaving(true);
    try {
      const res = await api.patch(`/enquiries/${activeModalEnq._id}/status`, {
        status: newStatus,
        internalNotes
      });
      if (res.data.success) {
        addToast('Enquiry status updated successfully', 'success');
        setActiveModalEnq(null);
        fetchEnquiries();
      }
    } catch (err) {
      addToast('Failed to update enquiry status', 'error');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="admin-enquiries-view">
      
      <div className="admin-page-header">
        <div>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>
            Patient &amp; Corporate Enquiries
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
            Follow up on customer inquiries, home collection requests, and corporate camp proposals.
          </p>
        </div>

        <button onClick={fetchEnquiries} className="btn btn-outline btn-sm">
          <RefreshCw size={14} className={loading ? 'spin' : ''} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Filter */}
      <div className="admin-filter-bar">
        <div style={{ display: 'flex', gap: '10px' }}>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="form-control"
            style={{ width: '180px' }}
          >
            <option value="all">Status: All</option>
            <option value="new">New</option>
            <option value="in_progress">In Progress</option>
            <option value="resolved">Resolved</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>

      {/* Enquiries Table */}
      <div className="card" style={{ padding: '1rem', overflowX: 'auto' }}>
        <table className="admin-full-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Contact Name</th>
              <th>Phone / Email</th>
              <th>Type</th>
              <th>Subject &amp; Message</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center', padding: '3rem', color: '#94A3B8' }}>
                  Loading enquiries...
                </td>
              </tr>
            ) : enquiries.length === 0 ? (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center', padding: '3rem', color: '#94A3B8' }}>
                  No enquiries found.
                </td>
              </tr>
            ) : (
              enquiries.map((enq) => (
                <tr key={enq._id}>
                  <td style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', whiteSpace: 'nowrap' }}>
                    {new Date(enq.createdAt).toLocaleDateString()}
                  </td>
                  <td>
                    <strong style={{ color: 'var(--color-text-main)' }}>{enq.name}</strong>
                  </td>
                  <td>
                    <div><a href={`tel:${enq.phone}`}>{enq.phone}</a></div>
                    {enq.email && <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{enq.email}</div>}
                  </td>
                  <td>
                    <span className="badge badge-primary" style={{ fontSize: '0.7rem' }}>
                      {enq.enquiryType}
                    </span>
                  </td>
                  <td>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--color-primary)' }}>
                      {enq.subject}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', maxWidth: '300px' }}>
                      {enq.message}
                    </div>
                  </td>
                  <td>
                    <span className={`badge ${
                      enq.status === 'resolved' ? 'badge-success' :
                      enq.status === 'new' ? 'badge-warning' :
                      enq.status === 'in_progress' ? 'badge-primary' : 'badge-danger'
                    }`}>
                      {enq.status.toUpperCase()}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => handleOpenModal(enq)}
                      className="btn btn-outline btn-sm"
                    >
                      <Edit3 size={14} />
                      <span>Respond</span>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {activeModalEnq && (
        <div className="modal-overlay" onClick={() => setActiveModalEnq(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
            <div className="modal-header">
              <h3 style={{ color: 'var(--color-primary)' }}>Update Enquiry Status</h3>
              <button onClick={() => setActiveModalEnq(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleUpdate}>
              <div className="modal-body">
                <div style={{ background: 'var(--color-bg)', padding: '12px', borderRadius: '8px', marginBottom: '1.25rem', fontSize: '0.875rem' }}>
                  <div><strong>From:</strong> {activeModalEnq.name} ({activeModalEnq.phone})</div>
                  <div><strong>Subject:</strong> {activeModalEnq.subject}</div>
                  <div style={{ marginTop: '6px', color: 'var(--color-text-muted)' }}>"{activeModalEnq.message}"</div>
                </div>

                <div className="form-group">
                  <label className="form-label">Status</label>
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    className="form-control"
                    required
                  >
                    <option value="new">New</option>
                    <option value="in_progress">In Progress (Staff following up)</option>
                    <option value="resolved">Resolved</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Staff Notes / Action Taken</label>
                  <textarea
                    value={internalNotes}
                    onChange={(e) => setInternalNotes(e.target.value)}
                    rows="3"
                    placeholder="e.g. Spoke to client on phone, shared corporate checkup tariff via WhatsApp."
                    className="form-control"
                  ></textarea>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" onClick={() => setActiveModalEnq(null)} className="btn btn-outline btn-sm">
                  Cancel
                </button>
                <button type="submit" disabled={saving} className="btn btn-primary btn-sm">
                  {saving ? 'Updating...' : 'Save Updates'}
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

export default AdminEnquiriesPage;
