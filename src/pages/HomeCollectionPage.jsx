import React, { useState } from 'react';
import { 
  Home, 
  MapPin, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle,
  ExternalLink,
  Info
} from 'lucide-react';
import api from '../services/api';
import { useToast } from '../context/ToastContext';

const TRICHY_LOCALITIES = [
  'Thillai Nagar',
  'Cantonment',
  'KK Nagar',
  'Srirangam',
  'Woraiyur',
  'Tennur',
  'TVS Tollgate',
  'Palakkarai',
  'Ponmalai (Golden Rock)',
  'Edamalaipatti Pudur',
  'Crawford',
  'Kattur',
  'Melachinthamani',
  'Subramaniyapuram',
  'Beema Nagar'
];

const HC_TIME_SLOTS = [
  '06:30 AM - 07:30 AM (Fasting Priority)',
  '07:30 AM - 08:30 AM',
  '08:30 AM - 09:30 AM',
  '09:30 AM - 10:30 AM',
  '10:30 AM - 11:30 AM',
  '11:30 AM - 12:30 PM'
];

const POPULAR_TESTS_CHECKLIST = [
  'Complete Blood Count (CBC with ESR)',
  'Fasting Blood Sugar (FBS) & PPBS',
  'HbA1c Glycated Hemoglobin',
  'Lipid Profile Comprehensive',
  'Thyroid Profile Total (T3, T4, TSH)',
  'Liver Function Test (LFT)',
  'Renal Function Test (RFT)',
  'Vitamin D3 & Vitamin B12',
  'Master Health Checkup (Comprehensive)',
  'Senior Citizen Wellness Profile (Gold)',
  'Diabetic Care Package'
];

const HomeCollectionPage = () => {
  const { addToast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    patientName: '',
    mobileNumber: '',
    email: '',
    age: '',
    gender: 'male',
    address: '',
    locality: 'Thillai Nagar',
    pincode: '620018',
    preferredDate: todayStr,
    preferredSlot: HC_TIME_SLOTS[0],
    selectedTests: ['Master Health Checkup (Comprehensive)'],
    fastingConfirmed: true,
    specialInstructions: '',
    consentAgreed: true
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleTestToggle = (testName) => {
    setFormData((prev) => {
      const exists = prev.selectedTests.includes(testName);
      if (exists) {
        return { ...prev, selectedTests: prev.selectedTests.filter((t) => t !== testName) };
      } else {
        return { ...prev, selectedTests: [...prev.selectedTests, testName] };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.patientName.trim()) {
      addToast('Please enter patient full name', 'error');
      return;
    }
    if (!formData.mobileNumber.trim() || formData.mobileNumber.length < 10) {
      addToast('Please enter a valid 10-digit mobile number', 'error');
      return;
    }
    if (!formData.address.trim()) {
      addToast('Please provide your complete door/flat street address in Trichy', 'error');
      return;
    }
    if (formData.selectedTests.length === 0) {
      addToast('Please select at least one test or health package', 'error');
      return;
    }
    if (!formData.consentAgreed) {
      addToast('Please acknowledge the privacy and home sample consent', 'error');
      return;
    }

    setSubmitting(true);
    try {
      const res = await api.post('/home-collections', formData);
      if (res.data.success) {
        setConfirmedBooking(res.data.data);
        addToast('Home sample collection scheduled successfully!', 'success');
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to submit home collection request.';
      addToast(msg, 'error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="home-collection-page-wrapper">
      {/* Page Header */}
      <section className="page-header-banner">
        <div className="container">
          <div className="banner-grid-tech">
            <div className="banner-text-col">
              <span className="section-subtitle banner-sub">Doorstep Healthcare</span>
              <h1 className="page-header-title">Home Sample Collection in Trichy</h1>
              <p className="page-header-desc">
                Get accurate diagnostic blood testing done in the comfort of your home. Free sample pickup for senior citizens and bookings above ₹500 across Tiruchirappalli city limits.
              </p>
            </div>
            <div className="banner-image-col">
              <img
                src="/images/home-collection.jpg"
                alt="Phlebotomist Home Sample Pickup Trichy"
                className="banner-tech-img"
              />
              <div className="banner-tech-caption">
                <strong>Certified Phlebotomy Team</strong>
                <span>Cold-Chain Insulated Kit &amp; Sterile Supplies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="section" style={{ paddingTop: '3rem' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          
          {confirmedBooking ? (
            <div className="hc-success-card">
              <div className="success-icon-wrap">
                <CheckCircle2 size={48} color="var(--color-secondary)" />
              </div>
              <h2 style={{ color: 'var(--color-primary-dark)', marginBottom: '0.5rem' }}>
                Home Collection Request Received!
              </h2>
              <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                Our dispatch supervisor will contact you to verify your location and coordinate our phlebotomist's arrival.
              </p>

              {/* Reference Box */}
              <div className="hc-ref-box">
                <div className="ref-line">
                  <span>Reference ID:</span>
                  <strong style={{ color: 'var(--color-secondary)', fontSize: '1.25rem' }}>
                    {confirmedBooking.referenceNumber}
                  </strong>
                </div>
                <div className="ref-details-grid">
                  <div><strong>Patient:</strong> {confirmedBooking.patientName}</div>
                  <div><strong>Mobile:</strong> {confirmedBooking.mobileNumber}</div>
                  <div><strong>Pickup Date:</strong> {confirmedBooking.preferredDate}</div>
                  <div><strong>Time Slot:</strong> {confirmedBooking.preferredSlot}</div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <strong>Address:</strong> {confirmedBooking.address}, {confirmedBooking.locality}
                  </div>
                  <div style={{ gridColumn: 'span 2' }}>
                    <strong>Selected Tests:</strong> {confirmedBooking.selectedTests.join(', ')}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href={`https://wa.me/919443152200?text=${encodeURIComponent(`Hello Doctor Diagnostics Trichy, my Home Collection Reference ID is ${confirmedBooking.referenceNumber} for ${confirmedBooking.patientName} on ${confirmedBooking.preferredDate}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-lg"
                >
                  <span>Notify via WhatsApp (+91 94431 52200)</span>
                  <ExternalLink size={18} />
                </a>
                <button
                  onClick={() => setConfirmedBooking(null)}
                  className="btn btn-outline btn-lg"
                >
                  Book Another Collection
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="hc-form-card">
              
              <div className="hc-form-intro">
                <h3 style={{ color: 'var(--color-primary)', marginBottom: '4px' }}>
                  Doorstep Phlebotomy Request Form
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  All equipment is single-use, sterile, and cold-chain transported to our Woriyur central laboratory.
                </p>
              </div>

              {/* Patient Details */}
              <div className="form-section-title">
                <User size={18} />
                <span>1. Patient Information</span>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleInputChange}
                    placeholder="e.g. S. Meenakshi"
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">10-Digit Mobile Number *</label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="e.g. 9443123456"
                    maxLength={10}
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Age *</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="e.g. 58"
                    min="1"
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Gender *</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="form-control"
                  >
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Email (Optional)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="For PDF report delivery"
                    className="form-control"
                  />
                </div>
              </div>

              {/* Address in Trichy */}
              <div className="form-section-title" style={{ marginTop: '1.5rem' }}>
                <MapPin size={18} />
                <span>2. Trichy Collection Address</span>
              </div>

              <div className="form-row">
                <div className="form-group" style={{ flex: 1.5 }}>
                  <label className="form-label">Trichy Locality / Area *</label>
                  <select
                    name="locality"
                    value={formData.locality}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                  >
                    {TRICHY_LOCALITIES.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="e.g. 620018"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Complete Street Address &amp; Door No. *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows="2"
                  placeholder="e.g. Door No. 24, 4th Cross West, Thillai Nagar, Trichy (Near Indian Bank)"
                  className="form-control"
                  required
                ></textarea>
              </div>

              {/* Date & Slot */}
              <div className="form-section-title" style={{ marginTop: '1.5rem' }}>
                <Clock size={18} />
                <span>3. Preferred Schedule</span>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Pickup Date *</label>
                  <input
                    type="date"
                    name="preferredDate"
                    min={todayStr}
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Preferred Time Window *</label>
                  <select
                    name="preferredSlot"
                    value={formData.preferredSlot}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                  >
                    {HC_TIME_SLOTS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.9rem' }}>
                  <input
                    type="checkbox"
                    name="fastingConfirmed"
                    checked={formData.fastingConfirmed}
                    onChange={handleInputChange}
                    style={{ width: '18px', height: '18px' }}
                  />
                  <span>Patient will maintain required 10-12 hours overnight fasting prior to morning sample draw.</span>
                </label>
              </div>

              {/* Tests Selection */}
              <div className="form-section-title" style={{ marginTop: '1.5rem' }}>
                <CheckCircle2 size={18} />
                <span>4. Select Tests or Health Package Required</span>
              </div>

              <div className="tests-selection-grid">
                {POPULAR_TESTS_CHECKLIST.map((tName) => {
                  const isChecked = formData.selectedTests.includes(tName);
                  return (
                    <label key={tName} className={`test-check-box ${isChecked ? 'checked' : ''}`}>
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleTestToggle(tName)}
                        style={{ display: 'none' }}
                      />
                      <div className="check-indicator">
                        {isChecked && <CheckCircle2 size={16} color="#ffffff" />}
                      </div>
                      <span className="test-check-name">{tName}</span>
                    </label>
                  );
                })}
              </div>

              {/* Special Instructions */}
              <div className="form-group" style={{ marginTop: '1.25rem' }}>
                <label className="form-label">Special Clinical or Entry Instructions (Optional)</label>
                <input
                  type="text"
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleInputChange}
                  placeholder="e.g. Senior citizen patient, difficult vein, call 10 mins before reaching"
                  className="form-control"
                />
              </div>

              {/* Consent checkbox */}
              <div className="form-group" style={{ marginTop: '1.5rem', background: '#F8FAFC', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', fontSize: '0.85rem', color: 'var(--color-text-body)' }}>
                  <input
                    type="checkbox"
                    name="consentAgreed"
                    checked={formData.consentAgreed}
                    onChange={handleInputChange}
                    style={{ width: '18px', height: '18px', marginTop: '2px' }}
                    required
                  />
                  <span>
                    I confirm that the address is within Trichy Corporation limits, and I consent to the visit of certified phlebotomists from Doctor Diagnostics Center for biological specimen collection.
                  </span>
                </label>
              </div>

              <div style={{ marginTop: '2rem' }}>
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-secondary btn-lg"
                  style={{ width: '100%' }}
                >
                  <Home size={20} />
                  <span>{submitting ? 'Submitting Request...' : 'Confirm Home Collection Request'}</span>
                </button>
              </div>

            </form>
          )}

        </div>
      </section>

      <style>{`
        .page-header-banner {
          background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
          color: #ffffff;
          padding: 3.5rem 0;
        }
        .banner-grid-tech {
          display: grid;
          grid-template-columns: 1.25fr 0.95fr;
          gap: 2.5rem;
          align-items: center;
        }
        .banner-sub {
          color: #5EEAD4;
        }
        .page-header-title {
          font-size: clamp(2rem, 3.2vw, 2.75rem);
          color: #ffffff;
          margin-bottom: 0.5rem;
        }
        .page-header-desc {
          color: #CBD5E1;
          font-size: 1.05rem;
          line-height: 1.6;
        }
        .banner-image-col {
          position: relative;
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          border: 1px solid rgba(255, 255, 255, 0.2);
          height: 240px;
        }
        .banner-tech-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .banner-tech-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(6, 42, 74, 0.92) 0%, rgba(6, 42, 74, 0) 100%);
          padding: 20px 14px 10px;
          display: flex;
          flex-direction: column;
        }
        .banner-tech-caption strong {
          font-size: 0.85rem;
          color: #5EEAD4;
        }
        .banner-tech-caption span {
          font-size: 0.75rem;
          color: #E2E8F0;
        }
        .hc-form-card, .hc-success-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-card);
          padding: 2.5rem;
        }
        .hc-form-intro {
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--color-border);
          margin-bottom: 1.75rem;
        }
        .form-section-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 1.25rem;
        }
        .tests-selection-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }
        .test-check-box {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          background: #ffffff;
          cursor: pointer;
          transition: all var(--transition-fast);
        }
        .test-check-box:hover {
          border-color: var(--color-secondary);
        }
        .test-check-box.checked {
          background: var(--color-secondary-light);
          border-color: var(--color-secondary);
        }
        .check-indicator {
          width: 20px;
          height: 20px;
          border-radius: 4px;
          border: 1.5px solid #CBD5E1;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          flex-shrink: 0;
        }
        .test-check-box.checked .check-indicator {
          background: var(--color-secondary);
          border-color: var(--color-secondary);
        }
        .test-check-name {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--color-text-main);
        }
        .hc-success-card {
          text-align: center;
        }
        .success-icon-wrap {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: var(--color-secondary-light);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem;
        }
        .hc-ref-box {
          background: var(--color-bg);
          border: 2px dashed var(--color-secondary);
          border-radius: var(--radius-lg);
          padding: 1.5rem;
          text-align: left;
          margin-bottom: 2rem;
        }
        .ref-line {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 12px;
          border-bottom: 1px solid #E2E8F0;
          margin-bottom: 12px;
        }
        .ref-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          font-size: 0.9rem;
        }

        @media (max-width: 640px) {
          .hc-form-card {
            padding: 1.75rem 1.25rem;
          }
          .tests-selection-grid {
            grid-template-columns: 1fr;
          }
          .ref-details-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeCollectionPage;
