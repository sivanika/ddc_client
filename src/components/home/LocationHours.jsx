import React from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Navigation, 
  ExternalLink,
  ShieldCheck,
  Calendar
} from 'lucide-react';

const LocationHours = ({ onOpenBooking }) => {
  return (
    <section className="section location-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Center Location</span>
          <h2 className="section-title">Visit Our Thillai Nagar Center</h2>
          <p className="section-desc">
            Easily accessible diagnostic facility on Salai Road, Trichy with dedicated parking and hygienic sample cubicles.
          </p>
        </div>

        <div className="location-grid">
          
          {/* Left Details Card */}
          <div className="location-card">
            <h3 className="location-card-title">Doctor Diagnostics Center</h3>
            <p className="location-card-sub">Main Laboratory &amp; Diagnostic Facility</p>

            <div className="loc-item">
              <MapPin size={20} className="loc-icon" />
              <div>
                <strong className="loc-item-title">Laboratory Address:</strong>
                <div className="loc-item-detail">No. 42, Salai Road, Near Thillai Nagar 1st Cross,</div>
                <div className="loc-item-detail">Tiruchirappalli - 620018, Tamil Nadu, India</div>
                <div className="loc-landmark">
                  (Landmark: Opposite City Union Bank / Near Fort Station Junction)
                </div>
              </div>
            </div>

            <div className="loc-item">
              <Clock size={20} className="loc-icon" />
              <div>
                <strong className="loc-item-title">Center Hours:</strong>
                <div className="loc-item-detail">Monday to Saturday: <strong>6:30 AM – 9:00 PM</strong></div>
                <div className="loc-item-detail">Sunday: <strong>7:00 AM – 2:00 PM</strong></div>
                <div className="loc-hc-hours">
                  Home Sample Pickup: 6:30 AM – 12:00 PM (All 7 Days)
                </div>
              </div>
            </div>

            <div className="loc-item">
              <Phone size={20} className="loc-icon" />
              <div>
                <strong className="loc-item-title">Telephone &amp; Helplines:</strong>
                <div className="loc-item-detail">
                  Mobile / WhatsApp: <a href="tel:+919443100000" className="loc-phone-link">+91 94431 00000</a>
                </div>
                <div className="loc-item-detail">Landline: +91 431 2740000</div>
              </div>
            </div>

            <div className="loc-item">
              <Mail size={20} className="loc-icon" />
              <div>
                <strong className="loc-item-title">Email Desk:</strong>
                <div className="loc-item-detail">care@doctordiagnostics.com</div>
              </div>
            </div>

            <div className="loc-actions">
              <a
                href="https://maps.google.com/?q=Salai+Road+Thillai+Nagar+Trichy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline loc-btn"
              >
                <Navigation size={15} />
                <span>Get Google Directions</span>
                <ExternalLink size={13} />
              </a>
              <button
                type="button"
                onClick={() => onOpenBooking ? onOpenBooking(null) : null}
                className="btn btn-primary loc-btn"
              >
                <Calendar size={15} />
                <span>Book Center Visit</span>
              </button>
            </div>
          </div>

          {/* Right Visual / Map Embed Card */}
          <div className="map-card">
            <div className="map-header">
              <div className="map-header-left">
                <MapPin size={16} className="map-header-icon" />
                <span className="map-header-title">Salai Road Central Facility</span>
              </div>
              <span className="badge badge-success">Easy Road Access</span>
            </div>

            {/* Google Map Frame */}
            <div className="map-frame-box">
              <iframe
                title="Doctor Diagnostics Center Location Trichy"
                src="https://maps.google.com/maps?q=Salai+Road+Thillai+Nagar+Tiruchirappalli+Tamil+Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="map-iframe"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="map-footer-notes">
              <div className="map-note">
                <ShieldCheck size={15} className="map-note-icon" />
                <span>Wheelchair accessible ramp</span>
              </div>
              <div className="map-note">
                <ShieldCheck size={15} className="map-note-icon" />
                <span>Dedicated two-wheeler &amp; car parking</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .location-section {
          background-color: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
        }
        .location-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 2rem;
          align-items: stretch;
        }
        .location-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          padding: 2.25rem 2rem;
          display: flex;
          flex-direction: column;
        }
        .location-card-title {
          font-size: 1.35rem;
          color: var(--color-text-main);
          margin-bottom: 2px;
        }
        .location-card-sub {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--color-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 1.75rem;
        }
        .loc-item {
          display: flex;
          gap: 12px;
          margin-bottom: 1.25rem;
          font-size: 0.9rem;
          line-height: 1.5;
        }
        .loc-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .loc-item-title {
          display: block;
          color: var(--color-text-main);
          font-size: 0.85rem;
          margin-bottom: 2px;
        }
        .loc-item-detail {
          color: var(--color-text-body);
        }
        .loc-landmark {
          font-size: 0.775rem;
          color: var(--color-text-muted);
          margin-top: 2px;
        }
        .loc-hc-hours {
          font-size: 0.775rem;
          color: var(--color-secondary);
          font-weight: 600;
          margin-top: 2px;
        }
        .loc-phone-link {
          font-weight: 700;
          color: var(--color-primary);
        }
        .loc-actions {
          display: flex;
          gap: 10px;
          margin-top: auto;
          padding-top: 1.5rem;
          border-top: 1px solid var(--color-border-subtle);
          flex-wrap: wrap;
        }
        .loc-btn {
          flex: 1;
        }
        .map-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .map-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.85rem 1.25rem;
          background: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
        }
        .map-header-left {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .map-header-icon {
          color: var(--color-primary);
        }
        .map-header-title {
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--color-text-main);
        }
        .map-frame-box {
          flex: 1;
          background: #E2E8F0;
          min-height: 320px;
        }
        .map-iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }
        .map-footer-notes {
          display: flex;
          justify-content: space-around;
          padding: 0.85rem 1rem;
          background: #ffffff;
          border-top: 1px solid var(--color-border);
          font-size: 0.775rem;
          color: var(--color-text-muted);
        }
        .map-note {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .map-note-icon {
          color: var(--color-secondary);
        }

        @media (max-width: 1024px) {
          .location-grid {
            grid-template-columns: 1fr;
          }
          .map-frame-box {
            min-height: 280px;
          }
        }
      `}</style>
    </section>
  );
};

export default LocationHours;
