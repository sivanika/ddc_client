import React from 'react';
import { Star, Quote, UserCheck } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'R. Soundararajan',
    location: 'Thillai Nagar, Trichy',
    role: 'Retired Bank Manager',
    feedback: 'I booked the Senior Citizen Gold wellness package for my wife and myself. The phlebotomist came promptly at 6:45 AM, drew samples painlessly, and we had our full reports on WhatsApp by 2 PM. Very courteous staff and clean lab setup.',
    rating: 5,
    test: 'Senior Citizen Wellness Profile'
  },
  {
    name: 'Dr. Kavitha Selvan',
    location: 'Cantonment, Trichy',
    role: 'Consultant Physician',
    feedback: 'Doctor Diagnostics Center is my primary referral laboratory in Trichy for hematology and HbA1c testing. Their calibration curves and inter-day precision are commendable. Reports correlate accurately with clinical presentations.',
    rating: 5,
    test: 'Referred Diagnostic Evaluation'
  },
  {
    name: 'M. Anandhakrishnan',
    location: 'KK Nagar, Trichy',
    role: 'IT Project Lead',
    feedback: 'Took their Executive Master Health Checkup before an insurance renewal. Fast, streamlined, no long queues at Salai Road. Everything from blood sample to ECG was completed in under 45 minutes.',
    rating: 5,
    test: 'Master Health Checkup'
  }
];

const Testimonials = () => {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Patient Experiences</span>
          <h2 className="section-title">What Trichy Families Say About Us</h2>
          <p className="section-desc">
            Read authentic feedback from patients and medical practitioners who rely on Doctor Diagnostics Center for diagnostic decisions.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              <p className="testimonial-text">"{t.feedback}"</p>

              <div className="testimonial-footer">
                <div className="testimonial-avatar">
                  <UserCheck size={20} color="var(--color-primary)" />
                </div>
                <div>
                  <h4 className="testimonial-name">{t.name}</h4>
                  <div className="testimonial-meta">{t.role} • {t.location}</div>
                  <span className="testimonial-test-badge">{t.test}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .testimonial-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          padding: 2rem;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-sm);
        }
        .testimonial-stars {
          display: flex;
          gap: 4px;
          margin-bottom: 1rem;
        }
        .testimonial-text {
          font-size: 0.925rem;
          line-height: 1.65;
          color: var(--color-text-body);
          margin-bottom: 1.5rem;
          flex: 1;
          font-style: italic;
        }
        .testimonial-footer {
          display: flex;
          align-items: center;
          gap: 12px;
          border-top: 1px solid var(--color-border-subtle);
          padding-top: 1.25rem;
        }
        .testimonial-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: var(--color-primary-light);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .testimonial-name {
          font-size: 0.95rem;
          color: var(--color-primary-dark);
          margin-bottom: 2px;
        }
        .testimonial-meta {
          font-size: 0.775rem;
          color: var(--color-text-muted);
          margin-bottom: 4px;
        }
        .testimonial-test-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--color-secondary);
          background: var(--color-secondary-light);
          padding: 2px 6px;
          border-radius: 4px;
        }

        @media (max-width: 1024px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
