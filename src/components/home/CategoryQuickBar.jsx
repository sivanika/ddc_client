import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FlaskConical, 
  HeartPulse, 
  Monitor, 
  Home, 
  Microscope,
  ArrowRight
} from 'lucide-react';

const CATEGORIES = [
  {
    id: 'tests',
    title: 'Lab Tests',
    subtitle: '300+ Tests',
    icon: <FlaskConical size={24} color="#0B426F" />,
    color: '#E0F2FE',
    path: '/tests'
  },
  {
    id: 'packages',
    title: 'Health Packages',
    subtitle: 'Curated Checkups',
    icon: <HeartPulse size={24} color="#E11D48" />,
    color: '#FFE4E6',
    path: '/packages'
  },
  {
    id: 'imaging',
    title: 'Diagnostic Imaging',
    subtitle: 'X-ray / Ultrasound etc.',
    icon: <Monitor size={24} color="#059669" />,
    color: '#D1FAE5',
    path: '/services'
  },
  {
    id: 'home-col',
    title: 'Home Collection',
    subtitle: 'At Your Convenience',
    icon: <Home size={24} color="#D97706" />,
    color: '#FEF3C7',
    path: '/home-collection'
  },
  {
    id: 'specialized',
    title: 'Specialized Services',
    subtitle: 'Pathology & More',
    icon: <Microscope size={24} color="#7C3AED" />,
    color: '#EDE9FE',
    path: '/services'
  }
];

const CategoryQuickBar = () => {
  const navigate = useNavigate();

  return (
    <section className="category-quick-bar-section">
      <div className="container">
        <div className="quick-bar-grid">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="quick-bar-card"
              onClick={() => navigate(cat.path)}
            >
              <div className="quick-icon-wrap" style={{ backgroundColor: cat.color }}>
                {cat.icon}
              </div>
              <div className="quick-info">
                <span className="quick-title">{cat.title}</span>
                <span className="quick-sub">{cat.subtitle}</span>
              </div>
              <ArrowRight size={14} className="quick-arrow" />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .category-quick-bar-section {
          background: #ffffff;
          padding: 1.5rem 0 1rem;
          position: relative;
          z-index: 5;
          margin-top: -1.5rem;
        }
        .quick-bar-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1rem;
        }
        .quick-bar-card {
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 0.85rem 1rem;
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
          transition: all var(--transition-fast);
        }
        .quick-bar-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
          border-color: var(--color-primary);
        }
        .quick-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform var(--transition-fast);
        }
        .quick-bar-card:hover .quick-icon-wrap {
          transform: scale(1.08);
        }
        .quick-info {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-width: 0;
        }
        .quick-title {
          font-size: 0.875rem;
          font-weight: 700;
          color: var(--color-text-main);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .quick-sub {
          font-size: 0.72rem;
          color: var(--color-text-muted);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .quick-arrow {
          color: var(--color-text-light);
          flex-shrink: 0;
          transition: transform var(--transition-fast), color var(--transition-fast);
        }
        .quick-bar-card:hover .quick-arrow {
          color: var(--color-primary);
          transform: translateX(3px);
        }

        @media (max-width: 1024px) {
          .quick-bar-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 640px) {
          .quick-bar-grid {
            grid-template-columns: 1fr;
          }
          .category-quick-bar-section {
            margin-top: 0;
            padding: 1.25rem 0;
          }
        }
      `}</style>
    </section>
  );
};

export default CategoryQuickBar;
