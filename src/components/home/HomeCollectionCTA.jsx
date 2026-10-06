import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Home, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  UserCheck,
  CheckCircle2
} from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: <UserCheck size={20} className="hc-badge-icon" />,
    text: 'Trained Phlebotomists'
  },
  {
    icon: <ShieldCheck size={20} className="hc-badge-icon" />,
    text: 'Safe & Hygienic Process'
  },
  {
    icon: <Clock size={20} className="hc-badge-icon" />,
    text: 'Flexible Time Slots'
  },
  {
    icon: <MapPin size={20} className="hc-badge-icon" />,
    text: 'Available Across Trichy'
  }
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
        <div className="hc-card-wrapper">
          
          <div className="hc-split-grid">
            
            {/* Left Column: Photo of Phlebotomist at Patient Doorstep */}
            <div className="hc-image-side">
              <img
                src="/images/home-collection.jpg"
                alt="Doctor Diagnostics Phlebotomist Home Sample Collection in Trichy"
                className="hc-main-img"
                loading="lazy"
              />
              <div className="hc-badge-overlay">
                <ShieldCheck size={16} color="#5EEAD4" />
                <span>Cold-Chain Insulated Kit &amp; Sterile Equipment</span>
              </div>
            </div>

            {/* Right Column: Narrative, CTA and 4 Key Attributes */}
            <div className="hc-text-side">
              <span className="section-tag-eyebrow">HOME SAMPLE COLLECTION</span>
              <h2 className="hc-title">Lab Tests at Your Doorstep in Trichy</h2>
              <p className="hc-description">
                Trained professionals, safe and hygienic process, available across Trichy and nearby areas with same-day digital reporting.
              </p>

              {/* Action Button */}
              <div className="hc-cta-row">
                <button
                  type="button"
                  onClick={handleBookClick}
                  className="btn btn-primary hc-action-btn"
                >
                  <span>Request Home Collection</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* 4 Feature Items */}
              <div className="hc-features-list">
                {HIGHLIGHTS.map((item, idx) => (
                  <div key={idx} className="hc-feature-row">
                    <div className="hc-icon-wrap">
                      {item.icon}
                    </div>
                    <span className="hc-feature-label">{item.text}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>

      <style>{`
        .home-collection-section {
          background-color: var(--color-surface);
          padding: 3.5rem 0;
          border-bottom: 1px solid var(--color-border);
        }
        .hc-card-wrapper {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-card);
          overflow: hidden;
        }
        .hc-split-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          align-items: center;
        }

        /* Left Side Image */
        .hc-image-side {
          position: relative;
          height: 100%;
          min-height: 380px;
          background: #0B426F;
          overflow: hidden;
        }
        .hc-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .hc-badge-overlay {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          background: rgba(6, 42, 74, 0.88);
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

        /* Right Side Text */
        .hc-text-side {
          padding: 3rem 2.75rem;
          display: flex;
          flex-direction: column;
        }
        .section-tag-eyebrow {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: 0.8px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 6px;
        }
        .hc-title {
          font-size: clamp(1.65rem, 2.4vw, 2.2rem);
          font-weight: 800;
          color: var(--color-text-main);
          line-height: 1.25;
          margin-bottom: 0.75rem;
        }
        .hc-description {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          line-height: 1.55;
          margin-bottom: 1.75rem;
        }
        .hc-cta-row {
          margin-bottom: 2rem;
        }
        .hc-action-btn {
          padding: 12px 24px;
          font-size: 0.95rem;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        /* 4 Highlights */
        .hc-features-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.15rem 1.5rem;
          border-top: 1px solid var(--color-border-subtle);
          padding-top: 1.75rem;
        }
        .hc-feature-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .hc-icon-wrap {
          color: var(--color-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .hc-badge-icon {
          color: var(--color-secondary);
        }
        .hc-feature-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--color-text-body);
        }

        @media (max-width: 1024px) {
          .hc-split-grid {
            grid-template-columns: 1fr;
          }
          .hc-image-side {
            min-height: 280px;
            max-height: 340px;
          }
          .hc-text-side {
            padding: 2.25rem 1.5rem;
          }
        }
        @media (max-width: 640px) {
          .hc-features-list {
            grid-template-columns: 1fr;
            gap: 0.85rem;
          }
          .hc-action-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default HomeCollectionCTA;
