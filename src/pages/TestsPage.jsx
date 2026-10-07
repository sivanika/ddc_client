import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Clock, 
  Droplet, 
  Calendar, 
  Info, 
  CheckCircle, 
  AlertCircle,
  ArrowUpDown,
  X
} from 'lucide-react';
import api from '../services/api';
import AppointmentModal from '../components/booking/AppointmentModal';
import { getTestCategoryImg } from '../components/home/PopularTestsSection';

const CATEGORIES = [
  'All',
  'Hematology',
  'Biochemistry',
  'Diabetes Care',
  'Endocrinology',
  'Cardiology',
  'Radiology',
  'Immunology',
  'Clinical Pathology',
  'Serology & Infectious'
];

const TestsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [searchTerm, setSearchTerm] = useState(searchParams.get('q') || '');
  const [sortBy, setSortBy] = useState('popular'); // 'popular' | 'price-low' | 'price-high' | 'name'

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedTestForBooking, setSelectedTestForBooking] = useState(null);
  const [detailModalTest, setDetailModalTest] = useState(null);

  useEffect(() => {
    const fetchTests = async () => {
      setLoading(true);
      try {
        const res = await api.get('/tests?active=true');
        if (res.data.success) {
          setTests(res.data.data);
        }
      } catch (err) {
        console.error('Error fetching tests catalog:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchTests();
  }, []);

  // Sync category or query from URL
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && cat !== selectedCategory) {
      setSelectedCategory(cat);
    }
    const q = searchParams.get('q');
    if (q !== null && q !== searchTerm) {
      setSearchTerm(q);
    }
  }, [searchParams]);

  // Filter & Sort
  const filteredTests = tests
    .filter((test) => {
      const matchCategory = selectedCategory === 'All' || test.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchSearch =
        searchTerm === '' ||
        test.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        test.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        test.category.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
    });

  const handleBookTest = (test) => {
    setSelectedTestForBooking({
      ...test,
      type: 'test'
    });
    setBookingModalOpen(true);
  };

  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="tests-page-wrapper">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="container">
          <span className="section-subtitle">Diagnostic Catalog</span>
          <h1 className="page-header-title">Diagnostic Blood &amp; Imaging Tests</h1>
          <p className="page-header-desc">
            Explore our comprehensive menu of clinical pathology, biochemistry, endocrine CLIA, cardiology ECG, and digital radiology tests. Transparent pricing and verified preparation guidelines.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          
          {/* Controls Bar: Search & Sort */}
          <div className="catalog-controls">
            <div className="catalog-search-wrap">
              <Search size={20} className="search-icon" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search test by name or code (e.g. CBC, Lipid, HbA1c, DDC-HEM-01)..."
                className="catalog-search-input"
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')} 
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
                >
                  <X size={16} color="#94A3B8" />
                </button>
              )}
            </div>

            <div className="catalog-sort-wrap">
              <ArrowUpDown size={16} color="var(--color-primary)" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="popular">Sort: Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="category-pills-bar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryClick(cat)}
                className={`category-pill ${selectedCategory.toLowerCase() === cat.toLowerCase() ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results Count Summary */}
          <div className="results-summary">
            <span>Showing <strong>{filteredTests.length}</strong> investigations available in Trichy</span>
            {selectedCategory !== 'All' && (
              <span className="active-filter-badge">
                Category: {selectedCategory}
                <button onClick={() => handleCategoryClick('All')}>×</button>
              </span>
            )}
          </div>

          {/* Tests Grid */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-text-muted)' }}>
              Loading diagnostic test catalog...
            </div>
          ) : filteredTests.length === 0 ? (
            <div className="empty-catalog-state">
              <AlertCircle size={44} color="#94A3B8" />
              <h3>No tests found matching "{searchTerm}"</h3>
              <p>Try searching for common terms like CBC, Sugar, Thyroid, Urine, or clear filters.</p>
              <button onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }} className="btn btn-outline">
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="tests-grid">
              {filteredTests.map((test) => (
                <div key={test._id} className="test-card">
                  
                  {/* Category Image Banner */}
                  <div className="test-card-banner">
                    <img
                      src={getTestCategoryImg(test.category)}
                      alt={test.name}
                      className="test-card-banner-img"
                      loading="lazy"
                    />
                    <div className="test-card-banner-overlay">
                      <span className="test-cat-badge">{test.category}</span>
                      <div className="test-code-badge">{test.code}</div>
                    </div>
                  </div>

                  <div className="test-card-inner-body">
                    <h3 className="test-name">{test.name}</h3>
                    <p className="test-desc">{test.description}</p>

                    <div className="test-meta-grid">
                      <div className="test-meta-item">
                        <Droplet size={15} color="var(--color-primary)" />
                        <span>{test.sampleType}</span>
                      </div>
                      <div className="test-meta-item">
                        <Clock size={15} color="var(--color-secondary)" />
                        <span>Report in {test.tatHours} hrs</span>
                      </div>
                    </div>

                    {test.fastingRequired && (
                      <div className="test-fasting-note">
                        <AlertCircle size={14} />
                        <span>{test.fastingHours} hrs overnight fasting required</span>
                      </div>
                    )}

                    <div className="test-price-row">
                      <div>
                        <span className="price-val">₹{test.price}</span>
                        {test.mrp && <span className="mrp-val">₹{test.mrp}</span>}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        {test.homeCollectionAvailable ? '✓ Home Pickup' : 'Center Visit Only'}
                      </div>
                    </div>

                    <div className="test-card-actions">
                      <button
                        onClick={() => setDetailModalTest(test)}
                        className="btn btn-outline btn-sm"
                        style={{ flex: 1 }}
                      >
                        <Info size={15} />
                        <span>Preparation</span>
                      </button>
                      <button
                        onClick={() => handleBookTest(test)}
                        className="btn btn-primary btn-sm"
                        style={{ flex: 1.2 }}
                      >
                        <Calendar size={15} />
                        <span>Book Test</span>
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Test Detail / Preparation Modal */}
      {detailModalTest && (
        <div className="modal-overlay" onClick={() => setDetailModalTest(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="badge badge-primary">{detailModalTest.code}</span>
                <h3 style={{ marginTop: '4px', color: 'var(--color-primary)' }}>{detailModalTest.name}</h3>
              </div>
              <button onClick={() => setDetailModalTest(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>
            <div className="modal-body">
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--color-text-main)', marginBottom: '6px' }}>
                  Clinical Description
                </h4>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {detailModalTest.description}
                </p>
              </div>

              <div style={{
                background: 'var(--color-bg)',
                borderRadius: '8px',
                padding: '1rem',
                marginBottom: '1.25rem'
              }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--color-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Info size={18} /> Verified Patient Preparation Instructions
                </h4>
                <p style={{ color: 'var(--color-text-body)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {detailModalTest.preparation || 'No specific diet restrictions. Drink sufficient plain water.'}
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85rem' }}>
                <div><strong>Department:</strong> {detailModalTest.category}</div>
                <div><strong>Specimen:</strong> {detailModalTest.sampleType}</div>
                <div><strong>Reporting Time:</strong> Within {detailModalTest.tatHours} Hours</div>
                <div><strong>Standard Price:</strong> ₹{detailModalTest.price}</div>
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={() => setDetailModalTest(null)} className="btn btn-outline btn-sm">
                Close
              </button>
              <button
                onClick={() => {
                  const test = detailModalTest;
                  setDetailModalTest(null);
                  handleBookTest(test);
                }}
                className="btn btn-primary btn-sm"
              >
                Book This Test Now
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Appointment Modal */}
      <AppointmentModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        preselectedItem={selectedTestForBooking}
      />

      <style>{`
        .page-header-banner {
          background: linear-gradient(135deg, #0B4778 0%, #07355B 100%);
          color: #ffffff;
          padding: 3.5rem 0 3rem;
          text-align: center;
        }
        .page-header-banner .section-subtitle {
          color: #5EEAD4;
        }
        .page-header-title {
          font-size: 2.5rem;
          color: #ffffff;
          margin-bottom: 0.75rem;
        }
        .page-header-desc {
          max-width: 680px;
          margin: 0 auto;
          color: #E2E8F0;
          font-size: 1.05rem;
        }
        .catalog-controls {
          display: flex;
          justify-content: space-between;
          gap: 1.25rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }
        .catalog-search-wrap {
          flex: 1;
          min-width: 280px;
          display: flex;
          align-items: center;
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 8px 14px;
          box-shadow: var(--shadow-sm);
        }
        .catalog-search-input {
          flex: 1;
          border: none;
          outline: none;
          padding-left: 8px;
          font-size: 0.95rem;
          color: var(--color-text-main);
        }
        .catalog-sort-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          padding: 6px 14px;
        }
        .sort-select {
          border: none;
          outline: none;
          background: transparent;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--color-text-main);
          cursor: pointer;
        }
        .category-pills-bar {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 12px;
          margin-bottom: 1.5rem;
          scrollbar-width: thin;
        }
        .category-pill {
          background: #ffffff;
          border: 1px solid var(--color-border);
          padding: 6px 16px;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-text-body);
          cursor: pointer;
          white-space: nowrap;
          transition: all var(--transition-fast);
        }
        .category-pill:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }
        .category-pill.active {
          background: var(--color-primary);
          color: #ffffff;
          border-color: var(--color-primary);
        }
        .results-summary {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.9rem;
          color: var(--color-text-muted);
          margin-bottom: 1.5rem;
        }
        .active-filter-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--color-primary-light);
          color: var(--color-primary);
          padding: 2px 8px;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .active-filter-badge button {
          background: none;
          border: none;
          color: var(--color-primary);
          cursor: pointer;
          font-size: 1rem;
        }
        .tests-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .test-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: var(--shadow-card);
          transition: all var(--transition-normal);
        }
        .test-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-card-hover);
          border-color: rgba(11, 71, 120, 0.25);
        }
        .test-card-banner {
          position: relative;
          width: 100%;
          height: 120px;
          overflow: hidden;
          background: #0B426F;
        }
        .test-card-banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .test-card:hover .test-card-banner-img {
          transform: scale(1.06);
        }
        .test-card-banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(6, 42, 74, 0.9) 0%, rgba(6, 42, 74, 0.3) 60%, rgba(0,0,0,0.1) 100%);
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 8px 12px;
        }
        .test-card-inner-body {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .test-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }
        .test-code-badge {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-primary);
          background: var(--color-primary-light);
          padding: 2px 8px;
          border-radius: 4px;
          letter-spacing: 0.5px;
        }
        .test-cat-badge {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-secondary);
        }
        .test-name {
          font-size: 1.15rem;
          color: var(--color-primary-dark);
          line-height: 1.35;
          margin-bottom: 0.5rem;
        }
        .test-desc {
          font-size: 0.825rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 1rem;
          flex: 1;
        }
        .test-meta-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
          font-size: 0.78rem;
          color: var(--color-text-body);
          background: var(--color-bg);
          padding: 8px 10px;
          border-radius: 6px;
          margin-bottom: 0.75rem;
        }
        .test-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .test-fasting-note {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: #B45309;
          background: #FEF3C7;
          padding: 4px 8px;
          border-radius: 4px;
          margin-bottom: 0.75rem;
        }
        .test-price-row {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding-top: 0.75rem;
          border-top: 1px solid var(--color-border-subtle);
          margin-bottom: 1rem;
        }
        .price-val {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--color-primary);
          margin-right: 6px;
        }
        .mrp-val {
          font-size: 0.85rem;
          color: var(--color-text-light);
          text-decoration: line-through;
        }
        .test-card-actions {
          display: flex;
          gap: 8px;
        }
        .empty-catalog-state {
          text-align: center;
          padding: 4rem 1rem;
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          max-width: 500px;
          margin: 0 auto;
        }
        .empty-catalog-state h3 {
          margin: 1rem 0 0.5rem;
          color: var(--color-text-main);
        }
        .empty-catalog-state p {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          margin-bottom: 1.25rem;
        }

        @media (max-width: 1024px) {
          .tests-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .tests-grid {
            grid-template-columns: 1fr;
          }
          .page-header-title {
            font-size: 1.85rem;
          }
          .catalog-controls {
            flex-direction: column;
            gap: 0.85rem;
          }
          .catalog-search-wrap {
            min-width: 100%;
            width: 100%;
            box-sizing: border-box;
          }
          .catalog-sort-wrap {
            width: 100%;
            justify-content: space-between;
            box-sizing: border-box;
          }
        }
        @media (max-width: 400px) {
          .test-card {
            padding: 1.15rem 1rem;
          }
          .test-price-row {
            flex-wrap: wrap;
            gap: 6px;
          }
        }
      `}</style>
    </div>
  );
};

export default TestsPage;
