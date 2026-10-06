import React from 'react';
import { 
  Search, 
  Calendar, 
  Droplet, 
  Cpu, 
  FileCheck2,
  ArrowRight
} from 'lucide-react';

const JOURNEY_STEPS = [
  {
    step: '01',
    icon: <Search size={22} className="step-icon" />,
    title: 'Choose Test or Package',
    desc: 'Browse 14+ clinical tests or comprehensive health checkup packages online.'
  },
  {
    step: '02',
    icon: <Calendar size={22} className="step-icon" />,
    title: 'Select Slot & Location',
    desc: 'Book a walk-in visit to our Salai Road center or request home collection.'
  },
  {
    step: '03',
    icon: <Droplet size={22} className="step-icon" />,
    title: 'Safe Sample Collection',
    desc: 'Barcoded vacuum vacutainers and single-use needles ensure total sterility.'
  },
  {
    step: '04',
    icon: <Cpu size={22} className="step-icon" />,
    title: 'Automated Lab Analysis',
    desc: 'Processed on calibrated analyzers and validated by medical pathologists.'
  },
  {
    step: '05',
    icon: <FileCheck2 size={22} className="step-icon" />,
    title: 'Receive Digital Report',
    desc: 'Fast digital delivery direct to your WhatsApp and email as a verified PDF.'
  }
];

const HowItWorks = () => {
  return (
    <section className="section how-it-works-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Patient Journey</span>
          <h2 className="section-title">How It Works</h2>
          <p className="section-desc">
            Five clear, streamlined steps from initial booking to receiving your verified clinical report.
          </p>
        </div>

        <div className="journey-grid">
          {JOURNEY_STEPS.map((item, idx) => (
            <div key={item.step} className="journey-card">
              <div className="journey-step-badge">{item.step}</div>
              <div className="journey-icon-box">{item.icon}</div>
              <h3 className="journey-title">{item.title}</h3>
              <p className="journey-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .how-it-works-section {
          background-color: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
        }
        .journey-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.25rem;
        }
        .journey-card {
          background: #ffffff;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          padding: 1.5rem 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }
        .journey-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: rgba(11, 66, 111, 0.2);
        }
        .journey-step-badge {
          position: absolute;
          top: 10px;
          right: 12px;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-text-muted);
        }
        .journey-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--color-primary-light);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .step-icon {
          color: var(--color-primary);
        }
        .journey-title {
          font-size: 0.95rem;
          color: var(--color-text-main);
          margin-bottom: 0.4rem;
          line-height: 1.3;
        }
        .journey-desc {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          line-height: 1.45;
        }

        @media (max-width: 1024px) {
          .journey-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 640px) {
          .journey-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
