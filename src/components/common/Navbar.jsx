import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  Calendar, 
  ShieldCheck, 
  MessageSquare 
} from 'lucide-react';

const Navbar = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleBookingClick = () => {
    setMobileMenuOpen(false);
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      navigate('/book');
    }
  };

  return (
    <header className="header-wrapper">
      {/* Top Utility Information Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="top-item top-address">
              <MapPin size={13} className="top-icon" />
              <span>Opposite SBI, Near Aruna Theatre Stop, Puthur Main Rd, Woriyur, Trichy-620003</span>
            </span>
            <span className="top-item top-hours">
              <Clock size={13} className="top-icon" />
              <span>Mon - Sat: 6:30 AM - 9:00 PM | Sun: 7:00 AM - 2:00 PM</span>
            </span>
          </div>

          <div className="top-bar-right">
            <a href="tel:+919443100000" className="top-item top-phone">
              <Phone size={13} className="top-icon" />
              <span>Call: +91 94431 00000</span>
            </a>
            <span className="badge-free-hc hide-mobile">
              <ShieldCheck size={13} />
              <span>Free Home Sample Pickup</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="main-nav">
        <div className="container nav-container">
          {/* Logo & Brand Identity */}
          <Link to="/" className="brand-logo" onClick={() => setMobileMenuOpen(false)}>
            <img src="/logo.svg" alt="Doctor Diagnostics Center Logo" className="logo-img" />
            <div className="brand-text">
              <span className="brand-title">Doctor Diagnostics Center</span>
              <span className="brand-sub">Diagnosis &amp; Research • Trichy</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="desktop-links" aria-label="Main Navigation">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Home
            </NavLink>
            <NavLink to="/tests" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Tests
            </NavLink>
            <NavLink to="/packages" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Packages
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Services
            </NavLink>
            <NavLink to="/home-collection" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Home Collection
            </NavLink>
            <NavLink to="/check-status" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Check Status
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Contact
            </NavLink>
          </nav>

          {/* Action CTAs */}
          <div className="nav-actions">
            <a
              href="https://wa.me/919443152200?text=Hello%20Doctor%20Diagnostics%20Center%20Trichy,%20I%20would%20like%20to%20enquire%20about%20diagnostic%20tests."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm nav-wa-btn"
              title="Chat on WhatsApp"
            >
              <MessageSquare size={15} />
              <span>WhatsApp</span>
            </a>
            <button onClick={handleBookingClick} className="btn btn-primary btn-sm nav-book-btn">
              <Calendar size={15} />
              <span>Book Appointment</span>
            </button>
            
            {/* Hamburger Button for Mobile/Tablet */}
            <button
              className="mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-drawer" role="dialog" aria-modal="true">
          <div className="mobile-drawer-links">
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className="mobile-link">
              Home
            </NavLink>
            <NavLink to="/tests" onClick={() => setMobileMenuOpen(false)} className="mobile-link">
              Tests Catalog
            </NavLink>
            <NavLink to="/packages" onClick={() => setMobileMenuOpen(false)} className="mobile-link">
              Health Packages
            </NavLink>
            <NavLink to="/services" onClick={() => setMobileMenuOpen(false)} className="mobile-link">
              Diagnostic Services
            </NavLink>
            <NavLink to="/home-collection" onClick={() => setMobileMenuOpen(false)} className="mobile-link">
              Home Sample Collection
            </NavLink>
            <NavLink to="/check-status" onClick={() => setMobileMenuOpen(false)} className="mobile-link">
              Check Status
            </NavLink>
            <NavLink to="/about" onClick={() => setMobileMenuOpen(false)} className="mobile-link">
              About Doctor Diagnostics
            </NavLink>
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className="mobile-link">
              Contact &amp; Location
            </NavLink>
            
            <div className="mobile-drawer-actions">
              <button onClick={handleBookingClick} className="btn btn-primary mobile-action-btn">
                <Calendar size={18} />
                <span>Book Appointment</span>
              </button>
              <a
                href="https://wa.me/919443152200?text=Hello%20Doctor%20Diagnostics%20Center%20Trichy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp mobile-action-btn"
              >
                <MessageSquare size={18} />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Scoped Styling for Header */}
      <style>{`
        .header-wrapper {
          position: sticky;
          top: 0;
          z-index: 900;
          background: #ffffff;
          box-shadow: 0 2px 8px rgba(11, 66, 111, 0.06);
        }
        .top-bar {
          background-color: var(--color-primary-dark);
          color: #E2E8F0;
          font-size: 0.8125rem;
          padding: 6px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .top-bar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .top-bar-left, .top-bar-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .top-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #E2E8F0;
        }
        .top-phone {
          font-weight: 600;
        }
        .top-phone:hover {
          color: #5EEAD4;
        }
        .top-icon {
          color: #5EEAD4;
          flex-shrink: 0;
        }
        .badge-free-hc {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(7, 135, 124, 0.25);
          color: #5EEAD4;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          font-size: 0.75rem;
          border: 1px solid rgba(94, 234, 212, 0.25);
        }
        .main-nav {
          min-height: 72px;
          display: flex;
          align-items: center;
          background: #ffffff;
          border-bottom: 1px solid var(--color-border);
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 1rem;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .logo-img {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          object-fit: contain;
        }
        .brand-text {
          display: flex;
          flex-direction: column;
          white-space: nowrap;
        }
        .brand-title {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--color-primary);
          line-height: 1.2;
          letter-spacing: -0.3px;
          white-space: nowrap;
        }
        .brand-sub {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--color-secondary);
          letter-spacing: 0.5px;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .desktop-links {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-shrink: 1;
        }
        .nav-link {
          font-size: 0.885rem;
          font-weight: 600;
          color: var(--color-text-body);
          padding: 6px 4px;
          position: relative;
          white-space: nowrap;
          transition: color var(--transition-fast);
        }
        .nav-link:hover, .nav-link.active {
          color: var(--color-primary);
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2.5px;
          background: var(--color-primary);
          border-radius: 2px;
        }
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .nav-book-btn {
          white-space: nowrap;
        }
        .mobile-toggle-btn {
          display: none;
          background: none;
          border: none;
          color: var(--color-primary);
          cursor: pointer;
          padding: 6px;
        }
        .mobile-drawer {
          background: #ffffff;
          border-top: 1px solid var(--color-border);
          padding: 1.25rem;
          box-shadow: 0 10px 20px rgba(11, 66, 111, 0.08);
          animation: slideUp 0.2s ease-out;
        }
        .mobile-drawer-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .mobile-link {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-text-main);
          padding: 8px 12px;
          border-radius: var(--radius-md);
        }
        .mobile-link:hover, .mobile-link.active {
          background: var(--color-primary-light);
          color: var(--color-primary);
        }
        .mobile-drawer-actions {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid var(--color-border);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .mobile-action-btn {
          width: 100%;
        }

        @media (max-width: 1140px) {
          .desktop-links {
            display: none;
          }
          .mobile-toggle-btn {
            display: block;
          }
          .nav-wa-btn {
            display: none;
          }
        }
        @media (max-width: 768px) {
          .top-address {
            display: none;
          }
          .hide-mobile {
            display: none;
          }
          .brand-title {
            font-size: 1.05rem;
          }
          .logo-img {
            width: 38px;
            height: 38px;
          }
          .nav-book-btn span {
            display: none;
          }
        }
        @media (max-width: 480px) {
          .top-hours span {
            font-size: 0.75rem;
          }
          .top-phone span {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
