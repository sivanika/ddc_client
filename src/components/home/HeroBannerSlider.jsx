import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Home, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  MessageSquare,
  Sparkles,
  PhoneCall
} from 'lucide-react';

const SLIDES = [
  {
    id: 'master-checkup',
    badge: 'FEATURED HEALTH SCREENING',
    title: 'Comprehensive Master Health Checkup',
    subtitle: '68 Essential Diagnostic Parameters including CBC, HbA1c HPLC, Lipid, Liver & Kidney Panels, Thyroid TSH & 12-Lead ECG.',
    highlight: 'Special Package Fee: ₹1,999 (MRP ₹3,800 • Save 47%)',
    primaryCta: 'Book Checkup Now',
    primaryAction: 'book_package',
    packageData: {
      _id: 'pkg_mhc_01',
      name: 'Master Health Checkup (Comprehensive)',
      price: 1999,
      includedTests: ['Complete Blood Count', 'Fasting Blood Sugar', 'Lipid Profile', 'Liver Panel']
    },
    secondaryCta: 'View Package Details',
    secondaryPath: '/packages',
    image: '/images/hero-lab.jpg',
    imageAlt: 'Doctor Diagnostics Modern Laboratory Setup'
  },
  {
    id: 'home-pickup',
    badge: 'SAFE DOORSTEP HEALTHCARE',
    title: 'Free Home Sample Collection in Trichy',
    subtitle: 'Certified phlebotomists with monitored cold-chain vacutainers and sterile equipment. Convenient morning slots right at your doorstep.',
    highlight: 'Free for Senior Citizens & Bookings Above ₹500',
    primaryCta: 'Book Home Pickup',
    primaryAction: 'book_home',
    secondaryCta: 'WhatsApp Request',
    secondaryAction: 'whatsapp',
    image: '/images/home-collection.jpg',
    imageAlt: 'Certified Phlebotomist for Home Sample Collection'
  },
  {
    id: 'automated-lab',
    badge: 'HIGH-PRECISION AUTOMATION',
    title: 'Automated Testing & Same-Day Reports',
    subtitle: 'Random-access clinical biochemistry and 5-part laser flow cytometry with daily 2-level QC calibrators and senior pathologist review.',
    highlight: 'Digital PDF Delivered Directly on WhatsApp in 2–4 Hours',
    primaryCta: 'Explore 14+ Tests',
    primaryPath: '/tests',
    secondaryCta: 'Check Booking Status',
    secondaryPath: '/check-status',
    image: '/images/clinical-analyzers.jpg',
    imageAlt: 'High-Throughput Clinical Diagnostic Analyzers'
  },
  {
    id: 'diabetic-cardiac',
    badge: 'CHRONIC CARE MONITORING',
    title: 'Targeted Diabetic & Cardiac Screening',
    subtitle: 'Gold-standard HPLC HbA1c glycemic monitoring, lipid fractions, and high-resolution 12-lead digital ECG for heart and sugar wellness.',
    highlight: 'Diabetic Profiles & ECG Starting from ₹450',
    primaryCta: 'Book Diabetic Screening',
    primaryAction: 'book_package',
    packageData: {
      _id: 'pkg_dia_02',
      name: 'Comprehensive Diabetic Care Package',
      price: 1299,
      includedTests: ['Fasting Blood Sugar', 'PPBS', 'HbA1c', 'Creatinine', 'Lipid Profile']
    },
    secondaryCta: 'Call Lab Helpline',
    secondaryAction: 'call',
    image: '/images/diabetic-cardiac.jpg',
    imageAlt: 'Digital ECG and Glucometer Clinical Evaluation'
  }
];

const HeroBannerSlider = ({ onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef(null);
  const navigate = useNavigate();

  // Automatic slide rotation every 5 seconds (paused on hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartXRef.current = null;
  };

  const handlePrimaryClick = (slide) => {
    if (slide.primaryAction === 'book_package' && onOpenBooking) {
      onOpenBooking(slide.packageData);
    } else if (slide.primaryAction === 'book_home' && onOpenBooking) {
      onOpenBooking({ bookingType: 'home_collection' });
    } else if (slide.primaryPath) {
      navigate(slide.primaryPath);
    } else if (onOpenBooking) {
      onOpenBooking(null);
    }
  };

  const handleSecondaryClick = (slide) => {
    if (slide.secondaryAction === 'whatsapp') {
      window.open(
        'https://wa.me/919443152200?text=Hello%20Doctor%20Diagnostics%20Trichy,%20I%20would%20like%20to%20enquire%20about%20diagnostic%20tests.',
        '_blank',
        'noopener,noreferrer'
      );
    } else if (slide.secondaryAction === 'call') {
      window.location.href = 'tel:+919443100000';
    } else if (slide.secondaryPath) {
      navigate(slide.secondaryPath);
    }
  };

  const activeSlideData = SLIDES[currentSlide];

  return (
    <section 
      className="hero-slider-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Doctor Diagnostics Featured Campaigns"
    >
      <div className="container">
        
        <div className="slider-container">
          {/* Main Slide Card */}
          <div className="slide-card">
            
            {/* Left Content Column */}
            <div className="slide-content">
              <div className="slide-badge">
                <Sparkles size={14} className="slide-badge-icon" />
                <span>{activeSlideData.badge}</span>
              </div>

              <h2 className="slide-title">{activeSlideData.title}</h2>
              <p className="slide-desc">{activeSlideData.subtitle}</p>

              <div className="slide-highlight-bar">
                <ShieldCheck size={16} className="slide-hl-icon" />
                <span>{activeSlideData.highlight}</span>
              </div>

              <div className="slide-actions">
                <button
                  type="button"
                  onClick={() => handlePrimaryClick(activeSlideData)}
                  className="btn btn-primary btn-lg slide-primary-btn"
                >
                  <Calendar size={18} />
                  <span>{activeSlideData.primaryCta}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleSecondaryClick(activeSlideData)}
                  className="btn btn-outline btn-lg slide-secondary-btn"
                >
                  {activeSlideData.secondaryAction === 'whatsapp' ? (
                    <MessageSquare size={18} />
                  ) : activeSlideData.secondaryAction === 'call' ? (
                    <PhoneCall size={18} />
                  ) : (
                    <ArrowRight size={18} />
                  )}
                  <span>{activeSlideData.secondaryCta}</span>
                </button>
              </div>
            </div>

            {/* Right Media Column */}
            <div className="slide-media">
              <img
                src={activeSlideData.image}
                alt={activeSlideData.imageAlt}
                className="slide-image"
                loading="eager"
              />
              <div className="slide-media-gradient" />
              
              {/* Slide Counter Overlay */}
              <div className="slide-counter-pill">
                <span>0{currentSlide + 1}</span>
                <span className="counter-sep">/</span>
                <span>0{SLIDES.length}</span>
              </div>
            </div>

          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            className="slider-nav-btn slider-prev-btn"
            aria-label="Previous slide"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="slider-nav-btn slider-next-btn"
            aria-label="Next slide"
          >
            <ChevronRight size={22} />
          </button>

          {/* Pagination Indicators / Dots */}
          <div className="slider-indicators" role="tablist">
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className={`indicator-dot ${currentSlide === idx ? 'indicator-dot-active' : ''}`}
                aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                aria-selected={currentSlide === idx}
                role="tab"
              >
                <span className="dot-inner" />
              </button>
            ))}
          </div>

        </div>

      </div>

      <style>{`
        .hero-slider-section {
          background-color: var(--color-bg);
          padding: 2.5rem 0 3.5rem;
          position: relative;
        }
        .slider-container {
          position: relative;
          max-width: 1440px;
          margin: 0 auto;
        }
        .slide-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-md);
          overflow: hidden;
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          min-height: 400px;
          transition: all var(--transition-normal);
        }
        .slide-content {
          padding: 3rem 3.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 2;
        }
        .slide-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--color-secondary-light);
          color: var(--color-secondary);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.775rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 1rem;
          width: fit-content;
          border: 1px solid rgba(7, 135, 124, 0.2);
        }
        .slide-badge-icon {
          color: var(--color-secondary);
        }
        .slide-title {
          font-size: clamp(1.85rem, 2.7vw, 2.45rem);
          color: var(--color-text-main);
          line-height: 1.2;
          margin-bottom: 0.85rem;
          letter-spacing: -0.4px;
        }
        .slide-desc {
          font-size: 0.975rem;
          color: var(--color-text-body);
          line-height: 1.6;
          margin-bottom: 1.25rem;
          max-width: 95%;
        }
        .slide-highlight-bar {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--color-primary-light);
          color: var(--color-primary);
          padding: 8px 14px;
          border-radius: var(--radius-md);
          font-size: 0.875rem;
          font-weight: 700;
          margin-bottom: 1.75rem;
          width: fit-content;
          border: 1px solid rgba(11, 66, 111, 0.15);
        }
        .slide-hl-icon {
          color: var(--color-primary);
          flex-shrink: 0;
        }
        .slide-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .slide-primary-btn, .slide-secondary-btn {
          white-space: nowrap;
        }

        /* Slide Media */
        .slide-media {
          position: relative;
          overflow: hidden;
          background: #E2E8F0;
          height: 100%;
          min-height: 380px;
        }
        .slide-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s ease;
        }
        .slide-card:hover .slide-image {
          transform: scale(1.02);
        }
        .slide-media-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(255, 255, 255, 0.25) 0%, rgba(16, 45, 70, 0.2) 100%);
          pointer-events: none;
        }
        .slide-counter-pill {
          position: absolute;
          bottom: 18px;
          right: 18px;
          background: rgba(16, 45, 70, 0.85);
          backdrop-filter: blur(4px);
          color: #ffffff;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          gap: 4px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .counter-sep {
          color: #94A3B8;
        }

        /* Nav Arrows */
        .slider-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-md);
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all var(--transition-fast);
        }
        .slider-nav-btn:hover {
          background: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
          box-shadow: var(--shadow-lg);
        }
        .slider-prev-btn {
          left: -22px;
        }
        .slider-next-btn {
          right: -22px;
        }

        /* Indicators */
        .slider-indicators {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin-top: 1.5rem;
        }
        .indicator-dot {
          background: none;
          border: none;
          padding: 6px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .dot-inner {
          width: 24px;
          height: 5px;
          border-radius: var(--radius-full);
          background: var(--color-border);
          transition: all var(--transition-normal);
          display: block;
        }
        .indicator-dot-active .dot-inner {
          width: 44px;
          background: var(--color-primary);
        }

        @media (max-width: 1024px) {
          .slide-card {
            grid-template-columns: 1fr;
          }
          .slide-content {
            padding: 2.25rem 2rem;
          }
          .slide-media {
            min-height: 260px;
            max-height: 320px;
          }
          .slider-prev-btn {
            left: 8px;
          }
          .slider-next-btn {
            right: 8px;
          }
        }
        @media (max-width: 640px) {
          .hero-slider-section {
            padding: 1.5rem 0 2.5rem;
          }
          .slide-content {
            padding: 1.5rem 1.25rem;
          }
          .slide-actions {
            flex-direction: column;
          }
          .slide-primary-btn, .slide-secondary-btn {
            width: 100%;
          }
          .slider-nav-btn {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroBannerSlider;
