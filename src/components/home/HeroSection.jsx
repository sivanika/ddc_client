import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  X, 
  Calendar, 
  Home, 
  Sparkles, 
  ArrowRight, 
  ChevronLeft,
  ChevronRight,
  ShieldCheck, 
  FileCheck, 
  Users, 
  CheckCircle2,
  Clock,
  PhoneCall
} from 'lucide-react';
import api from '../../services/api';

const POPULAR_CHIPS = [
  { label: 'CBC', query: 'CBC' },
  { label: 'HbA1c', query: 'HbA1c' },
  { label: 'Thyroid Profile', query: 'Thyroid' },
  { label: 'Lipid Profile', query: 'Lipid' },
  { label: 'Master Health Checkup', isPackage: true, path: '/packages' }
];

const HERO_SLIDES = [
  {
    id: 'master-checkup',
    image: '/images/lab-microscope.jpg',
    badge: "Trichy's Trusted Diagnostic Laboratory",
    title: 'Reliable Diagnostics. Better Health.',
    subtitle: 'Get accurate diagnostic testing, comprehensive health checkups, digital reports, and convenient home sample collection from Doctor Diagnostics Center in Trichy.',
    highlightText: 'Featured Package: Master Health Checkup (68 Parameters)',
    highlightPrice: '₹1,999',
    highlightMrp: '₹3,800',
    highlightDiscount: 'SAVE 47%',
    packageData: {
      _id: 'pkg_mhc_01',
      name: 'Master Health Checkup (Comprehensive)',
      price: 1999,
      includedTests: ['Complete Blood Count', 'Fasting Blood Sugar', 'Lipid Profile', 'Liver Panel']
    },
    inclusions: [
      'Complete Blood Count (CBC with ESR)',
      'Fasting Blood Sugar & HbA1c (HPLC)',
      'Lipid Profile (Cholesterol, HDL, LDL)',
      'Liver & Kidney Function Panels',
      'Thyroid TSH & 12-Lead Digital ECG'
    ]
  },
  {
    id: 'home-pickup',
    image: '/images/home-collection.jpg',
    badge: 'Safe Doorstep Healthcare in Trichy',
    title: 'Free Home Sample Collection Across Trichy',
    subtitle: 'Certified phlebotomists with monitored cold-chain vacutainers right at your doorstep. Convenient morning slots from 6:30 AM in Thillai Nagar, KK Nagar, Srirangam & all Trichy.',
    highlightText: 'Doorstep Pickup: Free for Senior Citizens & Orders Above ₹500',
    highlightPrice: '₹0 Pickup Fee',
    highlightMrp: '₹150',
    highlightDiscount: 'FREE PICKUP',
    packageData: {
      _id: 'home_col_std',
      name: 'Home Sample Collection Pickup',
      price: 0,
      bookingType: 'home_collection'
    },
    inclusions: [
      'Sterile Single-Use Vacutainers & Needles',
      'Temperature-Controlled Cold-Chain Kit',
      'Morning Slots (6:30 AM – 12:00 PM)',
      'Same-Day WhatsApp Digital PDF Reports',
      'Senior Citizen & Bedridden Patient Care'
    ]
  },
  {
    id: 'automated-lab',
    image: '/images/clinical-analyzers.jpg',
    badge: 'High-Precision Laboratory Automation',
    title: 'Automated Testing & Same-Day WhatsApp Reports',
    subtitle: 'Random-access clinical biochemistry and 5-part laser flow cytometry with daily 2-level QC calibrators and senior pathologist review. Digital reports in 2–4 hours.',
    highlightText: 'Full Diagnostic Menu: Routine, Hormonal & Chronic Screenings',
    highlightPrice: 'From ₹120',
    highlightMrp: '₹250',
    highlightDiscount: 'UP TO 50% OFF',
    packageData: {
      _id: 'pkg_routine_01',
      name: 'Routine Diagnostic Screening',
      price: 450,
      includedTests: ['CBC', 'Blood Sugar', 'Urine Routine']
    },
    inclusions: [
      'Random-Access Automated Clinical Chemistry',
      '5-Part Laser Flow Cytometry Hematology',
      'Gold-Standard HPLC Glycated Hemoglobin',
      'Daily Calibrated Quality Control (QC)',
      'Senior Pathologist Verified Digital Signatures'
    ]
  },
  {
    id: 'senior-cardiac',
    image: '/images/diabetic-cardiac.jpg',
    badge: 'Specialized Geriatric & Chronic Care',
    title: 'Senior Citizen Health Profile & Cardiac Screening',
    subtitle: 'Specialized gerontological panel assessing bone density markers, cardiac rhythm (12-Lead ECG), renal, liver, lipid fractions, and electrolyte health.',
    highlightText: 'Senior Citizen Health Profile (45 Parameters)',
    highlightPrice: '₹1,599',
    highlightMrp: '₹2,900',
    highlightDiscount: 'SAVE 45%',
    packageData: {
      _id: 'pkg_snr_03',
      name: 'Senior Citizen Health Profile',
      price: 1599,
      includedTests: ['Complete Blood Count & ESR', 'Fasting Glucose & HbA1c', 'Electrolytes Panel', 'Serum Calcium & Uric Acid', 'Resting ECG']
    },
    inclusions: [
      'Complete Blood Count & ESR',
      'Fasting Glucose & HbA1c HPLC',
      'Electrolytes Panel (Sodium, Potassium)',
      'Serum Calcium & Uric Acid Gout Screen',
      'Resting 12-Lead Digital ECG & Cardiogram'
    ]
  }
];

const HeroSection = ({ onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [allTests, setAllTests] = useState([]);
  
  const searchContainerRef = useRef(null);
  const touchStartXRef = useRef(null);
  const navigate = useNavigate();

  // Automatic slide rotation every 6 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Load tests catalog for instant live search
  useEffect(() => {
    const fetchCatalog = async () => {
      try {
        const res = await api.get('/tests');
        if (res.data && res.data.success) {
          setAllTests(res.data.data);
        }
      } catch (err) {
        console.error('Error fetching tests for hero search:', err);
      }
    };
    fetchCatalog();
  }, []);

  // Filter autocomplete suggestions
  useEffect(() => {
    if (searchQuery.trim().length >= 2) {
      const q = searchQuery.toLowerCase().trim();
      const filtered = allTests.filter(t => 
        t.name.toLowerCase().includes(q) || 
        t.code.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q)
      ).slice(0, 5);
      setSuggestions(filtered);
      setShowDropdown(filtered.length > 0);
    } else {
      setSuggestions([]);
      setShowDropdown(false);
    }
  }, [searchQuery, allTests]);

  // Click outside listener for search dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartXRef.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (diff > 50) {
      handleNextSlide();
    } else if (diff < -50) {
      handlePrevSlide();
    }
    touchStartXRef.current = null;
  };

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    setShowDropdown(false);
    if (searchQuery.trim()) {
      navigate(`/tests?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/tests');
    }
  };

  const handleChipClick = (chip) => {
    if (chip.isPackage) {
      navigate(chip.path);
    } else {
      setSearchQuery(chip.query);
      navigate(`/tests?q=${encodeURIComponent(chip.query)}`);
    }
  };

  const handleSelectSuggestion = (test) => {
    setSearchQuery(test.name);
    setShowDropdown(false);
    navigate(`/tests?q=${encodeURIComponent(test.name)}`);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSuggestions([]);
    setShowDropdown(false);
  };

  const current = HERO_SLIDES[currentSlide];

  return (
    <section 
      className="hero-carousel-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Doctor Diagnostics Hero Carousel"
    >
      {/* Background Banner Slides with Crossfade */}
      <div className="hero-carousel-bg-wrapper">
        {HERO_SLIDES.map((slide, idx) => (
          <div 
            key={slide.id} 
            className={`hero-bg-slide ${idx === currentSlide ? 'active' : ''}`}
            aria-hidden={idx !== currentSlide}
          >
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="hero-bg-img"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        {/* Deep Multi-stop Dark Gradient Overlay for Maximum Text Contrast */}
        <div className="hero-dark-overlay" />
      </div>

      {/* Foreground Overlay Content */}
      <div className="container hero-content-container">
        
        <div className="hero-grid">
          
          {/* Left Column: Badge, Headline, Subtitle, Search, Chips & CTAs */}
          <div className="hero-text-overlay">
            
            {/* Animated Badge Pill */}
            <div className="hero-badge-pill">
              <Sparkles size={14} className="hero-badge-icon" />
              <span>{current.badge}</span>
            </div>

            {/* Dynamic Headline */}
            <h1 className="hero-main-title">
              {current.title}
            </h1>

            {/* Subtitle */}
            <p className="hero-main-desc">
              {current.subtitle}
            </p>

            {/* Search Bar with Autocomplete */}
            <div className="hero-search-box" ref={searchContainerRef}>
              <form onSubmit={handleSearchSubmit} className="hero-search-form">
                <div className="search-bar-inner">
                  <Search size={20} className="search-bar-icon" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => {
                      if (suggestions.length > 0) setShowDropdown(true);
                    }}
                    placeholder="Search blood tests, health packages, or test codes..."
                    className="search-bar-input"
                    aria-label="Search blood tests, health packages, or test codes"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={handleClearSearch}
                      className="search-clear-btn"
                      aria-label="Clear search input"
                    >
                      <X size={16} />
                    </button>
                  )}
                  <button type="submit" className="search-action-btn">
                    <span>Find Test</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>

              {/* Suggestions Dropdown */}
              {showDropdown && (
                <div className="hero-search-dropdown">
                  <div className="dropdown-label">Matching Diagnostic Tests</div>
                  {suggestions.map((test) => (
                    <div
                      key={test._id}
                      onClick={() => handleSelectSuggestion(test)}
                      className="dropdown-item"
                    >
                      <div>
                        <span className="item-name">{test.name}</span>
                        <span className="item-meta">{test.category} • {test.code}</span>
                      </div>
                      <span className="item-price">₹{test.price}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Popular Search Chips */}
            <div className="hero-popular-searches">
              <span className="popular-label">Popular Searches:</span>
              <div className="popular-chips-list">
                {POPULAR_CHIPS.map((chip, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleChipClick(chip)}
                    className="popular-chip-pill"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Hero Action CTA Buttons */}
            <div className="hero-action-buttons">
              <button 
                onClick={() => onOpenBooking ? onOpenBooking(current.packageData) : navigate('/book')}
                className="btn hero-primary-cta"
              >
                <Calendar size={18} />
                <span>Book Appointment</span>
              </button>
              <button 
                onClick={() => navigate('/home-collection')}
                className="btn hero-secondary-cta"
              >
                <Home size={18} />
                <span>Request Home Collection</span>
              </button>
            </div>

          </div>

          {/* Right Column: Floating Glassmorphism Featured Package Preview Card */}
          <div className="hero-card-overlay">
            <div className="glass-package-card">
              
              <div className="glass-card-header">
                <span className="glass-card-tag">Current Slide Spotlight</span>
                <span className="glass-discount-tag">{current.highlightDiscount}</span>
              </div>

              <h2 className="glass-card-title">{current.highlightText}</h2>

              <div className="glass-inclusions-box">
                <span className="glass-inclusions-label">Key Diagnostic Inclusions:</span>
                <ul className="glass-inclusions-list">
                  {current.inclusions.map((inc, i) => (
                    <li key={i}>
                      <CheckCircle2 size={14} className="glass-check-icon" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass-pricing-row">
                <div>
                  <span className="glass-price-main">{current.highlightPrice}</span>
                  {current.highlightMrp && (
                    <span className="glass-price-mrp">{current.highlightMrp}</span>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => onOpenBooking ? onOpenBooking(current.packageData) : navigate('/book')}
                  className="btn glass-book-btn"
                >
                  <span>Book Now</span>
                  <ArrowRight size={15} />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Carousel Bottom Control Strip: Arrow Navigation, Slide Counter, Indicators & Trust Badges */}
        <div className="hero-bottom-controls-strip">
          
          {/* Controls: Prev / Next, Slide Counter & Progress Bars */}
          <div className="slider-nav-group">
            <button 
              type="button" 
              onClick={handlePrevSlide} 
              className="carousel-nav-arrow"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={18} />
            </button>

            <span className="slide-counter-badge">
              0{currentSlide + 1} <span className="counter-slash">/</span> 0{HERO_SLIDES.length}
            </span>

            <button 
              type="button" 
              onClick={handleNextSlide} 
              className="carousel-nav-arrow"
              aria-label="Next Slide"
            >
              <ChevronRight size={18} />
            </button>

            <div className="slide-progress-dots">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentSlide(idx)}
                  className={`progress-dot-btn ${idx === currentSlide ? 'active' : ''}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* 4 Trust Badges Floating Row */}
          <div className="hero-trust-badges">
            <div className="trust-badge-item">
              <ShieldCheck size={20} className="trust-badge-icon" />
              <div>
                <span className="trust-line-1">Accurate</span>
                <span className="trust-line-2">Test Results</span>
              </div>
            </div>

            <div className="trust-divider" />

            <div className="trust-badge-item">
              <FileCheck size={20} className="trust-badge-icon" />
              <div>
                <span className="trust-line-1">Digital</span>
                <span className="trust-line-2">WhatsApp Reports</span>
              </div>
            </div>

            <div className="trust-divider" />

            <div className="trust-badge-item">
              <Home size={20} className="trust-badge-icon" />
              <div>
                <span className="trust-line-1">Doorstep</span>
                <span className="trust-line-2">Sample Collection</span>
              </div>
            </div>

            <div className="trust-divider" />

            <div className="trust-badge-item">
              <Users size={20} className="trust-badge-icon" />
              <div>
                <span className="trust-line-1">Trusted by</span>
                <span className="trust-line-2">10,000+ Patients</span>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .hero-carousel-section {
          position: relative;
          min-height: 600px;
          background: #06243D;
          overflow: hidden;
          display: flex;
          align-items: center;
          padding: 3.5rem 0 2rem;
          color: #ffffff;
        }

        /* Background Slide Images with Smooth Crossfade */
        .hero-carousel-bg-wrapper {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .hero-bg-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }
        .hero-bg-slide.active {
          opacity: 1;
        }
        .hero-bg-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: scale(1.04);
          transition: transform 6s ease-out;
        }
        .hero-bg-slide.active .hero-bg-img {
          transform: scale(1);
        }

        /* Multi-Stop Dark Gradient Overlay */
        .hero-dark-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg, 
            rgba(6, 36, 61, 0.95) 0%, 
            rgba(11, 66, 111, 0.88) 50%, 
            rgba(6, 36, 61, 0.70) 100%
          );
          backdrop-filter: blur(2px);
          z-index: 1;
        }

        /* Content Container */
        .hero-content-container {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.85fr;
          gap: 3rem;
          align-items: center;
        }

        /* Left Column Text Overlay */
        .hero-text-overlay {
          display: flex;
          flex-direction: column;
        }

        .hero-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          align-self: flex-start;
          background: rgba(94, 234, 212, 0.15);
          border: 1px solid rgba(94, 234, 212, 0.4);
          color: #5EEAD4;
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.8125rem;
          font-weight: 700;
          letter-spacing: 0.4px;
          margin-bottom: 1.15rem;
          backdrop-filter: blur(6px);
        }
        .hero-badge-icon {
          color: #5EEAD4;
        }

        .hero-main-title {
          font-size: 3.15rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          letter-spacing: -0.02em;
          margin-bottom: 1.15rem;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
        }

        .hero-main-desc {
          font-size: 1.05rem;
          color: #E2E8F0;
          line-height: 1.6;
          max-width: 580px;
          margin-bottom: 1.75rem;
          text-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
        }

        /* Search Bar */
        .hero-search-box {
          position: relative;
          max-width: 580px;
          margin-bottom: 1.15rem;
        }
        .hero-search-form {
          width: 100%;
        }
        .search-bar-inner {
          display: flex;
          align-items: center;
          background: #ffffff;
          border-radius: 12px;
          padding: 5px 6px 5px 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
        }
        .search-bar-icon {
          color: #64748B;
          margin-right: 10px;
          flex-shrink: 0;
        }
        .search-bar-input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 0.9375rem;
          color: #0F172A;
          background: transparent;
        }
        .search-bar-input::placeholder {
          color: #94A3B8;
        }
        .search-clear-btn {
          background: none;
          border: none;
          color: #94A3B8;
          padding: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          margin-right: 6px;
        }
        .search-action-btn {
          background: #07877C;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          padding: 10px 20px;
          font-size: 0.9375rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          white-space: nowrap;
          transition: background var(--transition-fast), transform var(--transition-fast);
        }
        .search-action-btn:hover {
          background: #066961;
          transform: translateY(-1px);
        }

        /* Search Dropdown */
        .hero-search-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          background: #ffffff;
          border-radius: 10px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
          z-index: 50;
          overflow: hidden;
          color: #0F172A;
        }
        .dropdown-label {
          padding: 8px 14px;
          background: #F8FAFC;
          font-size: 0.75rem;
          font-weight: 700;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          border-bottom: 1px solid #E2E8F0;
        }
        .dropdown-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 14px;
          cursor: pointer;
          border-bottom: 1px solid #F1F5F9;
          transition: background var(--transition-fast);
        }
        .dropdown-item:last-child {
          border-bottom: none;
        }
        .dropdown-item:hover {
          background: #F0FDF4;
        }
        .item-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: #0B426F;
          display: block;
        }
        .item-meta {
          font-size: 0.75rem;
          color: #64748B;
        }
        .item-price {
          font-size: 0.9rem;
          font-weight: 700;
          color: #07877C;
        }

        /* Popular Chips */
        .hero-popular-searches {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 1.75rem;
        }
        .popular-label {
          font-size: 0.8125rem;
          font-weight: 600;
          color: #CBD5E1;
        }
        .popular-chips-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .popular-chip-pill {
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.8125rem;
          font-weight: 600;
          cursor: pointer;
          backdrop-filter: blur(4px);
          transition: all var(--transition-fast);
        }
        .popular-chip-pill:hover {
          background: #ffffff;
          color: #0B426F;
          border-color: #ffffff;
        }

        /* Dual CTA Buttons */
        .hero-action-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .hero-primary-cta {
          background: #07877C;
          color: #ffffff;
          border: none;
          padding: 13px 26px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.95rem;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          box-shadow: 0 4px 14px rgba(7, 135, 124, 0.4);
          transition: background var(--transition-fast), transform var(--transition-fast);
        }
        .hero-primary-cta:hover {
          background: #066961;
          transform: translateY(-2px);
        }
        .hero-secondary-cta {
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          border: 1.5px solid rgba(255, 255, 255, 0.5);
          padding: 13px 26px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.95rem;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          backdrop-filter: blur(6px);
          transition: all var(--transition-fast);
        }
        .hero-secondary-cta:hover {
          background: #ffffff;
          color: #0B426F;
          border-color: #ffffff;
          transform: translateY(-2px);
        }

        /* Right Column: Glassmorphism Package Card */
        .hero-card-overlay {
          display: flex;
          justify-content: center;
        }
        .glass-package-card {
          width: 100%;
          max-width: 440px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 16px;
          padding: 1.75rem;
          backdrop-filter: blur(16px);
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.35);
          display: flex;
          flex-direction: column;
          gap: 1.15rem;
        }
        .glass-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .glass-card-tag {
          font-size: 0.725rem;
          font-weight: 700;
          color: #5EEAD4;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }
        .glass-discount-tag {
          background: #DCFCE7;
          color: #15803D;
          font-size: 0.725rem;
          font-weight: 800;
          padding: 3px 9px;
          border-radius: var(--radius-full);
          letter-spacing: 0.3px;
        }
        .glass-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.35;
          margin: 0;
        }

        .glass-inclusions-box {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 10px;
          padding: 12px 14px;
        }
        .glass-inclusions-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.4px;
          margin-bottom: 8px;
        }
        .glass-inclusions-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .glass-inclusions-list li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8rem;
          color: #E2E8F0;
        }
        .glass-check-icon {
          color: #5EEAD4;
          flex-shrink: 0;
        }

        .glass-pricing-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 0.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }
        .glass-price-main {
          font-size: 1.65rem;
          font-weight: 800;
          color: #ffffff;
          margin-right: 8px;
        }
        .glass-price-mrp {
          font-size: 0.95rem;
          color: #94A3B8;
          text-decoration: line-through;
        }
        .glass-book-btn {
          background: #ffffff;
          color: #0B426F;
          border: none;
          padding: 10px 18px;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .glass-book-btn:hover {
          background: #5EEAD4;
          color: #0B426F;
          transform: translateY(-1px);
        }

        /* Bottom Controls & Trust Badges Strip */
        .hero-bottom-controls-strip {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }

        /* Carousel Navigation Controls */
        .slider-nav-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .carousel-nav-arrow {
          width: 36px;
          height: 36px;
          border-radius: var(--radius-full);
          background: rgba(255, 255, 255, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(4px);
          transition: all var(--transition-fast);
        }
        .carousel-nav-arrow:hover {
          background: #ffffff;
          color: #0B426F;
        }
        .slide-counter-badge {
          font-size: 0.875rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          color: #5EEAD4;
        }
        .counter-slash {
          color: rgba(255, 255, 255, 0.4);
        }
        .slide-progress-dots {
          display: flex;
          gap: 6px;
          margin-left: 6px;
        }
        .progress-dot-btn {
          width: 8px;
          height: 8px;
          border-radius: var(--radius-full);
          border: none;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all var(--transition-fast);
          padding: 0;
        }
        .progress-dot-btn.active {
          width: 24px;
          background: #5EEAD4;
        }

        /* 4 Trust Badges */
        .hero-trust-badges {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .trust-badge-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .trust-badge-icon {
          color: #5EEAD4;
          flex-shrink: 0;
        }
        .trust-line-1 {
          display: block;
          font-size: 0.775rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
        }
        .trust-line-2 {
          display: block;
          font-size: 0.725rem;
          color: #CBD5E1;
          line-height: 1.2;
        }
        .trust-divider {
          width: 1px;
          height: 24px;
          background: rgba(255, 255, 255, 0.2);
          flex-shrink: 0;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .hero-main-title {
            font-size: 2.65rem;
          }
          .hero-card-overlay {
            justify-content: flex-start;
          }
          .glass-package-card {
            max-width: 100%;
          }
          .hero-trust-badges {
            flex-wrap: wrap;
          }
        }
        @media (max-width: 640px) {
          .hero-carousel-section {
            padding: 2.25rem 0 1.5rem;
            min-height: auto;
          }
          .hero-main-title {
            font-size: 2rem;
          }
          .search-bar-inner {
            flex-direction: column;
            align-items: stretch;
            padding: 8px;
            gap: 8px;
          }
          .search-bar-icon {
            display: none;
          }
          .search-action-btn {
            justify-content: center;
          }
          .hero-action-buttons {
            flex-direction: column;
          }
          .hero-primary-cta, .hero-secondary-cta {
            width: 100%;
            justify-content: center;
          }
          .hero-bottom-controls-strip {
            flex-direction: column;
            align-items: flex-start;
          }
          .hero-trust-badges {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .trust-divider {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
