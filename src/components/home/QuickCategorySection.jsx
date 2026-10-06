import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Activity, 
  Droplet, 
  Heart, 
  Zap, 
  ShieldAlert, 
  FlaskConical, 
  Radio, 
  FileText,
  ArrowRight
} from 'lucide-react';

const CATEGORIES = [
  {
    name: 'Hematology',
    desc: 'CBC, ESR, Blood Grouping, Platelets & Hemoglobin',
    icon: <Droplet size={28} color="#0B4778" />,
    color: '#E8F1F8',
    count: '24+ parameters'
  },
  {
    name: 'Biochemistry',
    desc: 'Lipid Profile, Liver (LFT), Kidney (RFT) & Enzymes',
    icon: <FlaskConical size={28} color="#087F73" />,
    color: '#E6F5F4',
    count: 'Comprehensive Panels'
  },
  {
    name: 'Diabetes Care',
    desc: 'HbA1c HPLC Method, Fasting (FBS) & PPBS Glucose',
    icon: <Activity size={28} color="#0B4778" />,
    color: '#E8F1F8',
    count: 'Gold Standard HPLC'
  },
  {
    name: 'Endocrinology',
    desc: 'Thyroid Panel (T3, T4, TSH) via CLIA Automation',
    icon: <Zap size={28} color="#087F73" />,
    color: '#E6F5F4',
    count: 'Ultrasensitive CLIA'
  },
  {
    name: 'Cardiology',
    desc: '12-Lead High-Resolution Digital ECG with Verification',
    icon: <Heart size={28} color="#DC2626" />,
    color: '#FEE2E2',
    count: 'Instant Rhythm Check'
  },
  {
    name: 'Radiology',
    desc: 'Digital Chest X-Ray PA View with Minimal Radiation',
    icon: <Radio size={28} color="#0B4778" />,
    color: '#E8F1F8',
    count: 'High Definition DR'
  },
  {
    name: 'Immunology',
    desc: 'Vitamin D3 (25-OH), Vitamin B12 & Bone Markers',
    icon: <ShieldAlert size={28} color="#087F73" />,
    color: '#E6F5F4',
    count: 'Quantitative Assay'
  },
  {
    name: 'Clinical Pathology',
    desc: 'Urine Routine, Microscopic Exam & Body Fluids',
    icon: <FileText size={28} color="#0B4778" />,
    color: '#E8F1F8',
    count: 'Complete Urinalysis'
  }
];

const QuickCategorySection = () => {
  const navigate = useNavigate();

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Diagnostic Departments</span>
          <h2 className="section-title">Specialized Clinical Testing Categories</h2>
          <p className="section-desc">
            Equipped with fully automated biochemistry analyzers, CLIA chemiluminescence, and digital radiography for gold-standard diagnostic precision in Trichy.
          </p>
        </div>

        <div className="category-grid">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="category-card"
              onClick={() => navigate(`/tests?category=${encodeURIComponent(cat.name)}`)}
            >
              <div className="category-icon-box" style={{ background: cat.color }}>
                {cat.icon}
              </div>
              <div className="category-content">
                <h3 className="category-name">{cat.name}</h3>
                <p className="category-desc">{cat.desc}</p>
                <div className="category-footer">
                  <span className="category-badge">{cat.count}</span>
                  <span className="category-arrow">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .category-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .category-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          padding: 1.5rem;
          cursor: pointer;
          transition: all var(--transition-normal);
          display: flex;
          flex-direction: column;
        }
        .category-card:hover {
          transform: translateY(-4px);
          border-color: var(--color-primary);
          box-shadow: var(--shadow-card-hover);
        }
        .category-icon-box {
          width: 58px;
          height: 58px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          transition: transform var(--transition-fast);
        }
        .category-card:hover .category-icon-box {
          transform: scale(1.06);
        }
        .category-name {
          font-size: 1.15rem;
          color: var(--color-primary-dark);
          margin-bottom: 0.5rem;
        }
        .category-desc {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 1.25rem;
          flex: 1;
        }
        .category-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.75rem;
          border-top: 1px solid var(--color-border-subtle);
        }
        .category-badge {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-secondary);
        }
        .category-arrow {
          color: var(--color-primary);
          display: flex;
          align-items: center;
          transition: transform var(--transition-fast);
        }
        .category-card:hover .category-arrow {
          transform: translateX(4px);
        }

        @media (max-width: 1024px) {
          .category-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .category-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default QuickCategorySection;
