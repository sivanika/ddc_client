import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Droplet, 
  Activity, 
  Zap, 
  Heart, 
  FileText,
  AlertCircle
} from 'lucide-react';
import api from '../../services/api';

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Hematology':
      return <Droplet size={18} className="test-cat-icon icon-blue" />;
    case 'Biochemistry':
    case 'Diabetes Care':
      return <Activity size={18} className="test-cat-icon icon-teal" />;
    case 'Endocrinology':
      return <Zap size={18} className="test-cat-icon icon-teal" />;
    case 'Cardiology':
      return <Heart size={18} className="test-cat-icon icon-blue" />;
    default:
      return <FileText size={18} className="test-cat-icon icon-blue" />;
  }
};

const PopularTestsSection = ({ onSelectTest }) => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPopularTests = async () => {
      try {
        const res = await api.get('/tests?popular=true');
        if (res.data && res.data.success) {
          // Take top 6 popular tests
          setTests(res.data.data.slice(0, 6));
        }
      } catch (err) {
        console.error('Error fetching popular tests:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPopularTests();
  }, []);

  const handleBookClick = (test) => {
    if (onSelectTest) {
      onSelectTest(test);
    } else {
      navigate('/book');
    }
  };

  return (
    <section className="section popular-tests-section">
      <div className="container">
        <div className="section-header-split">
          <div>
            <span className="section-tag-eyebrow">OUR TESTS</span>
            <h2 className="section-main-heading">Popular Diagnostic Tests</h2>
          </div>
          <button onClick={() => navigate('/tests')} className="section-header-link">
            <span>View All Tests</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {loading ? (
          <div className="tests-loading-state">
            <span>Loading popular diagnostic tests...</span>
          </div>
        ) : (
          <div className="popular-tests-grid">
            {tests.map((test) => (
              <div key={test._id} className="test-card">
                <div className="test-card-top">
                  <div className="test-cat-pill">
                    {getCategoryIcon(test.category)}
                    <span>{test.category}</span>
                  </div>
                  {test.code && <span className="test-code-badge">{test.code}</span>}
                </div>

                <h3 className="test-name">{test.name}</h3>
                <p className="test-desc">{test.description}</p>

                {/* Preparation & Fasting */}
                <div className="test-prep-box">
                  <Clock size={14} className="prep-icon" />
                  <span>
                    {test.fastingRequired
                      ? `Fasting required (${test.fastingHours} hrs)`
                      : 'No fasting required'}
                  </span>
                </div>

                {/* Price and Actions */}
                <div className="test-footer">
                  <div className="test-pricing">
                    <span className="test-price">₹{test.price}</span>
                    {test.mrp && test.mrp > test.price && (
                      <span className="test-mrp">₹{test.mrp}</span>
                    )}
                  </div>

                  <div className="test-action-buttons">
                    <button
                      type="button"
                      onClick={() => navigate(`/tests?q=${encodeURIComponent(test.name)}`)}
                      className="test-details-link"
                    >
                      <span>Details</span>
                      <ArrowRight size={13} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleBookClick(test)}
                      className="btn btn-primary btn-sm test-book-btn"
                    >
                      <Calendar size={13} />
                      <span>Book Test</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="tests-view-all">
          <button
            onClick={() => navigate('/tests')}
            className="btn btn-outline btn-lg"
          >
            <span>Explore All Diagnostic Tests</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .popular-tests-section {
          background-color: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
          padding: 3rem 0;
        }
        .section-header-split {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 2rem;
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
          font-size: 2rem;
          font-weight: 800;
          color: var(--color-text-main);
          line-height: 1.2;
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
          transition: gap var(--transition-fast), color var(--transition-fast);
        }
        .section-header-link:hover {
          color: var(--color-primary-dark);
          gap: 10px;
        }
        .popular-tests-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        .test-card {
          background: #ffffff;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }
        .test-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: rgba(11, 66, 111, 0.2);
        }
        .test-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.85rem;
        }
        .test-cat-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }
        .test-cat-icon {
          flex-shrink: 0;
        }
        .icon-blue {
          color: var(--color-primary);
        }
        .icon-teal {
          color: var(--color-secondary);
        }
        .test-code-badge {
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--color-text-muted);
          background: var(--color-bg);
          padding: 2px 6px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--color-border-subtle);
        }
        .test-name {
          font-size: 1.15rem;
          color: var(--color-text-main);
          margin-bottom: 0.4rem;
          line-height: 1.3;
        }
        .test-desc {
          font-size: 0.825rem;
          color: var(--color-text-muted);
          line-height: 1.5;
          margin-bottom: 1rem;
          flex: 1;
        }
        .test-prep-box {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.775rem;
          color: var(--color-text-body);
          background: var(--color-bg);
          padding: 6px 10px;
          border-radius: var(--radius-sm);
          margin-bottom: 1.15rem;
          border: 1px solid var(--color-border-subtle);
        }
        .prep-icon {
          color: var(--color-secondary);
          flex-shrink: 0;
        }
        .test-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 0.85rem;
          border-top: 1px solid var(--color-border-subtle);
        }
        .test-pricing {
          display: flex;
          align-items: baseline;
          gap: 6px;
        }
        .test-price {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--color-primary);
        }
        .test-mrp {
          font-size: 0.85rem;
          color: var(--color-text-light);
          text-decoration: line-through;
        }
        .test-action-buttons {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .test-details-link {
          background: none;
          border: none;
          color: var(--color-text-muted);
          font-size: 0.8125rem;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 3px;
          padding: 4px;
        }
        .test-details-link:hover {
          color: var(--color-primary);
        }
        .test-book-btn {
          white-space: nowrap;
        }
        .tests-loading-state {
          text-align: center;
          padding: 3rem 0;
          color: var(--color-text-muted);
        }
        .tests-view-all {
          text-align: center;
          margin-top: 2.5rem;
        }

        @media (max-width: 1024px) {
          .popular-tests-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .popular-tests-grid {
            grid-template-columns: 1fr;
          }
          .test-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .test-action-buttons {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </section>
  );
};

export default PopularTestsSection;
