import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  Cpu, 
  Users, 
  Clock, 
  MapPin, 
  Building2, 
  Heart, 
  CheckCircle2, 
  Calendar 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="about-page-wrapper">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <span className="section-subtitle">Our Heritage &amp; Mission</span>
          <h1 className="page-header-title">About Doctor Diagnostics Center</h1>
          <p className="page-header-desc">
            Serving Tiruchirappalli with uncompromised analytical precision, automated pathology, and compassionate patient care.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="section">
        <div className="container">
          <div className="about-grid">
            
            <div className="about-content">
              <span className="badge badge-secondary about-badge">
                Diagnosis &amp; Research • Trichy
              </span>
              <h2 className="about-headline">
                Committed to Diagnostic Accuracy &amp; Clinical Excellence
              </h2>
              <p className="about-lead">
                Established in Tiruchirappalli, <strong>Doctor Diagnostics Center</strong> was founded with a singular conviction: that accurate, timely diagnostics are the bedrock of curative and preventive medicine.
              </p>
              <p className="about-body">
                Located conveniently on Puthur Main Road, Woriyur (Opposite SBI, Near to Aruna Theatre Stop), our central laboratory integrates automated clinical biochemistry, laser flow cytometry hematology, chemiluminescent immunoassay (CLIA), HPLC glycated hemoglobin, 12-lead digital cardiology ECG, and low-dose digital radiology.
              </p>

              <div className="about-features-grid">
                <div className="about-feat-item">
                  <CheckCircle2 size={18} className="feat-check" />
                  <span>Automated Barcoding Tracking</span>
                </div>
                <div className="about-feat-item">
                  <CheckCircle2 size={18} className="feat-check" />
                  <span>Dual Pathologist Sign-off</span>
                </div>
                <div className="about-feat-item">
                  <CheckCircle2 size={18} className="feat-check" />
                  <span>Daily Two-Level Calibrators</span>
                </div>
                <div className="about-feat-item">
                  <CheckCircle2 size={18} className="feat-check" />
                  <span>Cold-Chain Doorstep Phlebotomy</span>
                </div>
              </div>

              <Link to="/contact" className="btn btn-primary btn-lg">
                <span>Visit Our Woriyur Center</span>
              </Link>
            </div>

            {/* Right Side Stats Card */}
            <div className="about-stats-card">
              <div className="about-stat-item">
                <div className="stat-big">100%</div>
                <div className="stat-title">Barcoded Sample Traceability</div>
                <p className="stat-sub">Each patient vacutainer is indexed with unique ID preventing sample mix-ups.</p>
              </div>

              <div className="about-stat-item">
                <div className="stat-big">6:30 AM</div>
                <div className="stat-title">Early Morning Operations</div>
                <p className="stat-sub">Open 7 days a week to accommodate early fasting blood collections.</p>
              </div>

              <div className="about-stat-item border-none">
                <div className="stat-big">&lt; 3-4 Hrs</div>
                <div className="stat-title">Routine Turnaround Time</div>
                <p className="stat-sub">Digital PDF reports dispatched promptly to patient WhatsApp &amp; Email.</p>
              </div>
            </div>

          </div>

          {/* Photographic Laboratory Showcase */}
          <div className="about-photo-showcase">
            <div className="about-showcase-card">
              <img
                src="/images/hero-lab.jpg"
                alt="Doctor Diagnostics Central Laboratory Facility Trichy"
                className="about-showcase-img"
                loading="lazy"
              />
              <div className="about-showcase-caption">
                <strong>Central Diagnostic Facility</strong>
                <span>Puthur Main Road, Woriyur, Trichy</span>
              </div>
            </div>

            <div className="about-showcase-card">
              <img
                src="/images/clinical-analyzers.jpg"
                alt="Automated Clinical Biochemistry Analyzers"
                className="about-showcase-img"
                loading="lazy"
              />
              <div className="about-showcase-caption">
                <strong>Automated Analytical Robotics</strong>
                <span>Random-Access Biochemistry &amp; Laser Flow Cytometry</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Quality Policy Standard */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Standard of Care</span>
            <h2 className="section-title">Our Five-Point Quality Assurance Standard</h2>
            <p className="section-desc">
              Every specimen processed at Doctor Diagnostics Center undergoes stringent medical review.
            </p>
          </div>

          <div className="quality-standards-grid">
            <div className="quality-card">
              <Cpu size={32} className="qc-icon" />
              <h3 className="qc-title">Automated Analytical Robotics</h3>
              <p className="qc-desc">
                Minimizing pipetting variability and subjective reading through direct machine-to-LIS interface.
              </p>
            </div>

            <div className="quality-card">
              <Award size={32} className="qc-icon qc-icon-teal" />
              <h3 className="qc-title">Internal &amp; External QC (EQAS)</h3>
              <p className="qc-desc">
                Daily running of verified normal and abnormal control sera evaluated against clinical multi-rules.
              </p>
            </div>

            <div className="quality-card">
              <Users size={32} className="qc-icon" />
              <h3 className="qc-title">Double Medical Verification</h3>
              <p className="qc-desc">
                Clinical review of critical panic values by senior pathologists with immediate telephone escalation.
              </p>
            </div>

            <div className="quality-card">
              <ShieldCheck size={32} className="qc-icon qc-icon-teal" />
              <h3 className="qc-title">Cold-Chain Sample Logistics</h3>
              <p className="qc-desc">
                Doorstep vacutainers transported strictly inside monitored cold-chain insulated gel containers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page-header-banner {
          background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
          color: #ffffff;
          padding: 3.5rem 0;
          text-align: center;
        }
        .page-header-title {
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        .page-header-desc {
          color: #CBD5E1;
          font-size: 1.05rem;
          max-width: 650px;
          margin: 0 auto;
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.9fr;
          gap: 3rem;
          align-items: center;
          margin-bottom: 3.5rem;
        }
        .about-badge {
          margin-bottom: 1rem;
        }
        .about-headline {
          font-size: clamp(1.85rem, 2.5vw, 2.25rem);
          color: var(--color-primary);
          margin-bottom: 1.25rem;
        }
        .about-lead {
          color: var(--color-text-body);
          font-size: 1.05rem;
          line-height: 1.65;
          margin-bottom: 1rem;
        }
        .about-body {
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        .about-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 2rem;
        }
        .about-feat-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: var(--color-text-main);
        }
        .feat-check {
          color: var(--color-secondary);
          flex-shrink: 0;
        }
        .about-stats-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-card);
          padding: 2rem;
        }
        .about-stat-item {
          padding-bottom: 1.25rem;
          margin-bottom: 1.25rem;
          border-bottom: 1px solid var(--color-border-subtle);
        }
        .border-none {
          border-bottom: none;
          padding-bottom: 0;
          margin-bottom: 0;
        }
        .stat-big {
          font-size: 2.25rem;
          font-weight: 700;
          color: var(--color-primary);
          line-height: 1;
          margin-bottom: 4px;
        }
        .stat-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-bottom: 4px;
        }
        .stat-sub {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          line-height: 1.4;
        }

        /* Photo Showcase */
        .about-photo-showcase {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .about-showcase-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-border);
          height: 320px;
        }
        .about-showcase-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .about-showcase-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(6, 42, 74, 0.9) 0%, rgba(6, 42, 74, 0) 100%);
          padding: 24px 18px 14px;
          color: #ffffff;
          display: flex;
          flex-direction: column;
        }
        .about-showcase-caption strong {
          font-size: 0.95rem;
          color: #5EEAD4;
        }
        .about-showcase-caption span {
          font-size: 0.8rem;
          color: #E2E8F0;
        }

        /* Quality Standards Grid */
        .quality-standards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1.5rem;
        }
        .quality-card {
          background: #ffffff;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
        }
        .qc-icon {
          color: var(--color-primary);
          margin-bottom: 1rem;
        }
        .qc-icon-teal {
          color: var(--color-secondary);
        }
        .qc-title {
          font-size: 1.15rem;
          color: var(--color-text-main);
          margin-bottom: 0.5rem;
        }
        .qc-desc {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.55;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-photo-showcase {
            grid-template-columns: 1fr;
          }
          .about-showcase-card {
            height: 260px;
          }
        }
        @media (max-width: 640px) {
          .about-features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
