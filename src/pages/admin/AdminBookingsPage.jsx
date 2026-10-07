import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  CalendarCheck, 
  Clock, 
  User, 
  Phone, 
  MapPin, 
  Edit3, 
  X, 
  CheckCircle2, 
  AlertCircle,
  FileText,
  RefreshCw
} from 'lucide-react';
import api from '../../services/api';
import { useToast } from '../../context/ToastContext';

const AdminBookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Status update modal state
  const [activeModalBooking, setActiveModalBooking] = useState(null);
  const [newStatus, setNewStatus] = useState('confirmed');
  const [statusNote, setStatusNote] = useState('');
  const [internalNotes, setInternalNotes] = useState('');
  const [savingStatus, setSavingStatus] = useState(false);

  const { addToast } = useToast();

  const fetchBookings = async () => {
    setLoading(true);
    try {
      let url = '/bookings?';
      if (statusFilter !== 'all') url += `status=${statusFilter}&`;
      if (typeFilter !== 'all') url += `bookingType=${typeFilter}&`;
      if (searchQuery) url += `q=${encodeURIComponent(searchQuery)}&`;

      const res = await api.get(url);
      if (res.data.success) {
        setBookings(res.data.data);
      }
    } catch (err) {
      console.error('Error fetching bookings:', err);
      addToast('Failed to load bookings', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [statusFilter, typeFilter]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchBookings();
  };

  const handleOpenStatusModal = (bkg) => {
    setActiveModalBooking(bkg);
    setNewStatus(bkg.status);
    setStatusNote('');
    setInternalNotes(bkg.internalNotes || '');
  };

  const handleUpdateStatus = async (e) => {
    e.preventDefault();
    if (!activeModalBooking) return;

    setSavingStatus(true);
    try {
      const res = await api.patch(`/bookings/${activeModalBooking._id}/status`, {
        status: newStatus,
        note: statusNote || `Status updated to ${newStatus}`,
        internalNotes
      });
      if (res.data.success) {
        addToast('Booking status updated successfully', 'success');
        setActiveModalBooking(null);
        fetchBookings();
      }
    } catch (err) {
      addToast('Failed to update status', 'error');
    } finally {
      setSavingStatus(false);
    }
  };

  return (
    <div className="admin-bookings-view">
      
      {/* Page Header */}
      <div className="admin-page-header">
        <div>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>
            Appointment &amp; Booking Management
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
            Search, verify, reschedule, and track patient laboratory appointments.
          </p>
        </div>

        <button onClick={fetchBookings} className="btn btn-outline btn-sm">
          <RefreshCw size={14} className={loading ? 'spin' : ''} />
          <span>Refresh</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="admin-filter-bar">
        <form onSubmit={handleSearchSubmit} className="admin-search-form">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Ref ID, Patient Name, Phone, Test..."
            className="admin-search-input"
          />
          <button type="submit" className="btn btn-primary btn-sm">Search</button>
        </form>

        <div className="admin-filter-selects">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="form-control"
            style={{ width: '160px' }}
          >
            <option value="all">Status: All</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="form-control"
            style={{ width: '160px' }}
          >
            <option value="all">Type: All</option>
            <option value="lab_visit">Center Visit</option>
            <option value="home_collection">Home Collection</option>
          </select>
        </div>
      </div>

      {/* Bookings Table Card */}
      <div className="card" style={{ padding: '1rem', overflowX: 'auto' }}>
        <table className="admin-full-table">
          <thead>
            <tr>
              <th>Booking Ref</th>
              <th>Patient Information</th>
              <th>Investigation / Package</th>
              <th>Schedule</th>
              <th>Type / Locality</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="8" style={{ textAlign: 'center', padding: '3rem', color: '#94A3B8' }}>
                  Loading bookings...
                </td>
              </tr>
            ) : bookings.length === 0 ? (
              <tr>
                <td colSpan="8" style={{ textAlign: 'center', padding: '3rem', color: '#94A3B8' }}>
                  No bookings found matching current filters.
                </td>
              </tr>
            ) : (
              bookings.map((bkg) => (
                <tr key={bkg._id}>
                  <td>
                    <strong style={{ color: 'var(--color-primary)', fontSize: '0.9rem' }}>
                      {bkg.bookingReference}
                    </strong>
                    <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>
                      {new Date(bkg.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td>
                    <div style={{ fontWeight: 700, color: 'var(--color-text-main)' }}>
                      {bkg.patientName}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                      {bkg.mobileNumber} • {bkg.age}y / {bkg.gender}
                    </div>
                  </td>
                  <td>
                    <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{bkg.itemName}</div>
                    <span className="badge badge-primary" style={{ fontSize: '0.65rem' }}>
                      {bkg.itemType.toUpperCase()}
                    </span>
                  </td>
                  <td>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>{bkg.appointmentDate}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-secondary)', fontWeight: 600 }}>
                      {bkg.timeSlot}
                    </div>
                  </td>
                  <td>
                    <span className={`badge ${bkg.bookingType === 'home_collection' ? 'badge-secondary' : 'badge-primary'}`}>
                      {bkg.bookingType === 'home_collection' ? 'Home Sample' : 'Lab Visit'}
                    </span>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '2px' }}>
                      {bkg.locality}
                    </div>
                  </td>
                  <td>
                    <strong style={{ color: 'var(--color-primary-dark)' }}>₹{bkg.price}</strong>
                    <div style={{ marginTop: '3px' }}>
                      {bkg.paymentStatus === 'paid' ? (
                        <span className="badge badge-success" style={{ fontSize: '0.65rem' }}>
                          PAID ({bkg.paymentMethod?.replace('dummy_', '').toUpperCase() || 'ONLINE'})
                        </span>
                      ) : (
                        <span className="badge badge-warning" style={{ fontSize: '0.65rem' }}>
                          PAY AT LAB
                        </span>
                      )}
                    </div>
                  </td>
                  <td>
                    <span className={`badge ${
                      bkg.status === 'confirmed' ? 'badge-success' :
                      bkg.status === 'pending' ? 'badge-warning' :
                      bkg.status === 'completed' ? 'badge-primary' : 'badge-danger'
                    }`}>
                      {bkg.status.toUpperCase()}
                    </span>
                  </td>
                  <td>
                    <button
                      onClick={() => handleOpenStatusModal(bkg)}
                      className="btn btn-outline btn-sm"
                      title="Update status & operational notes"
                    >
                      <Edit3 size={14} />
                      <span>Update</span>
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Status Update Modal */}
      {activeModalBooking && (
        <div className="modal-overlay" onClick={() => setActiveModalBooking(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
            <div className="modal-header">
              <div>
                <span className="badge badge-primary">{activeModalBooking.bookingReference}</span>
                <h3 style={{ marginTop: '4px', color: 'var(--color-primary)' }}>
                  Update Appointment Status
                </h3>
              </div>
              <button onClick={() => setActiveModalBooking(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleUpdateStatus}>
              <div className="modal-body">
                <div style={{ background: 'var(--color-bg)', padding: '10px 12px', borderRadius: '8px', marginBottom: '1.25rem', fontSize: '0.85rem' }}>
                  <div><strong>Patient:</strong> {activeModalBooking.patientName} ({activeModalBooking.mobileNumber})</div>
                  <div><strong>Test:</strong> {activeModalBooking.itemName} (₹{activeModalBooking.price})</div>
                  <div><strong>Slot:</strong> {activeModalBooking.appointmentDate} at {activeModalBooking.timeSlot}</div>
                  <div>
                    <strong>Payment:</strong>{' '}
                    {activeModalBooking.paymentStatus === 'paid' ? (
                      <span style={{ color: 'var(--color-success)', fontWeight: 700 }}>
                        PAID ONLINE ({activeModalBooking.paymentMethod?.replace('dummy_', '').toUpperCase()} • Txn: {activeModalBooking.transactionId || 'DDC-SIM'})
                      </span>
                    ) : (
                      <span style={{ color: 'var(--color-warning)', fontWeight: 700 }}>
                        PENDING (To be paid at reception / pickup)
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Change Status to:</label>
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    className="form-control"
                    required
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed (Slot Reserved)</option>
                    <option value="in_progress">In Progress (Sample Processing)</option>
                    <option value="completed">Completed (Report Verified)</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Status History Log Note</label>
                  <input
                    type="text"
                    value={statusNote}
                    onChange={(e) => setStatusNote(e.target.value)}
                    placeholder="e.g. Patient called and confirmed arrival time"
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Internal Lab Operational Notes</label>
                  <textarea
                    value={internalNotes}
                    onChange={(e) => setInternalNotes(e.target.value)}
                    rows="3"
                    placeholder="Notes for reception, phlebotomy, or billing..."
                    className="form-control"
                  ></textarea>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" onClick={() => setActiveModalBooking(null)} className="btn btn-outline btn-sm">
                  Cancel
                </button>
                <button type="submit" disabled={savingStatus} className="btn btn-primary btn-sm">
                  {savingStatus ? 'Saving...' : 'Save Status Update'}
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
        .admin-search-form {
          display: flex;
          align-items: center;
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 4px 6px 4px 12px;
          flex: 1;
          min-width: 280px;
        }
        .admin-search-input {
          flex: 1;
          border: none;
          outline: none;
          padding: 6px 8px;
          font-size: 0.9rem;
        }
        .admin-filter-selects {
          display: flex;
          gap: 10px;
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
        @media (max-width: 640px) {
          .admin-filter-bar {
            flex-direction: column;
            align-items: stretch;
          }
          .admin-search-form {
            min-width: 100%;
            width: 100%;
            box-sizing: border-box;
          }
          .admin-filter-selects {
            width: 100%;
            flex-wrap: wrap;
          }
          .admin-filter-selects .form-control {
            flex: 1;
            min-width: 120px;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminBookingsPage;
