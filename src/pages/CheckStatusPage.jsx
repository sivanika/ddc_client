import React, { useState } from 'react';
import { 
  Search, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  Calendar, 
  MapPin, 
  UserCheck, 
  ExternalLink,
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import api from '../services/api';
import { useToast } from '../context/ToastContext';

const STATUS_STEPS = [
  { key: 'pending', label: 'Booking Received', desc: 'Received in lab intake queue' },
  { key: 'confirmed', label: 'Confirmed & Slot Reserved', desc: 'Staff verified slot availability' },
  { key: 'in_progress', label: 'In Lab Processing', desc: 'Sample collected & undergoing analysis' },
  { key: 'completed', label: 'Report Verified & Ready', desc: 'Signed off by pathologist' }
];

const CheckStatusPage = () => {
  const { addToast } = useToast();
  const [reference, setReference] = useState('');
  const [mobile, setMobile] = useState('');
  const [loading, setLoading] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const [searched, setSearched] = useState(false);

  const handleTrack = async (e) => {
    e.preventDefault();

    if (!reference.trim()) {
      addToast('Please enter your booking reference number', 'error');
      return;
    }

    setLoading(true);
    setSearched(true);
    try {
      const queryParam = mobile ? `?mobile=${encodeURIComponent(mobile.trim())}` : '';
      const res = await api.get(`/bookings/status/${encodeURIComponent(reference.trim())}${queryParam}`);
      if (res.data.success) {
        setBookingData(res.data.data);
      }
    } catch (err) {
      setBookingData(null);
      const msg = err.response?.data?.message || 'No booking record found for this reference.';
      addToast(msg, 'error');
    } finally {
      setLoading(false);
    }
  };

  const getStepStatus = (stepKey, currentStatus) => {
    const order = ['pending', 'confirmed', 'in_progress', 'completed'];
    const currentIndex = order.indexOf(currentStatus);
    const stepIndex = order.indexOf(stepKey);

    if (currentStatus === 'cancelled') return 'cancelled';
    if (stepIndex < currentIndex) return 'completed';
    if (stepIndex === currentIndex) return 'active';
    return 'upcoming';
  };

  return (
    <div className="check-status-page-wrapper">
      {/* Banner */}
      <section className="page-header-banner">
        <div className="container">
          <span className="section-subtitle">Real-Time Tracking</span>
          <h1 className="page-header-title">Check Booking &amp; Sample Status</h1>
          <p className="page-header-desc">
            Track the status of your diagnostic appointment or home sample collection using your reference code.
          </p>
        </div>
      </section>

      {/* Lookup Container */}
      <section className="section" style={{ paddingTop: '3rem' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          
          <div className="status-lookup-card">
            <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>
              Enter Booking Reference
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
              Your reference number was generated upon booking (e.g. <code>DDC-2026-10821</code>).
            </p>

            <form onSubmit={handleTrack}>
              <div className="form-row">
                <div className="form-group" style={{ flex: 1.5 }}>
                  <label className="form-label">Booking Reference Number *</label>
                  <input
                    type="text"
                    value={reference}
                    onChange={(e) => setReference(e.target.value.toUpperCase())}
                    placeholder="e.g. DDC-2026-10821"
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">Registered Mobile (Optional)</label>
                  <input
                    type="tel"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="For security verification"
                    className="form-control"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '0.5rem' }}
              >
                <Search size={18} />
                <span>{loading ? 'Verifying Reference...' : 'Track Booking Status'}</span>
              </button>
            </form>
          </div>

          {/* Tracking Result View */}
          {bookingData && (
            <div className="status-result-card">
              <div className="result-header">
                <div>
                  <span className="badge badge-primary">{bookingData.bookingReference}</span>
                  <h3 style={{ color: 'var(--color-primary-dark)', marginTop: '4px' }}>
                    {bookingData.itemName}
                  </h3>
                </div>
                <div>
                  <span className={`badge ${
                    bookingData.status === 'confirmed' ? 'badge-success' :
                    bookingData.status === 'completed' ? 'badge-primary' :
                    bookingData.status === 'cancelled' ? 'badge-danger' : 'badge-warning'
                  }`} style={{ fontSize: '0.85rem', padding: '6px 14px' }}>
                    Status: {bookingData.status.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Progress Timeline */}
              <div className="timeline-container">
                {STATUS_STEPS.map((step, idx) => {
                  const state = getStepStatus(step.key, bookingData.status);
                  return (
                    <div key={step.key} className={`timeline-step ${state}`}>
                      <div className="step-circle">
                        {state === 'completed' ? <CheckCircle2 size={18} /> : <span>{idx + 1}</span>}
                      </div>
                      <div className="step-content">
                        <div className="step-title">{step.label}</div>
                        <div className="step-desc">{step.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Booking Summary */}
              <div className="result-details-box">
                <div className="res-detail-item">
                  <strong>Patient Name:</strong>
                  <span>{bookingData.patientName}</span>
                </div>
                <div className="res-detail-item">
                  <strong>Appointment Date:</strong>
                  <span>{bookingData.appointmentDate}</span>
                </div>
                <div className="res-detail-item">
                  <strong>Reserved Slot:</strong>
                  <span>{bookingData.timeSlot}</span>
                </div>
                <div className="res-detail-item">
                  <strong>Service Mode:</strong>
                  <span>{bookingData.bookingType === 'home_collection' ? 'Home Sample Pickup' : 'Center Lab Visit'}</span>
                </div>
                <div className="res-detail-item">
                  <strong>Location:</strong>
                  <span>{bookingData.location}</span>
                </div>
                <div className="res-detail-item">
                  <strong>Payment Status:</strong>
                  <span>
                    {bookingData.paymentStatus === 'paid' ? (
                      <span className="badge badge-success" style={{ fontSize: '0.75rem' }}>
                        ✓ PAID ONLINE ({bookingData.paymentMethod?.replace('dummy_', '').toUpperCase() || 'ONLINE'})
                      </span>
                    ) : (
                      <span className="badge badge-warning" style={{ fontSize: '0.75rem' }}>
                        PAY AT LAB / PICKUP
                      </span>
                    )}
                  </span>
                </div>
                {bookingData.transactionId && (
                  <div className="res-detail-item">
                    <strong>Transaction ID:</strong>
                    <code>{bookingData.transactionId}</code>
                  </div>
                )}
                {bookingData.maskedMobile && (
                  <div className="res-detail-item">
                    <strong>Patient Contact:</strong>
                    <span>{bookingData.maskedMobile}</span>
                  </div>
                )}
              </div>

              {/* Status History notes */}
              {bookingData.statusHistory && bookingData.statusHistory.length > 0 && (
                <div style={{ marginTop: '1.25rem', background: '#F8FAFC', padding: '1rem', borderRadius: '8px' }}>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--color-text-main)', marginBottom: '8px' }}>
                    Status Updates History:
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.825rem', color: 'var(--color-text-muted)' }}>
                    {bookingData.statusHistory.map((h, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Clock size={13} color="var(--color-primary)" />
                        <span><strong>{h.status.toUpperCase()}:</strong> {h.note}</span>
                        <span style={{ fontSize: '0.75rem', color: '#94A3B8', marginLeft: 'auto' }}>
                          {new Date(h.changedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* WhatsApp Support CTA */}
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <a
                  href={`https://wa.me/919443152200?text=${encodeURIComponent(`Hello Doctor Diagnostics Trichy, I would like to check report status for Reference ${bookingData.bookingReference}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                >
                  <span>Chat with Lab Desk on WhatsApp</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          )}

          {searched && !loading && !bookingData && (
            <div className="empty-status-state">
              <AlertCircle size={40} color="#EF4444" />
              <h3>No Record Found</h3>
              <p>
                We could not locate any booking with reference "<strong>{reference}</strong>". Please verify your booking reference code or contact our reception helpline.
              </p>
              <a href="tel:+919443100000" className="btn btn-outline btn-sm">
                Call Lab Desk: +91 94431 00000
              </a>
            </div>
          )}

        </div>
      </section>

      <style>{`
        .status-lookup-card, .status-result-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-card);
          padding: 2.25rem;
          margin-bottom: 2rem;
        }
        .result-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--color-border);
          margin-bottom: 1.75rem;
          flex-wrap: wrap;
          gap: 10px;
        }
        .timeline-container {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
          position: relative;
          padding-left: 12px;
        }
        .timeline-step {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          position: relative;
        }
        .step-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 700;
          flex-shrink: 0;
          background: #E2E8F0;
          color: #64748B;
        }
        .timeline-step.completed .step-circle {
          background: var(--color-success);
          color: #ffffff;
        }
        .timeline-step.active .step-circle {
          background: var(--color-primary);
          color: #ffffff;
          box-shadow: 0 0 0 4px rgba(11, 71, 120, 0.2);
        }
        .step-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--color-text-main);
        }
        .step-desc {
          font-size: 0.825rem;
          color: var(--color-text-muted);
        }
        .result-details-box {
          background: var(--color-bg);
          border-radius: var(--radius-md);
          padding: 1.25rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          font-size: 0.875rem;
        }
        .res-detail-item {
          display: flex;
          flex-direction: column;
        }
        .res-detail-item strong {
          color: var(--color-text-muted);
          font-size: 0.775rem;
          text-transform: uppercase;
        }
        .res-detail-item span {
          color: var(--color-primary-dark);
          font-weight: 600;
        }
        .empty-status-state {
          background: #ffffff;
          border-radius: var(--radius-xl);
          border: 1px solid var(--color-border);
          padding: 3rem 1.5rem;
          text-align: center;
        }
        .empty-status-state h3 {
          margin: 1rem 0 0.5rem;
          color: var(--color-text-main);
        }
        .empty-status-state p {
          color: var(--color-text-muted);
          font-size: 0.9rem;
          max-width: 480px;
          margin: 0 auto 1.5rem;
        }

        @media (max-width: 640px) {
          .result-details-box {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default CheckStatusPage;
