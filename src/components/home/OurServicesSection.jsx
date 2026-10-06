import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    id: 'pathology',
    title: 'Pathology & Lab Tests',
    desc: 'Blood, urine, hormone and specialized tests with daily quality controls.',
    image: '/images/service-biochemistry.jpg',
    path: '/services'
  },
  {
    id: 'radiology',
    title: 'Radiology & Imaging',
    desc: 'X-ray, Ultrasound, ECG and other digital imaging services with low radiation.',
    image: '/images/service-radiology.jpg',
    path: '/services'
  },
  {
    id: 'preventive',
    title: 'Preventive Health Checkups',
    desc: 'Curated diagnostic packages for every age group and wellness profile.',
    image: '/images/service-preventive.jpg',
    path: '/packages'
  },
  {
    id: 'home-collection',
    title: 'Home Sample Collection',
    desc: 'Safe and convenient sample collection at your doorstep across Trichy.',
    image: '/images/home-collection.jpg',
    path: '/home-collection'
  }
];

const OurServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="section our-services-section">
      <div className="container">
        
        {/* Header with View All Link */}
        <div className="section-header-split">
          <div>
            <span className="section-tag-eyebrow">OUR SERVICES</span>
            <h2 className="section-main-heading">A Wide Range of Diagnostic Services</h2>
          </div>
          <button 
            type="button" 
            onClick={() => navigate('/services')} 
            className="section-header-link"
          >
            <span>View All Services</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="services-grid-4">
          {SERVICES.map((s) => (
            <div 
              key={s.id} 
              className="service-card"
              onClick={() => navigate(s.path)}
            >
              <div className="service-card-media">
                <img
                  src={s.image}
                  alt={s.title}
                  className="service-card-img"
                  loading="lazy"
                />
              </div>

              <div className="service-card-body">
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.desc}</p>
                <div className="service-learn-more">
                  <span>Learn More</span>
                  <ArrowRight size={14} className="learn-arrow" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .our-services-section {
          background-color: #ffffff;
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

        .services-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .service-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          overflow: hidden;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal), border-color var(--transition-normal);
        }
        .service-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-md);
          border-color: rgba(11, 66, 111, 0.25);
        }

        .service-card-media {
          position: relative;
          width: 100%;
          height: 160px;
          overflow: hidden;
          background: #0B426F;
        }
        .service-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .service-card:hover .service-card-img {
          transform: scale(1.06);
        }

        .service-card-body {
          padding: 1.25rem 1.15rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .service-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-bottom: 6px;
          line-height: 1.3;
        }
        .service-desc {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          line-height: 1.45;
          margin-bottom: 1.15rem;
          flex: 1;
        }
        .service-learn-more {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8125rem;
          font-weight: 700;
          color: var(--color-primary);
          transition: gap var(--transition-fast);
        }
        .service-card:hover .service-learn-more {
          gap: 9px;
          color: var(--color-secondary);
        }
        .learn-arrow {
          transition: transform var(--transition-fast);
        }
        .service-card:hover .learn-arrow {
          transform: translateX(2px);
        }

        @media (max-width: 1024px) {
          .services-grid-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .services-grid-4 {
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

export default OurServicesSection;
