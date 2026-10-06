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

const PopularPackagesSection = ({ onSelectPackage }) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await api.get('/packages');
        if (res.data && res.data.success) {
          // Take top 3 packages
          setPackages(res.data.data.slice(0, 3));
        }
      } catch (err) {
        console.error('Error fetching health packages:', err);
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
        <div className="section-header">
          <span className="section-subtitle">Preventive Healthcare</span>
          <h2 className="section-title">Health Checkup Packages</h2>
          <p className="section-desc">
            Scientifically curated health screenings for every life stage with verified savings up to 47%. Doorstep sample pickup available across Trichy.
          </p>
        </div>

        {loading ? (
          <div className="packages-loading-state">
            <span>Loading health checkup packages...</span>
          </div>
        ) : (
          <div className="packages-grid">
            {packages.map((pkg, idx) => {
              const isFeatured = idx === 0 || pkg.code === 'PKG-MHC-01';

              return (
                <div
                  key={pkg._id}
                  className={`pkg-card ${isFeatured ? 'pkg-card-featured' : ''}`}
                >
                  {isFeatured && (
                    <div className="pkg-featured-badge">
                      <Star size={12} fill="#FFFFFF" />
                      <span>Most Recommended</span>
                    </div>
                  )}

                  <div className="pkg-top">
                    <span className="pkg-target-tag">{pkg.targetAudience}</span>
                    <h3 className="pkg-name">{pkg.name}</h3>
                    <p className="pkg-description">{pkg.description}</p>
                  </div>

                  {/* Pricing Box */}
                  <div className="pkg-pricing-box">
                    <div className="pkg-price-now">₹{pkg.price}</div>
                    {pkg.mrp && pkg.mrp > pkg.price && (
                      <div className="pkg-price-mrp">₹{pkg.mrp}</div>
                    )}
                    <div className="pkg-tests-count">
                      <span>{pkg.totalTestsCount || pkg.includedTests.length} Tests</span>
                    </div>
                  </div>

                  {/* Included Tests List */}
                  <div className="pkg-tests-list">
                    <span className="pkg-list-title">Key Investigations Included:</span>
                    <ul className="pkg-items">
                      {pkg.includedTests.slice(0, 5).map((testName, i) => (
                        <li key={i}>
                          <Check size={14} className="pkg-check-icon" />
                          <span>{testName}</span>
                        </li>
                      ))}
                      {pkg.includedTests.length > 5 && (
                        <li className="pkg-more-li">
                          + {pkg.includedTests.length - 5} more investigations
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Preparation / Fasting Requirement */}
                  <div className="pkg-prep-info">
                    <Clock size={14} className="prep-icon" />
                    <span>
                      {pkg.fastingRequired
                        ? `Overnight fasting (${pkg.fastingHours} hrs) required`
                        : 'No fasting required'}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="pkg-card-actions">
                    <button
                      type="button"
                      onClick={() => handleBookPackage(pkg)}
                      className="btn btn-primary pkg-book-btn"
                    >
                      <Calendar size={15} />
                      <span>Book Now</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => navigate('/packages')}
                      className="btn btn-outline pkg-details-btn"
                    >
                      <span>Details</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="packages-view-all">
          <button
            onClick={() => navigate('/packages')}
            className="btn btn-outline btn-lg"
          >
            <span>Explore All Health Checkup Packages</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .packages-section {
          background-color: var(--color-surface);
        }
        .packages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          align-items: stretch;
        }
        .pkg-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          position: relative;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }
        .pkg-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
        }
        .pkg-card-featured {
          border: 2px solid var(--color-primary);
          box-shadow: var(--shadow-md);
        }
        .pkg-featured-badge {
          position: absolute;
          top: -12px;
          right: 20px;
          background: var(--color-primary);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.7rem;
          padding: 3px 10px;
          border-radius: var(--radius-full);
          display: inline-flex;
          align-items: center;
          gap: 4px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .pkg-top {
          margin-bottom: 1.15rem;
        }
        .pkg-target-tag {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-secondary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }
        .pkg-name {
          font-size: 1.25rem;
          color: var(--color-text-main);
          line-height: 1.3;
          margin-bottom: 6px;
        }
        .pkg-description {
          font-size: 0.835rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }
        .pkg-pricing-box {
          background: var(--color-bg);
          border-radius: var(--radius-md);
          padding: 0.85rem 1rem;
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 1.25rem;
          border: 1px solid var(--color-border-subtle);
        }
        .pkg-price-now {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--color-primary);
        }
        .pkg-price-mrp {
          font-size: 0.9rem;
          color: var(--color-text-light);
          text-decoration: line-through;
        }
        .pkg-tests-count {
          margin-left: auto;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-secondary);
          background: #ffffff;
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border);
        }
        .pkg-tests-list {
          flex: 1;
          margin-bottom: 1.25rem;
        }
        .pkg-list-title {
          font-size: 0.775rem;
          font-weight: 700;
          color: var(--color-text-main);
          display: block;
          margin-bottom: 6px;
        }
        .pkg-items {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .pkg-items li {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8125rem;
          color: var(--color-text-body);
        }
        .pkg-check-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
        }
        .pkg-more-li {
          font-weight: 600;
          color: var(--color-primary);
          padding-left: 20px;
          font-size: 0.78rem;
        }
        .pkg-prep-info {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.775rem;
          color: var(--color-text-muted);
          background: var(--color-bg);
          padding: 6px 10px;
          border-radius: var(--radius-sm);
          margin-bottom: 1.25rem;
          border: 1px solid var(--color-border-subtle);
        }
        .pkg-card-actions {
          display: flex;
          gap: 8px;
        }
        .pkg-book-btn {
          flex: 1;
        }
        .pkg-details-btn {
          flex-shrink: 0;
        }
        .packages-loading-state {
          text-align: center;
          padding: 3rem 0;
          color: var(--color-text-muted);
        }
        .packages-view-all {
          text-align: center;
          margin-top: 2.5rem;
        }

        @media (max-width: 1024px) {
          .packages-grid {
            grid-template-columns: 1fr;
            max-width: 580px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
};

export default PopularPackagesSection;
