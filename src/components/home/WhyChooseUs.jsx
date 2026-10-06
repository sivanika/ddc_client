import React from 'react';
import { 
  Cpu, 
  Award, 
  QrCode, 
  Users, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';

const ADVANTAGES = [
  {
    icon: <Cpu size={24} className="advantage-icon icon-primary" />,
    title: 'Automated Analytical Analyzers',
    desc: 'Automated biochemistry and 5-part hematology systems minimize manual variability and deliver consistent clinical accuracy.'
  },
  {
    icon: <QrCode size={24} className="advantage-icon icon-secondary" />,
    title: 'Barcode Sample Identification',
    desc: 'Each vacutainer tube receives a unique barcode at the time of draw, preventing sample mix-ups throughout laboratory processing.'
  },
  {
    icon: <Award size={24} className="advantage-icon icon-primary" />,
    title: 'Internal Quality Controls',
    desc: 'Daily two-level internal quality control runs alongside standard calibration benchmarks before processing patient specimens.'
  },
  {
    icon: <Users size={24} className="advantage-icon icon-secondary" />,
    title: 'Senior Medical Verification',
    desc: 'Abnormal and critical clinical values receive mandatory microscopic review and sign-off by qualified diagnostic pathologists.'
  },
  {
    icon: <Clock size={24} className="advantage-icon icon-primary" />,
    title: 'Rapid Digital Delivery',
    desc: 'Routine blood profiles ready within hours, delivered securely in standardized PDF format directly to your phone and email.'
  },
  {
    icon: <ShieldCheck size={24} className="advantage-icon icon-secondary" />,
    title: 'Clear & Honest Pricing',
    desc: 'Transparent pricing schedules with no hidden processing surcharges, serving families across Trichy with diagnostic integrity.'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section why-choose-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Laboratory Standards</span>
          <h2 className="section-title">Why Choose Doctor Diagnostics Center?</h2>
          <p className="section-desc">
            Combining verified laboratory protocols, modern instrumentation, and patient-centered service in Tiruchirappalli.
          </p>
        </div>

        <div className="advantages-grid">
          {ADVANTAGES.map((adv, idx) => (
            <div key={idx} className="advantage-card">
              <div className="advantage-icon-wrapper">
                {adv.icon}
              </div>
              <h3 className="advantage-title">{adv.title}</h3>
              <p className="advantage-desc">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-choose-section {
          background-color: var(--color-surface);
          border-top: 1px solid var(--color-border);
          border-bottom: 1px solid var(--color-border);
        }
        .advantages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .advantage-card {
          background: #ffffff;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          padding: 1.75rem 1.5rem;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }
        .advantage-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: rgba(11, 66, 111, 0.2);
        }
        .advantage-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: var(--color-bg);
          border: 1px solid var(--color-border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.15rem;
        }
        .icon-primary {
          color: var(--color-primary);
        }
        .icon-secondary {
          color: var(--color-secondary);
        }
        .advantage-title {
          font-size: 1.15rem;
          color: var(--color-text-main);
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }
        .advantage-desc {
          font-size: 0.835rem;
          color: var(--color-text-muted);
          line-height: 1.55;
        }

        @media (max-width: 1024px) {
          .advantages-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .advantages-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
