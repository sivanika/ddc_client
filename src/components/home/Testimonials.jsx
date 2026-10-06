import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya S.',
    location: 'Trichy',
    avatar: '/images/avatar-priya.jpg',
    feedback: 'Very good service and professional staff. Reports were accurate and delivered on time.',
    rating: 5
  },
  {
    id: 2,
    name: 'Ramesh K.',
    location: 'Trichy',
    avatar: '/images/avatar-ramesh.jpg',
    feedback: 'Home collection was very convenient and the staff were polite and professional.',
    rating: 5
  },
  {
    id: 3,
    name: 'Lakshmi M.',
    location: 'Trichy',
    avatar: '/images/avatar-lakshmi.jpg',
    feedback: 'Clean facility and quick report delivery. Highly recommended.',
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="section testimonials-section">
      <div className="container">
        
        {/* Header with Nav Arrows on the right */}
        <div className="section-header-split">
          <div>
            <span className="section-tag-eyebrow">PATIENT TESTIMONIALS</span>
            <h2 className="section-main-heading">What Our Patients Say</h2>
          </div>

          <div className="testimonial-arrows">
            <button 
              type="button" 
              onClick={handlePrev} 
              className="t-nav-arrow"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              type="button" 
              onClick={handleNext} 
              className="t-nav-arrow"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="testimonial-card">
              
              {/* Star Rating */}
              <div className="testimonial-stars">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              {/* Feedback Quote */}
              <p className="testimonial-quote">"{t.feedback}"</p>

              {/* Author Row with Avatar Image */}
              <div className="testimonial-author">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="testimonial-avatar-img"
                  loading="lazy"
                />
                <div className="testimonial-author-info">
                  <h4 className="author-name">{t.name}</h4>
                  <span className="author-city">{t.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      <style>{`
        .testimonials-section {
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

        .testimonial-arrows {
          display: flex;
          gap: 8px;
        }
        .t-nav-arrow {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid var(--color-border);
          color: var(--color-text-main);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .t-nav-arrow:hover {
          background: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
        }

        /* 3 Cards */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }
        .testimonial-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }
        .testimonial-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
          border-color: rgba(11, 66, 111, 0.2);
        }

        .testimonial-stars {
          display: flex;
          gap: 4px;
          margin-bottom: 1rem;
        }
        .testimonial-quote {
          font-size: 0.925rem;
          line-height: 1.55;
          color: var(--color-text-body);
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 1rem;
          border-top: 1px solid var(--color-border-subtle);
        }
        .testimonial-avatar-img {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--color-secondary);
          flex-shrink: 0;
        }
        .author-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text-main);
          margin-bottom: 1px;
        }
        .author-city {
          font-size: 0.8rem;
          color: var(--color-text-muted);
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
