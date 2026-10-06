import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  MessageSquare,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

const STEPS = [
  {
    num: '1',
    title: 'Select Tests & Request Pickup',
    desc: 'Choose your individual diagnostic blood tests or health packages online or via WhatsApp.'
  },
  {
    num: '2',
    title: 'Choose Available Date & Time',
    desc: 'Pick your preferred morning slot between 6:30 AM and 12:00 PM for fasting tests.'
  },
  {
    num: '3',
    title: 'Sterile Collection at Doorstep',
    desc: 'Certified phlebotomists arrive with barcoded vacuum tubes, single-use needles, and cold-chain transport.'
  }
];

const LOCALITIES = [
  'Thillai Nagar',
  'Cantonment',
  'KK Nagar',
  'Srirangam',
  'Woraiyur',
  'Tennur',
  'TVS Tollgate',
  'Palakkarai',
  'Ponmalai',
  'Kattur'
];

const HomeCollectionCTA = ({ onOpenBooking }) => {
  const navigate = useNavigate();

  const handleBookClick = () => {
    if (onOpenBooking) {
      onOpenBooking({
        bookingType: 'home_collection'
      });
    } else {
      navigate('/home-collection');
    }
  };

  return (
    <section className="section home-collection-section">
      <div className="container">
        <div className="hc-banner">
          <div className="hc-banner-grid">
            
            {/* Left Narrative & Steps */}
            <div className="hc-banner-left">
              <span className="section-subtitle hc-subtitle">Doorstep Service</span>
              <h2 className="section-title hc-title">Home Sample Collection in Trichy</h2>
              <p className="section-desc hc-desc">
                Safe, convenient, and sterile sample pickup so you don't have to travel on an empty stomach.
              </p>

              {/* 3-Step Process List */}
              <div className="hc-steps-list">
                {STEPS.map((step) => (
                  <div key={step.num} className="hc-step-row">
                    <div className="hc-step-badge">{step.num}</div>
                    <div className="hc-step-body">
                      <h3 className="hc-step-title">{step.title}</h3>
                      <p className="hc-step-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coverage & Charges Information Box */}
              <div className="hc-info-strip">
                <div className="hc-coverage">
                  <MapPin size={16} className="hc-strip-icon" />
                  <span>
                    <strong>Serviceable Areas:</strong> {LOCALITIES.join(', ')} &amp; nearby Trichy areas.
                  </span>
                </div>
                <div className="hc-pricing-note">
                  <ShieldCheck size={16} className="hc-strip-icon" />
                  <span>
                    <strong>Pickup Charges:</strong> Free collection for orders above ₹500 &amp; senior citizens. Nominal ₹100 for single routine tests.
                  </span>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="hc-actions">
                <button
                  type="button"
                  onClick={handleBookClick}
                  className="btn btn-secondary btn-lg"
                >
                  <Home size={18} />
                  <span>Book Home Sample Collection</span>
                </button>
                <a
                  href="https://wa.me/919443152200?text=Hello%20Doctor%20Diagnostics%20Trichy,%20I%20would%20like%20to%20schedule%20a%20home%20sample%20pickup."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <MessageSquare size={18} />
                  <span>WhatsApp Pickup Request</span>
                </a>
              </div>
            </div>

            {/* Right Visual Image Showcase */}
            <div className="hc-photo-card">
              <img
                src="/images/home-collection.jpg"
                alt="Doctor Diagnostics Certified Phlebotomist for Home Sample Collection"
                className="hc-photo-img"
                loading="lazy"
              />
              <div className="hc-photo-badge">
                <ShieldCheck size={16} className="badge-shield-icon" />
                <span>Cold-Chain Insulated Kit &amp; Sterile Equipment</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .home-collection-section {
          background-color: var(--color-bg);
          padding: 3.5rem 0;
        }
        .hc-banner {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          padding: 2.5rem;
        }
        .hc-banner-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.85fr;
          gap: 2.5rem;
          align-items: center;
        }
        .hc-subtitle {
          margin-bottom: 0.35rem;
        }
        .hc-title {
          font-size: clamp(1.85rem, 2.5vw, 2.25rem);
          margin-bottom: 0.5rem;
        }
        .hc-desc {
          font-size: 0.95rem;
          margin-bottom: 1.75rem;
        }
        .hc-steps-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .hc-step-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .hc-step-badge {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--color-primary);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.85rem;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .hc-step-body {
          flex: 1;
        }
        .hc-step-title {
          font-size: 0.975rem;
          color: var(--color-text-main);
          margin-bottom: 2px;
        }
        .hc-step-desc {
          font-size: 0.825rem;
          color: var(--color-text-muted);
          line-height: 1.45;
        }
        .hc-info-strip {
          background: var(--color-secondary-light);
          border: 1px solid rgba(7, 135, 124, 0.2);
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 1.75rem;
        }
        .hc-coverage, .hc-pricing-note {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 0.8125rem;
          color: var(--color-text-body);
        }
        .hc-strip-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .hc-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        /* Photo Card */
        .hc-photo-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-border);
          height: 100%;
          min-height: 400px;
        }
        .hc-photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .hc-photo-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          background: rgba(16, 45, 70, 0.88);
          backdrop-filter: blur(6px);
          color: #ffffff;
          padding: 8px 14px;
          border-radius: var(--radius-md);
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .badge-shield-icon {
          color: #5EEAD4;
          flex-shrink: 0;
        }

        @media (max-width: 1024px) {
          .hc-banner-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .hc-photo-card {
            min-height: 280px;
            max-height: 340px;
          }
        }
        @media (max-width: 640px) {
          .hc-banner {
            padding: 1.5rem 1.25rem;
          }
          .hc-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeCollectionCTA;
