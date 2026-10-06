import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  Lock,
  MessageSquare
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-grid">
          
          {/* Brand & Center Overview */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <img src="/logo.svg" alt="Doctor Diagnostics Center Logo" className="footer-logo" />
              <div>
                <h3 className="footer-brand-title">Doctor Diagnostics Center</h3>
                <span className="footer-brand-sub">Diagnosis &amp; Research • Trichy</span>
              </div>
            </div>
            <p className="footer-desc">
              Tiruchirappalli’s trusted diagnostic laboratory delivering automated pathology, biochemistry, digital ECG, and radiology with verified clinical precision and same-day digital reporting.
            </p>
            <div className="footer-badges">
              <span className="footer-badge-item">
                <ShieldCheck size={15} /> Automated Analytical Analyzers
              </span>
              <span className="footer-badge-item">
                <ShieldCheck size={15} /> Daily Internal Quality Controls
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/"><ChevronRight size={13} /> Home</Link></li>
              <li><Link to="/tests"><ChevronRight size={13} /> Diagnostic Tests Catalog</Link></li>
              <li><Link to="/packages"><ChevronRight size={13} /> Health Checkup Packages</Link></li>
              <li><Link to="/services"><ChevronRight size={13} /> Diagnostic Services</Link></li>
              <li><Link to="/home-collection"><ChevronRight size={13} /> Home Sample Collection</Link></li>
              <li><Link to="/check-status"><ChevronRight size={13} /> Check Booking Status</Link></li>
              <li><Link to="/about"><ChevronRight size={13} /> About Our Center</Link></li>
              <li><Link to="/contact"><ChevronRight size={13} /> Contact &amp; Directions</Link></li>
            </ul>
          </div>

          {/* Diagnostic Disciplines */}
          <div className="footer-col">
            <h4 className="footer-heading">Diagnostic Specialties</h4>
            <ul className="footer-links">
              <li><Link to="/tests?category=Hematology"><ChevronRight size={13} /> Hematology (CBC, Blood)</Link></li>
              <li><Link to="/tests?category=Biochemistry"><ChevronRight size={13} /> Biochemistry &amp; Enzymes</Link></li>
              <li><Link to="/tests?category=Endocrinology"><ChevronRight size={13} /> Thyroid &amp; Hormones</Link></li>
              <li><Link to="/tests?category=Diabetes Care"><ChevronRight size={13} /> Diabetes Care (HbA1c)</Link></li>
              <li><Link to="/tests?category=Immunology"><ChevronRight size={13} /> Vitamin D3 &amp; B12</Link></li>
              <li><Link to="/services"><ChevronRight size={13} /> 12-Lead Digital ECG</Link></li>
              <li><Link to="/services"><ChevronRight size={13} /> Digital Chest X-Ray</Link></li>
              <li><Link to="/tests?category=Clinical Pathology"><ChevronRight size={13} /> Clinical Pathology</Link></li>
            </ul>
          </div>

          {/* Center Address & Hours */}
          <div className="footer-col">
            <h4 className="footer-heading">Center &amp; Contact</h4>
            <div className="footer-contact-item">
              <MapPin size={16} className="footer-contact-icon" />
              <span>Opposite SBI, Near to Aruna Theatre Stop, Ramalinga Nagar, Puthur Main Road, Woriyur, Trichy-620003, Tamil Nadu</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={16} className="footer-contact-icon" />
              <div>
                <div><a href="tel:+919443100000" className="footer-link-highlight">+91 94431 00000</a></div>
                <div className="footer-contact-sub">+91 431 2740000 (Lab Desk)</div>
              </div>
            </div>
            <div className="footer-contact-item">
              <MessageSquare size={16} className="footer-contact-icon" />
              <a 
                href="https://wa.me/919443152200" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-wa-link"
              >
                +91 94431 52200 (WhatsApp)
              </a>
            </div>
            <div className="footer-contact-item">
              <Clock size={16} className="footer-contact-icon" />
              <div>
                <div>Mon - Sat: 6:30 AM - 9:00 PM</div>
                <div className="footer-contact-sub">Sunday: 7:00 AM - 2:00 PM</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Doctor Diagnostics Center, Trichy. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/about">Privacy &amp; Terms</Link>
            <span className="footer-sep">•</span>
            <Link to="/contact">Trichy Service Area</Link>
            <span className="footer-sep">•</span>
            <Link to="/admin" className="admin-portal-link">
              <Lock size={12} /> Staff Portal
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .site-footer {
          background-color: var(--color-primary-dark);
          color: #E2E8F0;
          margin-top: auto;
          border-top: 3px solid var(--color-secondary);
        }
        .footer-main {
          padding: 3.5rem 1.5rem 2.5rem;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.35fr 0.95fr 1fr 1.15fr;
          gap: 2.25rem;
        }
        .footer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 0.85rem;
        }
        .footer-logo {
          width: 44px;
          height: 44px;
          background: #ffffff;
          padding: 3px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .footer-brand-title {
          color: #FFFFFF;
          font-size: 1.1rem;
          margin-bottom: 2px;
          line-height: 1.2;
        }
        .footer-brand-sub {
          color: #5EEAD4;
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }
        .footer-desc {
          color: #CBD5E1;
          font-size: 0.835rem;
          line-height: 1.55;
          margin-bottom: 1.15rem;
        }
        .footer-badges {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .footer-badge-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.775rem;
          color: #5EEAD4;
        }
        .footer-heading {
          color: #FFFFFF;
          font-size: 1.05rem;
          margin-bottom: 1.15rem;
          position: relative;
          padding-bottom: 6px;
        }
        .footer-heading::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 28px;
          height: 2px;
          background: var(--color-secondary);
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .footer-links a {
          color: #CBD5E1;
          font-size: 0.835rem;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: transform var(--transition-fast), color var(--transition-fast);
        }
        .footer-links a:hover {
          color: #5EEAD4;
          transform: translateX(3px);
        }
        .footer-contact-item {
          display: flex;
          gap: 10px;
          margin-bottom: 0.85rem;
          font-size: 0.835rem;
          color: #CBD5E1;
        }
        .footer-contact-icon {
          color: #38BDF8;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .footer-link-highlight {
          color: #FFFFFF;
          font-weight: 600;
        }
        .footer-wa-link {
          color: #5EEAD4;
          font-weight: 600;
        }
        .footer-contact-sub {
          color: #94A3B8;
          font-size: 0.775rem;
        }
        .footer-bottom {
          background-color: #041B30;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 1rem 0;
        }
        .footer-bottom-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.8125rem;
          color: #94A3B8;
        }
        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .footer-bottom-links a {
          color: #94A3B8;
        }
        .footer-bottom-links a:hover {
          color: #FFFFFF;
        }
        .footer-sep {
          color: #475569;
        }
        .admin-portal-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #38BDF8;
          font-weight: 600;
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
          .footer-bottom-inner {
            flex-direction: column;
            gap: 8px;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
