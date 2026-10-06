import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Users, 
  Cpu, 
  HeartHandshake, 
  Play, 
  X,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const ADVANTAGES = [
  {
    icon: <ShieldCheck size={26} className="advantage-icon icon-teal" />,
    title: 'Reliable Results',
    desc: 'Accurate and timely reports you can trust with automated analyzer validation.'
  },
  {
    icon: <Users size={26} className="advantage-icon icon-blue" />,
    title: 'Experienced Team',
    desc: 'Qualified and supportive healthcare professionals and certified phlebotomists.'
  },
  {
    icon: <Cpu size={26} className="advantage-icon icon-teal" />,
    title: 'Modern Technology',
    desc: 'Advanced diagnostic equipment and automated barcoded processing.'
  },
  {
    icon: <HeartHandshake size={26} className="advantage-icon icon-blue" />,
    title: 'Patient-Centric Care',
    desc: 'Easy booking, clear guidance and dedicated medical support.'
  }
];

const WhyChooseUs = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="section why-choose-section">
      <div className="container">
        
        <div className="section-header-simple">
          <span className="section-tag-eyebrow">WHY CHOOSE US</span>
          <h2 className="section-main-heading">Your Health is Our Priority</h2>
        </div>

        <div className="why-choose-grid">
          
          {/* Left: 4 Features 2x2 Grid */}
          <div className="features-subgrid">
            {ADVANTAGES.map((adv, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon-box">
                  {adv.icon}
                </div>
                <h3 className="feature-title">{adv.title}</h3>
                <p className="feature-desc">{adv.desc}</p>
              </div>
            ))}
          </div>

          {/* Right: Facility Video Walkthrough Media Card */}
          <div className="walkthrough-media-card" onClick={() => setVideoModalOpen(true)}>
            <img
              src="/images/video-walkthrough.jpg"
              alt="Take a Walk Through Doctor Diagnostics Center Trichy"
              className="walkthrough-bg-img"
              loading="lazy"
            />
            <div className="walkthrough-dark-overlay" />
            
            <div className="walkthrough-content">
              {/* Play Button Icon */}
              <div className="walkthrough-play-btn" aria-label="Play video walkthrough">
                <Play size={24} fill="#ffffff" color="#ffffff" className="play-icon" />
              </div>

              <h3 className="walkthrough-title">
                Take a Walk Through Our Diagnostics Center
              </h3>

              <button 
                type="button" 
                className="walkthrough-action-pill"
                onClick={(e) => {
                  e.stopPropagation();
                  setVideoModalOpen(true);
                }}
              >
                <span>Watch Video</span>
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Video Modal Preview */}
      {videoModalOpen && (
        <div className="video-modal-backdrop" onClick={() => setVideoModalOpen(false)}>
          <div className="video-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal-header">
              <div className="video-modal-title-group">
                <Sparkles size={16} color="var(--color-secondary)" />
                <strong>Doctor Diagnostics Center • Trichy Facility Tour</strong>
              </div>
              <button 
                type="button" 
                onClick={() => setVideoModalOpen(false)}
                className="video-modal-close"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="video-modal-body">
              <img
                src="/images/hero-lab.jpg"
                alt="Doctor Diagnostics Center Trichy Laboratory Suite"
                className="video-modal-img"
              />
              <div className="video-modal-info">
                <h4>Welcome to Doctor Diagnostics Center</h4>
                <p>
                  Opposite SBI, Near to Aruna Theatre Stop, Ramalinga Nagar, Puthur Main Road, Woriyur, Trichy - 620003.
                </p>
                <div className="video-points">
                  <div><CheckCircle2 size={16} color="var(--color-secondary)" /> Automated Clinical Chemistry &amp; Hematology</div>
                  <div><CheckCircle2 size={16} color="var(--color-secondary)" /> 12-Lead Digital Cardiogram &amp; Digital X-Ray</div>
                  <div><CheckCircle2 size={16} color="var(--color-secondary)" /> Hygienic Waiting Lounge &amp; Dedicated Phlebotomy Cubicles</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .why-choose-section {
          background-color: var(--color-surface);
          padding: 3.5rem 0;
          border-bottom: 1px solid var(--color-border);
        }
        .section-header-simple {
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
          font-size: clamp(1.6rem, 2.3vw, 2.1rem);
          font-weight: 800;
          color: var(--color-text-main);
          line-height: 1.25;
          margin: 0;
        }

        .why-choose-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.85fr;
          gap: 2rem;
          align-items: stretch;
        }

        /* Left 2x2 Features Grid */
        .features-subgrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.25rem;
        }
        .feature-card {
          background: #ffffff;
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          transition: transform var(--transition-normal), box-shadow var(--transition-normal);
        }
        .feature-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-md);
          border-color: rgba(11, 66, 111, 0.25);
        }
        .feature-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--color-bg);
          border: 1px solid var(--color-border-subtle);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }
        .icon-teal {
          color: var(--color-secondary);
        }
        .icon-blue {
          color: var(--color-primary);
        }
        .feature-title {
          font-size: 1.05rem;
          color: var(--color-text-main);
          margin-bottom: 0.4rem;
          font-weight: 700;
        }
        .feature-desc {
          font-size: 0.8125rem;
          color: var(--color-text-muted);
          line-height: 1.5;
        }

        /* Right Video Walkthrough Media Card */
        .walkthrough-media-card {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--color-border);
          min-height: 320px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0B426F;
        }
        .walkthrough-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .walkthrough-media-card:hover .walkthrough-bg-img {
          transform: scale(1.05);
        }
        .walkthrough-dark-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(6, 42, 74, 0.65) 0%, rgba(6, 42, 74, 0.85) 100%);
          backdrop-filter: blur(1px);
          transition: background 0.3s ease;
        }
        .walkthrough-media-card:hover .walkthrough-dark-overlay {
          background: linear-gradient(180deg, rgba(6, 42, 74, 0.5) 0%, rgba(6, 42, 74, 0.8) 100%);
        }
        .walkthrough-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem 1.5rem;
          color: #ffffff;
        }
        .walkthrough-play-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(8px);
          border: 2px solid rgba(255, 255, 255, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .play-icon {
          margin-left: 3px;
        }
        .walkthrough-media-card:hover .walkthrough-play-btn {
          transform: scale(1.1);
          background: rgba(255, 255, 255, 0.35);
        }
        .walkthrough-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.25rem;
          line-height: 1.35;
          max-width: 280px;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }
        .walkthrough-action-pill {
          background: rgba(255, 255, 255, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.6);
          color: #ffffff;
          padding: 8px 22px;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          backdrop-filter: blur(4px);
          transition: all var(--transition-fast);
        }
        .walkthrough-action-pill:hover {
          background: #ffffff;
          color: #0B426F;
        }

        /* Video Modal Preview */
        .video-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .video-modal-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          max-width: 650px;
          width: 100%;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--color-border);
        }
        .video-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.25rem;
          background: var(--color-bg);
          border-bottom: 1px solid var(--color-border);
        }
        .video-modal-title-group {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          color: var(--color-primary-dark);
        }
        .video-modal-close {
          background: none;
          border: none;
          color: var(--color-text-muted);
          cursor: pointer;
          padding: 4px;
          display: flex;
        }
        .video-modal-body {
          padding: 1.5rem;
        }
        .video-modal-img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          border-radius: var(--radius-md);
          margin-bottom: 1.25rem;
        }
        .video-modal-info h4 {
          font-size: 1.15rem;
          color: var(--color-primary);
          margin-bottom: 4px;
        }
        .video-modal-info p {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          margin-bottom: 1rem;
        }
        .video-points {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--color-text-body);
        }
        .video-points div {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        @media (max-width: 1024px) {
          .why-choose-grid {
            grid-template-columns: 1fr;
          }
          .walkthrough-media-card {
            min-height: 260px;
          }
        }
        @media (max-width: 640px) {
          .features-subgrid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
