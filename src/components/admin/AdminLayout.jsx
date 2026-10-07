import React from 'react';
import { NavLink, Outlet, useNavigate, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CalendarCheck, 
  Home, 
  FlaskConical, 
  Package, 
  MessageSquare, 
  Settings, 
  LogOut, 
  ExternalLink,
  ShieldCheck,
  User,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const AdminLayout = () => {
  const { admin, logout, isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#F1F5F9' }}>
        <p style={{ color: 'var(--color-primary)', fontWeight: 600 }}>Loading Admin Portal...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    navigate('/admin/login');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="admin-portal-wrapper">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <img src="/logo.svg" alt="Doctor Diagnostics Logo" className="admin-logo-img" />
          <div>
            <h2 className="admin-brand-title">Doctor Diagnostics</h2>
            <span className="admin-brand-tag">Admin Management Portal</span>
          </div>
        </div>

        <nav className="admin-nav-menu">
          <NavLink to="/admin" end className={({ isActive }) => (isActive ? 'admin-nav-item active' : 'admin-nav-item')}>
            <LayoutDashboard size={18} />
            <span>Dashboard Overview</span>
          </NavLink>

          <NavLink to="/admin/bookings" className={({ isActive }) => (isActive ? 'admin-nav-item active' : 'admin-nav-item')}>
            <CalendarCheck size={18} />
            <span>Appointments &amp; Bookings</span>
          </NavLink>

          <NavLink to="/admin/collections" className={({ isActive }) => (isActive ? 'admin-nav-item active' : 'admin-nav-item')}>
            <Home size={18} />
            <span>Home Sample Pickups</span>
          </NavLink>

          <NavLink to="/admin/tests" className={({ isActive }) => (isActive ? 'admin-nav-item active' : 'admin-nav-item')}>
            <FlaskConical size={18} />
            <span>Diagnostic Tests (CRUD)</span>
          </NavLink>

          <NavLink to="/admin/packages" className={({ isActive }) => (isActive ? 'admin-nav-item active' : 'admin-nav-item')}>
            <Package size={18} />
            <span>Health Packages (CRUD)</span>
          </NavLink>

          <NavLink to="/admin/enquiries" className={({ isActive }) => (isActive ? 'admin-nav-item active' : 'admin-nav-item')}>
            <MessageSquare size={18} />
            <span>Patient Enquiries</span>
          </NavLink>

          <NavLink to="/admin/settings" className={({ isActive }) => (isActive ? 'admin-nav-item active' : 'admin-nav-item')}>
            <Settings size={18} />
            <span>Business Settings</span>
          </NavLink>
        </nav>

        <div className="admin-sidebar-footer">
          <Link to="/" target="_blank" className="admin-public-link">
            <span>View Public Website</span>
            <ExternalLink size={14} />
          </Link>
          <button onClick={handleLogout} className="admin-logout-btn">
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content View */}
      <div className="admin-main-container">
        {/* Top Header */}
        <header className="admin-header">
          <div className="admin-header-title">
            <span style={{ fontSize: '0.8rem', color: 'var(--color-secondary)', fontWeight: 700, textTransform: 'uppercase' }}>
              Doctor Diagnostics Center • Trichy
            </span>
            <h1 style={{ fontSize: '1.35rem', color: 'var(--color-primary-dark)' }}>
              Operational Management System
            </h1>
          </div>

          <div className="admin-profile-box">
            <div className="admin-avatar">
              <User size={18} color="#ffffff" />
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-text-main)' }}>
                {admin?.name || 'Administrator'}
              </div>
              <span className="badge badge-primary" style={{ fontSize: '0.7rem' }}>
                {admin?.role === 'super_admin' ? 'Super Administrator' : 'Lab Staff'}
              </span>
            </div>
          </div>
        </header>

        {/* Content Outlet */}
        <main className="admin-content-area">
          <Outlet />
        </main>
      </div>

      <style>{`
        .admin-portal-wrapper {
          display: flex;
          min-height: 100vh;
          background: #F8FAFC;
        }
        .admin-sidebar {
          width: 270px;
          background: #0B4778;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
          box-shadow: 2px 0 10px rgba(0,0,0,0.1);
        }
        .admin-brand {
          padding: 1.5rem 1.25rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .admin-logo-img {
          width: 44px;
          height: 44px;
          background: #ffffff;
          border-radius: 50%;
          padding: 3px;
        }
        .admin-brand-title {
          font-size: 1.05rem;
          color: #ffffff;
          line-height: 1.2;
        }
        .admin-brand-tag {
          font-size: 0.7rem;
          color: #5EEAD4;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .admin-nav-menu {
          padding: 1.25rem 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }
        .admin-nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: 8px;
          color: #CBD5E1;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }
        .admin-nav-item:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
        }
        .admin-nav-item.active {
          background: var(--color-secondary);
          color: #ffffff;
          box-shadow: 0 4px 10px rgba(8, 127, 115, 0.3);
        }
        .admin-sidebar-footer {
          padding: 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .admin-public-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.825rem;
          color: #94A3B8;
          padding: 6px 8px;
        }
        .admin-public-link:hover {
          color: #5EEAD4;
        }
        .admin-logout-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(239, 68, 68, 0.2);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #FCA5A5;
          padding: 8px 12px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 600;
          transition: background var(--transition-fast);
        }
        .admin-logout-btn:hover {
          background: rgba(239, 68, 68, 0.35);
          color: #ffffff;
        }
        .admin-main-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .admin-header {
          height: 70px;
          background: #ffffff;
          border-bottom: 1px solid var(--color-border);
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .admin-profile-box {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .admin-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .admin-content-area {
          padding: 2rem;
          flex: 1;
          overflow-y: auto;
        }

        @media (max-width: 900px) {
          .admin-sidebar {
            width: 72px;
          }
          .admin-brand div, .admin-nav-item span, .admin-sidebar-footer span {
            display: none;
          }
          .admin-brand {
            justify-content: center;
            padding: 1rem 0;
          }
          .admin-nav-item {
            justify-content: center;
            padding: 12px 0;
          }
          .admin-header {
            padding: 0 1rem;
          }
          .admin-content-area {
            padding: 1.25rem;
          }
        }
        @media (max-width: 640px) {
          .admin-sidebar {
            width: 54px;
          }
          .admin-header {
            padding: 0 0.75rem;
            height: 56px;
          }
          .admin-content-area {
            padding: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminLayout;
