import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import api from '../services/api';
import AppointmentModal from '../components/booking/AppointmentModal';
import { getPackageImage } from '../components/home/PopularPackagesSection';

const PackagesPage = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPkgForBooking, setSelectedPkgForBooking] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      setLoading(true);
      try {
        const res = await api.get('/packages?active=true');
        if (res.data.success) {
          setPackages(res.data.data);
        }
      } catch (err) {
        console.error('Error fetching packages:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  const handleBook = (pkg) => {
    setSelectedPkgForBooking({
      ...pkg,
      type: 'package'
    });
    setBookingModalOpen(true);
  };

  return (
    <div className="packages-page-wrapper">
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <span className="section-subtitle">Preventive Healthcare</span>
          <h1 className="page-header-title">Preventive Health Checkup Packages</h1>
          <p className="page-header-desc">
            Early detection is the cornerstone of effective healthcare. Our doctor-designed health packages evaluate your vital organs with discounts up to 47%. Free home sample collection across Trichy.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section" style={{ paddingTop: '3rem' }}>
        <div className="container">
          
          {loading ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-text-muted)' }}>
              Loading health packages...
            </div>
          ) : (
            <div className="all-packages-grid">
              {packages.map((pkg) => {
                const imgUrl = getPackageImage(pkg);

                return (
                  <div key={pkg._id} className="package-detailed-card">
                    
                    {/* Flush Top Image Banner */}
                    <div className="pkg-detail-media">
                      <img
                        src={imgUrl}
                        alt={pkg.name}
                        className="pkg-detail-img"
                        loading="lazy"
                      />
                      <div className="pkg-detail-media-overlay">
                        <span className="pkg-target-tag">{pkg.targetAudience}</span>
                        {pkg.discountPercentage > 0 && (
                          <span className="badge badge-success">Save {pkg.discountPercentage}%</span>
                        )}
                      </div>
                    </div>

                    <div className="pkg-detail-body">
                      <h2 className="pkg-card-title">{pkg.name}</h2>
                      <p className="pkg-card-desc">{pkg.description}</p>

                      {/* Pricing Box */}
                      <div className="pkg-card-pricing">
                        <div>
                          <span className="pkg-now-price">₹{pkg.price}</span>
                          {pkg.mrp && <span className="pkg-mrp-price">MRP ₹{pkg.mrp}</span>}
                        </div>
                        <div className="pkg-tests-pill">
                          {pkg.totalTestsCount || pkg.includedTests.length} Investigations Included
                        </div>
                      </div>

                      {/* Included Tests List */}
                      <div className="pkg-included-block">
                        <h4 className="tests-block-title">Included Diagnostic Tests &amp; Panels:</h4>
                        <div className="tests-chips-list">
                          {pkg.includedTests.map((testName, i) => (
                            <div key={i} className="test-chip-item">
                              <Check size={14} color="var(--color-secondary)" />
                              <span>{testName}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Preparation Guidelines */}
                      <div className="pkg-prep-guidance">
                        <Clock size={16} color="var(--color-secondary)" style={{ flexShrink: 0 }} />
                        <div>
                          <strong>Preparation Instructions:</strong> {pkg.preparation}
                        </div>
                      </div>

                      {/* Action CTA */}
                      <div className="pkg-card-cta">
                        <button
                          onClick={() => handleBook(pkg)}
                          className="btn btn-primary btn-lg"
                          style={{ width: '100%' }}
                        >
                          <Calendar size={18} />
                          <span>Book Health Package</span>
                        </button>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedItem={selectedPkgForBooking}
      />

      <style>{`
        .all-packages-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
        }
        .package-detailed-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-card);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all var(--transition-normal);
        }
        .package-detailed-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card-hover);
          border-color: rgba(11, 71, 120, 0.25);
        }

        /* Top Image Media */
        .pkg-detail-media {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          background: #0B426F;
        }
        .pkg-detail-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .package-detailed-card:hover .pkg-detail-img {
          transform: scale(1.04);
        }
        .pkg-detail-media-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(6, 42, 74, 0.85) 0%, rgba(6, 42, 74, 0.2) 60%, rgba(0, 0, 0, 0.1) 100%);
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 14px 18px;
        }
        .pkg-target-tag {
          font-size: 0.775rem;
          font-weight: 700;
          color: #5EEAD4;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          background: rgba(6, 42, 74, 0.7);
          padding: 3px 8px;
          border-radius: 4px;
        }

        .pkg-detail-body {
          padding: 1.75rem 2rem 2rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .pkg-card-title {
          font-size: 1.5rem;
          color: var(--color-primary-dark);
          line-height: 1.3;
          margin-bottom: 0.6rem;
        }
        .pkg-card-desc {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }
        .pkg-card-pricing {
          background: var(--color-bg);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        .pkg-now-price {
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-primary);
          margin-right: 10px;
        }
        .pkg-mrp-price {
          font-size: 1.05rem;
          color: var(--color-text-light);
          text-decoration: line-through;
        }
        .pkg-tests-pill {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--color-secondary);
          background: #ffffff;
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid var(--color-border);
        }
        .pkg-included-block {
          flex: 1;
          margin-bottom: 1.5rem;
        }
        .tests-block-title {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-bottom: 0.75rem;
        }
        .tests-chips-list {
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
        }
        .test-chip-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          color: var(--color-text-body);
        }
        .pkg-prep-guidance {
          background: #F8FAFC;
          border-left: 3px solid var(--color-secondary);
          padding: 10px 14px;
          border-radius: 4px;
          font-size: 0.825rem;
          color: var(--color-text-body);
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }
        .pkg-card-cta {
          margin-top: auto;
        }

        @media (max-width: 1024px) {
          .all-packages-grid {
            grid-template-columns: 1fr;
          }
          .pkg-detail-body {
            padding: 1.5rem 1.25rem 1.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default PackagesPage;
