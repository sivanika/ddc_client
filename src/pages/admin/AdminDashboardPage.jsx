import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  CalendarCheck, 
  Clock, 
  Home, 
  FlaskConical, 
  Package, 
  MessageSquare, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight,
  UserCheck,
  RefreshCw
} from 'lucide-react';
import api from '../../services/api';
import { useToast } from '../../context/ToastContext';

const AdminDashboardPage = () => {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToast();
  const navigate = useNavigate();

  const fetchMetrics = async () => {
    setLoading(true);
    try {
      const res = await api.get('/admin/metrics');
      if (res.data.success) {
        setMetrics(res.data.data);
      }
    } catch (err) {
      console.error('Error fetching admin metrics:', err);
      addToast('Failed to load dashboard metrics', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
  }, []);

  return (
    <div className="admin-dashboard-view">
      
      {/* Top Welcome & Actions */}
      <div className="dashboard-top-row">
        <div>
          <h2 style={{ fontSize: '1.6rem', color: 'var(--color-primary-dark)', marginBottom: '4px' }}>
            Diagnostic Center Overview
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
            Live laboratory operational metrics and intake status for Trichy center.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={fetchMetrics} className="btn btn-outline btn-sm">
            <RefreshCw size={14} className={loading ? 'spin' : ''} />
            <span>Refresh Data</span>
          </button>
          <button onClick={() => navigate('/admin/bookings')} className="btn btn-primary btn-sm">
            <CalendarCheck size={16} />
            <span>Manage All Bookings</span>
          </button>
        </div>
      </div>

      {/* Metrics KPI Cards Grid */}
      <div className="metrics-kpi-grid">
        
        <div className="kpi-card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
          <div className="kpi-header">
            <span className="kpi-label">Today's Appointments</span>
            <div className="kpi-icon-wrap" style={{ background: 'var(--color-primary-light)' }}>
              <Calendar size={18} color="var(--color-primary)" />
            </div>
          </div>
          <div className="kpi-val">{metrics ? metrics.todayBookings : '...'}</div>
          <div className="kpi-note">Scheduled for today's intake</div>
        </div>

        <div className="kpi-card" style={{ borderLeft: '4px solid #F59E0B' }}>
          <div className="kpi-header">
            <span className="kpi-label">Pending Verification</span>
            <div className="kpi-icon-wrap" style={{ background: '#FEF3C7' }}>
              <Clock size={18} color="#D97706" />
            </div>
          </div>
          <div className="kpi-val" style={{ color: '#D97706' }}>
            {metrics ? metrics.pendingBookings : '...'}
          </div>
          <div className="kpi-note">Awaiting reception confirmation</div>
        </div>

        <div className="kpi-card" style={{ borderLeft: '4px solid var(--color-secondary)' }}>
          <div className="kpi-header">
            <span className="kpi-label">Home Sample Requests</span>
            <div className="kpi-icon-wrap" style={{ background: 'var(--color-secondary-light)' }}>
              <Home size={18} color="var(--color-secondary)" />
            </div>
          </div>
          <div className="kpi-val" style={{ color: 'var(--color-secondary)' }}>
            {metrics ? metrics.totalHomeCollections : '...'}
          </div>
          <div className="kpi-note">{metrics?.pendingCollections || 0} unassigned pickups</div>
        </div>

        <div className="kpi-card" style={{ borderLeft: '4px solid var(--color-success)' }}>
          <div className="kpi-header">
            <span className="kpi-label">Confirmed Bookings</span>
            <div className="kpi-icon-wrap" style={{ background: 'var(--color-success-bg)' }}>
              <CheckCircle2 size={18} color="var(--color-success)" />
            </div>
          </div>
          <div className="kpi-val" style={{ color: 'var(--color-success)' }}>
            {metrics ? metrics.confirmedBookings : '...'}
          </div>
          <div className="kpi-note">Total bookings: {metrics?.totalBookings || 0}</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-header">
            <span className="kpi-label">Active Tests in Catalog</span>
            <div className="kpi-icon-wrap" style={{ background: '#F1F5F9' }}>
              <FlaskConical size={18} color="var(--color-primary)" />
            </div>
          </div>
          <div className="kpi-val">{metrics ? metrics.activeTestsCount : '...'}</div>
          <div className="kpi-note">Available for online booking</div>
        </div>

        <div className="kpi-card">
          <div className="kpi-header">
            <span className="kpi-label">Active Health Packages</span>
            <div className="kpi-icon-wrap" style={{ background: '#F1F5F9' }}>
              <Package size={18} color="var(--color-secondary)" />
            </div>
          </div>
          <div className="kpi-val">{metrics ? metrics.activePackagesCount : '...'}</div>
          <div className="kpi-note">Preventive health profiles</div>
        </div>

      </div>

      {/* Two Column Section: Recent Bookings & Recent Home Collections */}
      <div className="dashboard-tables-grid">
        
        {/* Recent Bookings Table */}
        <div className="card dashboard-table-card">
          <div className="table-card-header">
            <div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-dark)' }}>
                Recent Appointments
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                Latest online patient bookings
              </p>
            </div>
            <Link to="/admin/bookings" className="btn btn-outline btn-sm">
              <span>View All</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Ref ID</th>
                  <th>Patient</th>
                  <th>Investigation</th>
                  <th>Date &amp; Slot</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {metrics?.recentBookings && metrics.recentBookings.length > 0 ? (
                  metrics.recentBookings.map((bkg) => (
                    <tr key={bkg._id}>
                      <td>
                        <strong style={{ color: 'var(--color-primary)', fontSize: '0.85rem' }}>
                          {bkg.bookingReference}
                        </strong>
                        <div style={{ fontSize: '0.72rem', color: '#94A3B8' }}>
                          {bkg.bookingType === 'home_collection' ? 'Home' : 'Center'}
                        </div>
                      </td>
                      <td>
                        <div style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>
                          {bkg.patientName}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                          {bkg.mobileNumber}
                        </div>
                      </td>
                      <td style={{ fontSize: '0.85rem' }}>{bkg.itemName}</td>
                      <td>
                        <div style={{ fontSize: '0.825rem', fontWeight: 600 }}>{bkg.appointmentDate}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>{bkg.timeSlot}</div>
                      </td>
                      <td>
                        <span className={`badge ${
                          bkg.status === 'confirmed' ? 'badge-success' :
                          bkg.status === 'pending' ? 'badge-warning' :
                          bkg.status === 'completed' ? 'badge-primary' : 'badge-danger'
                        }`}>
                          {bkg.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center', padding: '1.5rem', color: '#94A3B8' }}>
                      No recent bookings found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Home Collections */}
        <div className="card dashboard-table-card">
          <div className="table-card-header">
            <div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-dark)' }}>
                Home Sample Collection Queue
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                Door-step phlebotomy dispatch
              </p>
            </div>
            <Link to="/admin/collections" className="btn btn-outline btn-sm">
              <span>View All</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Ref ID</th>
                  <th>Patient &amp; Locality</th>
                  <th>Date &amp; Slot</th>
                  <th>Phlebotomist</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {metrics?.recentCollections && metrics.recentCollections.length > 0 ? (
                  metrics.recentCollections.map((hc) => (
                    <tr key={hc._id}>
                      <td>
                        <strong style={{ color: 'var(--color-secondary)', fontSize: '0.85rem' }}>
                          {hc.referenceNumber}
                        </strong>
                      </td>
                      <td>
                        <div style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>
                          {hc.patientName}
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                          {hc.locality} • {hc.mobileNumber}
                        </div>
                      </td>
                      <td>
                        <div style={{ fontSize: '0.825rem', fontWeight: 600 }}>{hc.preferredDate}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>{hc.preferredSlot}</div>
                      </td>
                      <td style={{ fontSize: '0.8rem', color: hc.assignedPhlebotomist === 'Unassigned' ? '#EF4444' : 'var(--color-primary)', fontWeight: 600 }}>
                        {hc.assignedPhlebotomist}
                      </td>
                      <td>
                        <span className={`badge ${
                          hc.status === 'confirmed' ? 'badge-success' :
                          hc.status === 'requested' ? 'badge-warning' :
                          hc.status === 'completed' ? 'badge-primary' : 'badge-secondary'
                        }`}>
                          {hc.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign: 'center', padding: '1.5rem', color: '#94A3B8' }}>
                      No recent home collection requests.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      <style>{`
        .dashboard-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .metrics-kpi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }
        .kpi-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          padding: 1.5rem;
        }
        .kpi-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        .kpi-label {
          font-size: 0.825rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .kpi-icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .kpi-val {
          font-size: 2.2rem;
          font-weight: 800;
          color: var(--color-primary-dark);
          line-height: 1;
          margin-bottom: 6px;
        }
        .kpi-note {
          font-size: 0.775rem;
          color: var(--color-text-muted);
        }
        .dashboard-tables-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .dashboard-table-card {
          padding: 1.5rem;
        }
        .table-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }
        .admin-table-wrap {
          overflow-x: auto;
        }
        .admin-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.85rem;
          text-align: left;
        }
        .admin-table th {
          background: var(--color-bg);
          padding: 8px 12px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          border-bottom: 1px solid var(--color-border);
        }
        .admin-table td {
          padding: 10px 12px;
          border-bottom: 1px solid var(--color-border-subtle);
        }
        .spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 1200px) {
          .metrics-kpi-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .dashboard-tables-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .metrics-kpi-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminDashboardPage;
