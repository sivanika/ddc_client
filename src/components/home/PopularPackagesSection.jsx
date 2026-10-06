import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Check, 
  ArrowRight, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Star 
} from 'lucide-react';
import api from '../../services/api';

const DEFAULT_PACKAGES = [
  {
    _id: 'pkg_basic_01',
    code: 'PKG-MHC-01',
    name: 'Basic Health Checkup',
    targetAudience: 'All Age Groups',
    description: 'Complete health evaluation for all age groups with routine vitals.',
    price: 999,
    mrp: 1500,
    totalTestsCount: 36,
    includedTests: ['Complete Blood Count (CBC)', 'Fasting Blood Sugar', 'Lipid Profile', 'Urine Routine', 'Serum Creatinine'],
    image: '/images/package-family.jpg'
  },
  {
    _id: 'pkg_dia_02',
    code: 'PKG-DIA-02',
    name: 'Diabetes Checkup',
    targetAudience: 'Diabetic & Pre-diabetic Care',
    description: 'Blood sugar, HbA1c and related parameters.',
    price: 1199,
    mrp: 1800,
    totalTestsCount: 42,
    includedTests: ['HbA1c Glycated Hemoglobin (HPLC)', 'Fasting Blood Sugar', 'Post Prandial Blood Sugar', 'Lipid Profile', 'Microalbuminuria'],
    image: '/images/package-diabetes.jpg'
  },
  {
    _id: 'pkg_exe_03',
    code: 'PKG-EXE-03',
    name: 'Executive Health Checkup',
    targetAudience: 'Working Professionals',
    description: 'Complete body assessment for professionals.',
    price: 2499,
    mrp: 3500,
    totalTestsCount: 70,
    includedTests: ['Comprehensive Hemogram', 'Liver Function Panel', 'Renal Function Panel', 'Thyroid Profile', '12-Lead Digital ECG'],
    image: '/images/package-executive.jpg'
  },
  {
    _id: 'pkg_wmn_04',
    code: 'PKG-WMN-04',
    name: "Women's Health Checkup",
    targetAudience: 'Women Wellness',
    description: "Essential tests for women's wellness and vitality.",
    price: 1799,
    mrp: 2500,
    totalTestsCount: 58,
    includedTests: ['Complete Blood Count', 'Thyroid Profile (T3, T4, TSH)', 'Serum Calcium & Vitamin D3', 'Serum Ferritin', 'Urine Routine'],
    image: '/images/package-women.jpg'
  }
];

export const getPackageImage = (pkg) => {
  if (pkg?.image) return pkg.image;
  const name = (pkg?.name || '').toLowerCase();
  const code = (pkg?.code || '').toLowerCase();
  if (name.includes('diabet') || code.includes('dia')) return '/images/package-diabetes.jpg';
  if (name.includes('execut') || name.includes('cardiac') || code.includes('exe')) return '/images/package-executive.jpg';
  if (name.includes('women') || name.includes('female') || code.includes('wmn')) return '/images/package-women.jpg';
  if (name.includes('senior') || name.includes('elder')) return '/images/package-executive.jpg';
  return '/images/package-family.jpg';
};

const PopularPackagesSection = ({ onSelectPackage }) => {
  const [packages, setPackages] = useState(DEFAULT_PACKAGES);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await api.get('/packages');
        if (res.data && res.data.success && res.data.data.length > 0) {
          // Take up to 4 packages
          const fetched = res.data.data.slice(0, 4).map((p, idx) => ({
            ...p,
            image: getPackageImage(p) || DEFAULT_PACKAGES[idx % DEFAULT_PACKAGES.length].image
          }));
          setPackages(fetched);
        }
      } catch (err) {
        console.error('Error fetching health packages, using curated defaults:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  const handleBookPackage = (pkg) => {
    if (onSelectPackage) {
      onSelectPackage({
        itemType: 'package',
        itemId: pkg._id,
        itemName: pkg.name,
        price: pkg.price
      });
    } else {
      navigate('/book');
    }
  };

  return (
    <section className="section section-alt packages-section">
      <div className="container">
        
        {/* Section Header with Split Right Link */}
        <div className="section-header-split">
          <div>
            <span className="section-tag-eyebrow">POPULAR PACKAGES</span>
            <h2 className="section-main-heading">Health Checkup Packages for You and Your Family</h2>
          </div>
          <button 
            type="button" 
            onClick={() => navigate('/packages')} 
            className="section-header-link"
          >
            <span>View All Packages</span>
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="packages-grid">
          {packages.map((pkg, idx) => {
            const isFeatured = idx === 2 || pkg.code === 'PKG-EXE-03';
            const imgUrl = getPackageImage(pkg);

            return (
              <div
                key={pkg._id || idx}
                className={`pkg-card ${isFeatured ? 'pkg-card-featured' : ''}`}
              >
                {/* Image Header with Card Overflow Hidden */}
                <div className="pkg-card-media">
                  <img
                    src={imgUrl}
                    alt={pkg.name}
                    className="pkg-card-img"
                    loading="lazy"
                  />
                  {isFeatured && (
                    <div className="pkg-featured-badge">
                      <Star size={11} fill="#FFFFFF" />
                      <span>Popular</span>
                    </div>
                  )}
                </div>

                <div className="pkg-card-body">
                  <h3 className="pkg-name">{pkg.name}</h3>

                  <div className="pkg-tests-pill-row">
                    <span className="pkg-tests-pill">
                      {pkg.totalTestsCount || pkg.includedTests?.length || 36} Tests
                    </span>
                  </div>

                  <p className="pkg-description">{pkg.description}</p>

                  {/* Pricing Box */}
                  <div className="pkg-pricing-row">
                    <span className="pkg-price-now">₹ {pkg.price}</span>
                    {pkg.mrp && pkg.mrp > pkg.price && (
                      <span className="pkg-price-mrp">₹ {pkg.mrp}</span>
                    )}
                  </div>

                  {/* Action CTA */}
                  <div className="pkg-card-actions">
                    <button
                      type="button"
                      onClick={() => handleBookPackage(pkg)}
                      className="btn btn-primary pkg-book-btn"
                    >
                      <span>Book Now</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        .packages-section {
          background-color: var(--color-bg);
          padding: 3.5rem 0;
          border-bottom: 1px solid var(--color-border);
        }
        .section-header-split {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 2rem;
          gap: 1rem;
        }
        .section-tag-eyebrow {
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-primary);
          letter-spacing: 0.8px;
          text-transform: uppercase;
          display: block;
          margin-bottom: 4px;
        }
        .section-main-heading {
          font-size: clamp(1.6rem, 2.3vw, 2.1rem);
          font-weight: 800;
          color: var(--color-text-main);
          line-height: 1.25;
          margin: 0;
        }
        .section-header-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: transparent;
          border: none;
          color: var(--color-primary);
          font-weight: 600;
          font-size: 0.9375rem;
          cursor: pointer;
          white-space: nowrap;
          transition: gap var(--transition-fast), color var(--transition-fast);
        }
        .section-header-link:hover {
          color: var(--color-primary-dark);
          gap: 10px;
        }

        /* 4 Cards Grid matching Reference Image */
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          align-items: stretch;
        }
        .pkg-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
        }
        .pkg-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: rgba(11, 66, 111, 0.25);
        }
        .pkg-card-featured {
          border-color: var(--color-primary);
        }

        /* Top Image Banner */
        .pkg-card-media {
          position: relative;
          width: 100%;
          height: 160px;
          overflow: hidden;
          background: #0B426F;
        }
        .pkg-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .pkg-card:hover .pkg-card-img {
          transform: scale(1.05);
        }
        .pkg-featured-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: var(--color-primary);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.7rem;
          padding: 3px 8px;
          border-radius: var(--radius-full);
          display: inline-flex;
          align-items: center;
          gap: 4px;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        /* Card Body */
        .pkg-card-body {
          padding: 1.25rem 1.15rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .pkg-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-text-main);
          line-height: 1.3;
          margin-bottom: 6px;
        }
        .pkg-tests-pill-row {
          margin-bottom: 8px;
        }
        .pkg-tests-pill {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-secondary);
          background: var(--color-secondary-light);
          padding: 2px 8px;
          border-radius: var(--radius-sm);
        }
        .pkg-description {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          line-height: 1.45;
          margin-bottom: 1.15rem;
          flex: 1;
        }

        /* Pricing */
        .pkg-pricing-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 1.15rem;
        }
        .pkg-price-now {
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--color-primary);
        }
        .pkg-price-mrp {
          font-size: 0.85rem;
          color: var(--color-text-light);
          text-decoration: line-through;
        }

        /* Action */
        .pkg-card-actions {
          margin-top: auto;
        }
        .pkg-book-btn {
          width: 100%;
          justify-content: center;
          padding: 9px 14px;
          font-size: 0.875rem;
        }

        @media (max-width: 1024px) {
          .packages-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .packages-grid {
            grid-template-columns: 1fr;
          }
          .section-header-split {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default PopularPackagesSection;
