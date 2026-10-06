import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall, MessageSquare } from 'lucide-react';

const FAQS = [
  {
    q: 'What are the fasting guidelines for diagnostic blood tests?',
    a: 'Fasting Blood Sugar (FBS) requires 8 to 10 hours of overnight fasting. Lipid Profile requires 10 to 12 hours of strict fasting. Plain water is encouraged. Routine tests such as Complete Blood Count (CBC), HbA1c, and Thyroid Profile (T3, T4, TSH) do not require prior fasting.'
  },
  {
    q: 'How do I book a home sample collection in Trichy?',
    a: 'You can book directly through our website by choosing your tests and preferred morning slot (6:30 AM to 12:00 PM), or by sending a WhatsApp message to +91 94431 52200 with your address. A certified phlebotomist will arrive with sterile equipment and cold-chain transport.'
  },
  {
    q: 'When and how will I receive my clinical test reports?',
    a: 'Routine hematology, biochemistry, and glucose profiles are typically completed within 2 to 4 hours. You receive an automated SMS and WhatsApp alert with a secure downloadable PDF report signed off by a pathologist. Hard copies are also available at our Salai Road center.'
  },
  {
    q: 'Which localities in Trichy are covered for doorstep collection?',
    a: 'We cover all major localities including Thillai Nagar, Cantonment, KK Nagar, Srirangam, Woraiyur, Tennur, TVS Tollgate, Palakkarai, Ponmalai, Crawford, and Kattur. Home sample collection is free for bookings above ₹500 and senior citizens; a nominal ₹100 fee applies for single routine tests.'
  },
  {
    q: 'What payment modes are accepted and what is the cancellation policy?',
    a: 'We accept UPI (GPay, PhonePe, Paytm), cash, and debit/credit cards at our center and during home visits. You can cancel or reschedule your booking at no charge before the phlebotomist departs for your location.'
  },
  {
    q: 'Do I need a doctor’s prescription to book a health checkup package?',
    a: 'No prescription is required for preventive health checkup packages or general wellness screenings. If your doctor has prescribed specific investigations, please present the prescription so our team can correlate tests accordingly.'
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section faq-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Patient Support</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">
            Essential information regarding sample collection, fasting preparation, and digital report turnaround.
          </p>
        </div>

        <div className="faq-container">
          <div className="faq-accordion">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div
                  key={idx}
                  className={`faq-item ${isOpen ? 'faq-item-open' : ''}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="faq-question-btn"
                    aria-expanded={isOpen}
                  >
                    <span className="faq-question-text">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`faq-chevron ${isOpen ? 'faq-chevron-rotated' : ''}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="faq-answer-panel">
                      <p className="faq-answer-text">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="faq-support-box">
            <HelpCircle size={28} className="support-box-icon" />
            <h3 className="support-box-title">Have more questions about tests?</h3>
            <p className="support-box-desc">
              Our clinical desk is available Monday through Saturday from 6:30 AM to 9:00 PM to assist you.
            </p>
            <div className="support-box-actions">
              <a href="tel:+919443100000" className="btn btn-primary btn-sm">
                <PhoneCall size={14} />
                <span>Call Lab Desk</span>
              </a>
              <a
                href="https://wa.me/919443152200?text=Hello%20Doctor%20Diagnostics%20Trichy,%20I%20have%20a%20query%20about%20a%20test."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-sm"
              >
                <MessageSquare size={14} />
                <span>WhatsApp Query</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .faq-section {
          background-color: var(--color-surface);
          border-bottom: 1px solid var(--color-border);
        }
        .faq-container {
          max-width: 860px;
          margin: 0 auto;
        }
        .faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 2.5rem;
        }
        .faq-item {
          background: #ffffff;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          overflow: hidden;
          transition: border-color var(--transition-fast);
        }
        .faq-item-open {
          border-color: var(--color-primary);
        }
        .faq-question-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.15rem 1.25rem;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          gap: 12px;
        }
        .faq-question-text {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-text-main);
          line-height: 1.35;
        }
        .faq-chevron {
          color: var(--color-text-muted);
          flex-shrink: 0;
          transition: transform var(--transition-fast);
        }
        .faq-chevron-rotated {
          transform: rotate(180deg);
          color: var(--color-primary);
        }
        .faq-answer-panel {
          padding: 0 1.25rem 1.15rem;
          border-top: 1px solid var(--color-border-subtle);
          background: var(--color-bg);
        }
        .faq-answer-text {
          font-size: 0.885rem;
          color: var(--color-text-body);
          line-height: 1.6;
          padding-top: 0.85rem;
        }
        .faq-support-box {
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .support-box-icon {
          color: var(--color-secondary);
          margin-bottom: 0.75rem;
        }
        .support-box-title {
          font-size: 1.15rem;
          color: var(--color-text-main);
          margin-bottom: 0.35rem;
        }
        .support-box-desc {
          font-size: 0.85rem;
          color: var(--color-text-muted);
          max-width: 520px;
          margin-bottom: 1.25rem;
        }
        .support-box-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </section>
  );
};

export default FaqSection;
