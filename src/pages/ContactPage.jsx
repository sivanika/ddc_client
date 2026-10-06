import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp,
  Navigation,
  ExternalLink
} from 'lucide-react';
import api from '../services/api';
import { useToast } from '../context/ToastContext';

const FAQS = [
  {
    q: 'How long do I need to fast for fasting blood sugar and lipid tests?',
    a: 'For Fasting Blood Sugar (FBS), a minimum of 8 to 10 hours overnight fasting is required. For Lipid Profile (cholesterol), 10 to 12 hours fasting is essential. Plain drinking water is permitted and encouraged.'
  },
  {
    q: 'How does Home Sample Collection work across Trichy?',
    a: 'You can schedule online or via WhatsApp. Our certified phlebotomist visits your home with pre-barcoded sterile vacutainers and cold storage kit, draws the blood sample safely, and transports it directly to our Thillai Nagar central lab.'
  },
  {
    q: 'When and how will I receive my diagnostic report?',
    a: 'Routine hematology (CBC) and biochemistry results are available within 3 to 4 hours. Once verified and signed off by our consultant pathologist, an official password-protected PDF report is sent directly to your WhatsApp and registered email.'
  },
  {
    q: 'What payment methods are accepted at Doctor Diagnostics Center?',
    a: 'We accept UPI (Google Pay, PhonePe, Paytm), debit/credit cards, and cash both at our Salai Road center counter and during home sample collection.'
  },
  {
    q: 'Do I need a doctor prescription to book a health package?',
    a: 'No doctor prescription is mandatory for preventive wellness and master health checkup packages. For specific specialized investigations, bringing your doctor prescription is helpful for clinical correlation.'
  }
];

const ContactPage = () => {
  const { addToast } = useToast();
  const [openFaq, setOpenFaq] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [enquirySuccess, setEnquirySuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'general',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.subject.trim() || !formData.message.trim()) {
      addToast('Please complete all required fields', 'error');
      return;
    }

    setSubmitting(true);
    try {
      const res = await api.post('/enquiries', formData);
      if (res.data.success) {
        setEnquirySuccess(true);
        addToast('Enquiry received! Our lab support team will contact you shortly.', 'success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          enquiryType: 'general',
          subject: '',
          message: ''
        });
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to submit enquiry. Please call us directly.';
      addToast(msg, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-page-wrapper">
      {/* Banner */}
      <section className="page-header-banner">
        <div className="container">
          <span className="section-subtitle">Reach Our Laboratory</span>
          <h1 className="page-header-title">Contact Us &amp; Center Directions</h1>
          <p className="page-header-desc">
            Get in touch with our medical diagnostics support team for enquiries, corporate health screening camps, or location guidance in Trichy.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="section" style={{ paddingTop: '3.5rem' }}>
        <div className="container">
          <div className="contact-main-grid">
            
            {/* Center Contact Info */}
            <div className="contact-info-card">
              <h2 style={{ fontSize: '1.6rem', color: 'var(--color-primary-dark)', marginBottom: '0.75rem' }}>
                Doctor Diagnostics Center
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                Centrally located on Salai Road, Thillai Nagar, providing accessible healthcare diagnostics to the people of Tiruchirappalli and surrounding districts.
              </p>

              <div className="c-item">
                <MapPin size={22} className="c-icon" />
                <div>
                  <strong>Center Address:</strong>
                  <div>No. 42, Salai Road, Near Thillai Nagar 1st Cross,</div>
                  <div>Tiruchirappalli - 620018, Tamil Nadu, India</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    Landmark: Opp. City Union Bank / Fort Station Link Road
                  </div>
                </div>
              </div>

              <div className="c-item">
                <Clock size={22} className="c-icon" />
                <div>
                  <strong>Working Hours:</strong>
                  <div>Mon - Sat: <strong>6:30 AM – 9:00 PM</strong></div>
                  <div>Sunday: <strong>7:00 AM – 2:00 PM</strong></div>
                  <div style={{ color: 'var(--color-secondary)', fontSize: '0.825rem', marginTop: '4px' }}>
                    Emergency &amp; Stat sample collection available
                  </div>
                </div>
              </div>

              <div className="c-item">
                <Phone size={22} className="c-icon" />
                <div>
                  <strong>Phone Contact:</strong>
                  <div>Mobile: <a href="tel:+919443100000" style={{ fontWeight: 700 }}>+91 94431 00000</a></div>
                  <div>Landline: +91 431 2740000</div>
                </div>
              </div>

              <div className="c-item">
                <MessageSquare size={22} className="c-icon" />
                <div>
                  <strong>WhatsApp Helpline:</strong>
                  <div>
                    <a
                      href="https://wa.me/919443152200"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: '#059669', fontWeight: 700 }}
                    >
                      +91 94431 52200 (Chat Now)
                    </a>
                  </div>
                </div>
              </div>

              <div className="c-item">
                <Mail size={22} className="c-icon" />
                <div>
                  <strong>Official Email:</strong>
                  <div>care@doctordiagnostics.com</div>
                </div>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <a
                  href="https://maps.google.com/?q=Salai+Road+Thillai+Nagar+Trichy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{ width: '100%' }}
                >
                  <Navigation size={18} />
                  <span>Open in Google Maps for Navigation</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Validated Enquiry Form */}
            <div className="contact-form-card">
              <h3 style={{ fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
                Send Us a Message or Enquiry
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Have a question regarding test preparations, corporate packages, or test availability? Fill the form below.
              </p>

              {enquirySuccess && (
                <div style={{
                  background: 'var(--color-success-bg)',
                  border: '1px solid var(--color-success)',
                  borderRadius: '8px',
                  padding: '1rem',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#065F46'
                }}>
                  <CheckCircle2 size={22} />
                  <span>Thank you! Your enquiry has been received. Our team will contact you shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Ramesh Balaji"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 9842412345"
                      className="form-control"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Email Address (Optional)</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. ramesh@example.com"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Enquiry Type *</label>
                    <select
                      name="enquiryType"
                      value={formData.enquiryType}
                      onChange={handleInputChange}
                      className="form-control"
                    >
                      <option value="general">General Enquiry</option>
                      <option value="home_collection">Home Collection Query</option>
                      <option value="corporate">Corporate Health Checkup</option>
                      <option value="report_query">Report Status &amp; Query</option>
                      <option value="feedback">Feedback &amp; Suggestions</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g. Enquiry regarding Thyroid Profile or Corporate Camp"
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message / Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder="Please specify your query or requirements..."
                    className="form-control"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%', marginTop: '0.5rem' }}
                >
                  <Send size={18} />
                  <span>{submitting ? 'Sending Enquiry...' : 'Submit Medical Enquiry'}</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Google Map Frame */}
      <section className="section-alt" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Location Map</span>
            <h2 className="section-title">Find Us on Salai Road, Trichy</h2>
          </div>

          <div style={{
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-lg)',
            height: '420px',
            background: '#E2E8F0'
          }}>
            <iframe
              title="Doctor Diagnostics Center Trichy Google Map"
              src="https://maps.google.com/maps?q=Salai+Road+Thillai+Nagar+Tiruchirappalli+Tamil+Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header">
            <span className="section-subtitle">Common Queries</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc">
              Clear answers regarding fasting, sample collection, and report delivery.
            </p>
          </div>

          <div className="faq-accordion">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-item ${isOpen ? 'open' : ''}`}>
                  <button
                    className="faq-question-btn"
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {isOpen && (
                    <div className="faq-answer-box">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .contact-main-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 3rem;
          align-items: start;
        }
        .contact-info-card, .contact-form-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-card);
          padding: 2.5rem;
        }
        .c-item {
          display: flex;
          gap: 14px;
          margin-bottom: 1.5rem;
          font-size: 0.925rem;
          line-height: 1.5;
        }
        .c-icon {
          color: var(--color-primary);
          flex-shrink: 0;
          margin-top: 2px;
        }
        .c-item strong {
          display: block;
          color: var(--color-text-main);
          margin-bottom: 2px;
        }
        .faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .faq-item {
          background: #ffffff;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          overflow: hidden;
          transition: border-color var(--transition-fast);
        }
        .faq-item.open {
          border-color: var(--color-primary);
        }
        .faq-question-btn {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          background: none;
          border: none;
          text-align: left;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-primary-dark);
          cursor: pointer;
        }
        .faq-answer-box {
          padding: 0 1.5rem 1.25rem;
          font-size: 0.925rem;
          color: var(--color-text-body);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .contact-main-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
