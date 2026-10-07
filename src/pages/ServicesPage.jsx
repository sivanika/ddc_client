import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FlaskConical, 
  Droplet, 
  Zap, 
  Activity, 
  Heart, 
  Radio, 
  FileText, 
  ShieldAlert,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import AppointmentModal from '../components/booking/AppointmentModal';

const SERVICES = [
  {
    id: 'biochemistry',
    name: 'Biochemistry & Clinical Chemistry',
    icon: <FlaskConical size={32} color="var(--color-primary)" />,
    headline: 'High-Throughput Photometric & Enzymatic Analysis',
    desc: 'Utilizing fully automated clinical chemistry analyzers with refrigerated reagent carousels to perform liver function panels, renal metrics, lipid fractions, uric acid, and serum electrolytes with strict double-level daily calibrators.',
    equipment: 'Fully Automated Random Access Chemistry Analyzer',
    badge: 'Cobas Automated Chemistry Analyzer',
    image: '/images/service-biochemistry.jpg',
    commonTests: ['Lipid Profile Complete', 'Liver Function Test (LFT)', 'Renal Function Test (RFT)', 'Serum Electrolytes (Na+, K+, Cl-)', 'Serum Calcium & Uric Acid'],
    preparation: '8 to 12 hours overnight fasting recommended for lipid and metabolic profiles.'
  },
  {
    id: 'hematology',
    name: 'Hematology & Hemogram Studies',
    icon: <Droplet size={32} color="var(--color-secondary)" />,
    headline: '5-Part Differential Automated Hemograms',
    desc: 'Equipped with multi-angle laser scatter flow cytometry to determine absolute neutrophil, lymphocyte, monocyte, eosinophil, and basophil counts alongside RBC indices, platelet volume, and automated Westergren ESR.',
    equipment: '5-Part Differential Laser Flow Cytometry Hematology Analyzer',
    badge: '5-Part Laser Flow Hematology',
    image: '/images/service-hematology.jpg',
    commonTests: ['Complete Blood Count (CBC)', 'ESR (Westergren)', 'Peripheral Blood Smear Examination', 'Absolute Eosinophil Count (AEC)', 'Platelet Count'],
    preparation: 'No fasting required. Maintain routine daily hydration.'
  },
  {
    id: 'endocrinology',
    name: 'Endocrinology & Chemiluminescence (CLIA)',
    icon: <Zap size={32} color="var(--color-primary)" />,
    headline: 'Ultrasensitive Hormone & Micronutrient Quantification',
    desc: 'Chemiluminescent Microparticle Immunoassay (CLIA) offers supreme analytical sensitivity down to picogram levels for thyroid hormones (T3, T4, TSH), fertility biomarkers, 25-OH Vitamin D3, and Vitamin B12.',
    equipment: 'Automated Chemiluminescence Immunoassay (CLIA) System',
    badge: 'Automated CLIA Immunoassay System',
    image: '/images/service-endocrinology.jpg',
    commonTests: ['Thyroid Profile Total (T3, T4, TSH)', 'Free T3 & Free T4', 'Vitamin D3 (25-Hydroxy)', 'Vitamin B12 (Cobalamin)', 'Serum Ferritin'],
    preparation: 'Morning samples preferred for thyroid assays prior to taking morning medication.'
  },
  {
    id: 'diabetes',
    name: 'Diabetes & Glycemic Monitoring',
    icon: <Activity size={32} color="var(--color-secondary)" />,
    headline: 'NGSP Certified Gold Standard HPLC Methodology',
    desc: 'Ion-exchange High Performance Liquid Chromatography (HPLC) ensures interference-free HbA1c estimation regardless of hemoglobin variants, paired with enzymatic glucose hexokinase testing.',
    equipment: 'High Performance Liquid Chromatography (HPLC) System',
    badge: 'Gold-Standard Tosoh G8 HPLC Analyzer',
    image: '/images/service-diabetes.jpg',
    commonTests: ['HbA1c Glycated Hemoglobin', 'Fasting Blood Sugar (FBS)', 'Post Prandial Blood Sugar (PPBS)', 'Estimated Average Glucose (eAG)', 'Urine Microalbumin/Creatinine'],
    preparation: 'Fasting: 8-10 hours overnight fasting. PPBS: Draw sample exactly 2 hours after start of breakfast.'
  },
  {
    id: 'cardiology',
    name: 'Cardiology (12-Lead Digital ECG)',
    icon: <Heart size={32} color="#DC2626" />,
    headline: 'High-Precision Electrocardiography with Cardiologist Verification',
    desc: 'Resting 12-lead digital electrocardiography capturing high-fidelity myocardial electrical waveforms, rhythm arrhythmias, conduction blocks, and ischemic changes with automated metric printout and verified review.',
    equipment: '12-Channel High-Resolution Digital ECG with Filter Compensation',
    badge: '12-Lead Digital Cardiogram Suite',
    image: '/images/service-cardiology.jpg',
    commonTests: ['12-Lead Resting Digital ECG', 'Cardiac Rhythm Evaluation', 'Pre-operative Cardiac Screen'],
    preparation: 'Wear loose two-piece clothing. Available at center during all operating hours.'
  },
  {
    id: 'radiology',
    name: 'Digital Radiography (X-Ray)',
    icon: <Radio size={32} color="var(--color-primary)" />,
    headline: 'Low-Dose High Frequency Digital Radiology',
    desc: 'High-frequency digital radiography generating crystal-clear bone and chest images with up to 60% lower radiation exposure compared to conventional analog film systems.',
    equipment: 'High Frequency Digital Radiography (DR) Flat Panel Detector',
    badge: 'Digital DR Flat Panel Radiology Suite',
    image: '/images/service-radiology.jpg',
    commonTests: ['Digital Chest X-Ray PA View', 'Cervical & Lumbar Spine Views', 'Extremity & Joint Radiography', 'Paranasal Sinuses (PNS)'],
    preparation: 'Remove metallic necklaces, body piercings, and metallic clothing around imaging area.'
  },
  {
    id: 'clinical-pathology',
    name: 'Clinical Pathology & Urinalysis',
    icon: <FileText size={32} color="var(--color-secondary)" />,
    headline: 'Standardized Automated Urine Chemistry & Microscopy',
    desc: 'Complete physical, biochemical strip reflectance, and microscopic analysis of sediment to detect urinary tract infections, microscopic hematuria, casts, and crystalluria.',
    equipment: 'Automated Urine Chemistry Reflectance Analyzer & Binocular Microscopy',
    badge: 'Automated Urine Chemistry & Microscopy',
    image: '/images/service-urinalysis.jpg',
    commonTests: ['Urine Routine & Microscopic', 'Urine Bile Salts & Bile Pigments', 'Stool Routine & Occult Blood'],
    preparation: 'Clean-catch midstream morning urine sample collected in sterile container provided.'
  },
  {
    id: 'serology',
    name: 'Serology & Infectious Screening',
    icon: <ShieldAlert size={32} color="var(--color-primary)" />,
    headline: 'Rapid Immunochromatographic & Serological Testing',
    desc: 'Rapid and accurate screening for seasonal and tropical infections including Dengue, Typhoid, Malaria, and Hepatitis markers with stat reporting for febrile emergencies.',
    equipment: 'Standardized Serological & Immunochromatographic Systems',
    badge: 'Rapid Infectious Disease Serology',
    image: '/images/service-serology.jpg',
    commonTests: ['Dengue NS1 Antigen + IgM/IgG Duo', 'Widal Slide Agglutination', 'Malaria Rapid Antigen Test (Pf/Pv)', 'HBsAg & Anti-HCV'],
    preparation: 'No fasting required. Immediate STAT urgent testing available.'
  }
];

const ServicesPage = () => {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const navigate = useNavigate();

  const handleBookService = (service) => {
    setSelectedService({
      name: service.name,
      price: 350,
      type: 'test'
    });
    setBookingModalOpen(true);
  };

  return (
    <div className="services-page-wrapper">
      {/* Page Banner with Featured Laboratory Technology Card */}
      <section className="page-header-banner">
        <div className="container">
          <div className="banner-grid-tech">
            <div className="banner-text-col">
              <span className="section-subtitle banner-sub">Laboratory Facilities</span>
              <h1 className="page-header-title">Diagnostic Services &amp; Clinical Investigations</h1>
              <p className="page-header-desc">
                Explore the clinical diagnostic investigations offered by Doctor Diagnostics Center, Trichy. All investigations are conducted strictly under calibrated protocols by certified medical technologists.
              </p>
            </div>
            <div className="banner-image-col">
              <img
                src="/images/clinical-analyzers.jpg"
                alt="Automated Clinical Diagnostics Analyzers"
                className="banner-tech-img"
              />
              <div className="banner-tech-caption">
                <strong>Automated Robotic Processing</strong>
                <span>Barcoded Sample Traceability</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section services-list-section">
        <div className="container">
          <div className="services-container-list">
            {SERVICES.map((srv) => (
              <div key={srv.id} className="service-detail-card">
                
                <div className="service-card-split">
                  
                  {/* Left Column: Clinical Information & CTAs */}
                  <div className="service-info-col">
                    <div className="service-detail-header">
                      <div className="service-icon-box-lg">
                        {srv.icon}
                      </div>
                      <div>
                        <span className="service-subhead">{srv.headline}</span>
                        <h2 className="service-name-lg">{srv.name}</h2>
                      </div>
                    </div>

                    <p className="service-desc-text">{srv.desc}</p>

                    <div className="service-equipment-bar">
                      <strong>Analytical Platform:</strong> {srv.equipment}
                    </div>

                    <div className="service-tests-box">
                      <h4 className="service-tests-title">
                        Common Investigations in this Division:
                      </h4>
                      <div className="service-chips-wrap">
                        {srv.commonTests.map((t, i) => (
                          <span key={i} className="service-test-chip">
                            <CheckCircle2 size={13} color="var(--color-secondary)" />
                            <span>{t}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="service-prep-notice">
                      <Clock size={16} color="var(--color-secondary)" className="prep-icon" />
                      <div>
                        <strong>Preparation Advice:</strong> {srv.preparation}
                      </div>
                    </div>

                    <div className="service-card-actions">
                      <button
                        type="button"
                        onClick={() => handleBookService(srv)}
                        className="btn btn-primary"
                      >
                        <Calendar size={16} />
                        <span>Book Investigation in this Category</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => navigate('/tests')}
                        className="btn btn-outline"
                      >
                        <span>View Catalog Tests</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Dedicated Clinical Diagnostic Image */}
                  <div className="service-media-col">
                    <div className="service-media-card">
                      <img
                        src={srv.image}
                        alt={`${srv.name} Diagnostic Equipment`}
                        className="service-media-img"
                        loading="lazy"
                      />
                      <div className="service-media-overlay">
                        <span className="service-badge-pill">{srv.badge}</span>
                        <span className="service-media-caption">Doctor Diagnostics Center • Trichy</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedItem={selectedService}
      />

      <style>{`
        .services-page-wrapper {
          background-color: var(--color-bg);
          padding-bottom: 4rem;
        }
        .page-header-banner {
          background: linear-gradient(135deg, #062A4A 0%, #0B4778 100%);
          color: #ffffff;
          padding: 3.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .banner-grid-tech {
          display: grid;
          grid-template-columns: 1.3fr 0.9fr;
          gap: 2.5rem;
          align-items: center;
        }
        .banner-sub {
          color: #5EEAD4;
        }
        .page-header-title {
          font-size: 2.4rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 0.75rem;
          color: #ffffff;
        }
        .page-header-desc {
          color: #CBD5E1;
          font-size: 1.05rem;
          line-height: 1.6;
        }
        .banner-image-col {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid rgba(255, 255, 255, 0.2);
          height: 240px;
        }
        .banner-tech-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .banner-tech-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(6, 42, 74, 0.92) 0%, rgba(6, 42, 74, 0) 100%);
          padding: 20px 14px 10px;
          display: flex;
          flex-direction: column;
        }
        .banner-tech-caption strong {
          font-size: 0.85rem;
          color: #5EEAD4;
        }
        .banner-tech-caption span {
          font-size: 0.75rem;
          color: #E2E8F0;
        }

        /* Services List */
        .services-list-section {
          padding-top: 3.5rem;
        }
        .services-container-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }
        .service-detail-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-card);
          padding: 2.25rem;
          transition: all var(--transition-normal);
        }
        .service-detail-card:hover {
          box-shadow: var(--shadow-card-hover);
          border-color: rgba(11, 71, 120, 0.25);
        }

        /* 2-Column Split Layout for Info and Image */
        .service-card-split {
          display: grid;
          grid-template-columns: 1.25fr 0.85fr;
          gap: 2.25rem;
          align-items: stretch;
        }
        .service-info-col {
          display: flex;
          flex-direction: column;
        }

        .service-detail-header {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          margin-bottom: 1.15rem;
        }
        .service-icon-box-lg {
          width: 62px;
          height: 62px;
          border-radius: var(--radius-lg);
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .service-subhead {
          display: block;
          font-size: 0.775rem;
          font-weight: 700;
          color: var(--color-secondary);
          text-transform: uppercase;
          letter-spacing: 0.8px;
          margin-bottom: 2px;
        }
        .service-name-lg {
          font-size: 1.5rem;
          color: var(--color-primary-dark);
          line-height: 1.25;
        }
        .service-desc-text {
          font-size: 0.925rem;
          color: var(--color-text-body);
          line-height: 1.6;
          margin-bottom: 1.15rem;
        }
        .service-equipment-bar {
          background: var(--color-bg);
          padding: 8px 14px;
          border-radius: 6px;
          font-size: 0.85rem;
          color: var(--color-text-main);
          margin-bottom: 1.15rem;
          border-left: 3px solid var(--color-primary);
        }
        .service-tests-box {
          margin-bottom: 1.15rem;
        }
        .service-tests-title {
          font-size: 0.85rem;
          color: var(--color-text-main);
          margin-bottom: 8px;
          font-weight: 700;
        }
        .service-chips-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .service-test-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          border: 1px solid var(--color-border);
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.8125rem;
          font-weight: 600;
          color: var(--color-text-body);
        }
        .service-prep-notice {
          background: #F8FAFC;
          border: 1px solid var(--color-border-subtle);
          border-radius: 6px;
          padding: 10px 14px;
          font-size: 0.85rem;
          color: var(--color-text-body);
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 1.35rem;
        }
        .prep-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }
        .service-card-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: auto;
        }

        /* Right Column Media Card */
        .service-media-col {
          display: flex;
          height: 100%;
        }
        .service-media-card {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 280px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-border);
          background: #0B426F;
        }
        .service-media-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .service-detail-card:hover .service-media-img {
          transform: scale(1.03);
        }
        .service-media-overlay {
          position: absolute;
          inset: auto 0 0 0;
          background: linear-gradient(to top, rgba(6, 42, 74, 0.92) 0%, rgba(6, 42, 74, 0.4) 60%, rgba(6, 42, 74, 0) 100%);
          padding: 24px 16px 14px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .service-badge-pill {
          font-size: 0.775rem;
          font-weight: 700;
          color: #5EEAD4;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .service-media-caption {
          font-size: 0.75rem;
          color: #CBD5E1;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .service-card-split {
            grid-template-columns: 1fr;
            gap: 1.75rem;
          }
          .service-media-card {
            min-height: 240px;
            max-height: 320px;
          }
          .banner-grid-tech {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 768px) {
          .service-detail-card {
            padding: 1.5rem;
          }
          .service-detail-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }
          .service-name-lg {
            font-size: 1.25rem;
          }
          .service-card-actions {
            flex-direction: column;
          }
          .service-card-actions .btn {
            width: 100%;
            justify-content: center;
          }
        }
        @media (max-width: 640px) {
          .service-detail-card {
            padding: 1.25rem 1rem;
          }
          .service-media-card {
            min-height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;
