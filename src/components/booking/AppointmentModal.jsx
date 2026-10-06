import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  Mail, 
  CheckCircle2, 
  AlertCircle, 
  Home, 
  Building2,
  FileText,
  ShieldCheck,
  ExternalLink,
  CreditCard,
  Smartphone,
  Building,
  Banknote,
  Lock,
  Printer,
  Check,
  ArrowRight
} from 'lucide-react';
import api from '../../services/api';
import { useToast } from '../../context/ToastContext';

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

const TIME_SLOTS = [
  '06:30 AM - 07:30 AM',
  '07:30 AM - 08:30 AM',
  '08:30 AM - 09:30 AM',
  '09:30 AM - 10:30 AM',
  '10:30 AM - 11:30 AM',
  '11:30 AM - 12:30 PM',
  '04:30 PM - 05:30 PM',
  '05:30 PM - 06:30 PM',
  '06:30 PM - 07:30 PM',
  '07:30 PM - 08:30 PM'
];

const NET_BANKS = [
  'State Bank of India (SBI)',
  'HDFC Bank',
  'ICICI Bank',
  'Axis Bank',
  'Canara Bank',
  'Indian Bank',
  'Bank of Baroda'
];

const AppointmentModal = ({ isOpen, onClose, preselectedItem = null }) => {
  const { addToast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);
  const [slotChecking, setSlotChecking] = useState(false);
  const [slotAvailability, setSlotAvailability] = useState(null);

  // Available tests and packages for dropdown selection
  const [catalogItems, setCatalogItems] = useState({ tests: [], packages: [] });

  // Get tomorrow's date or today
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    bookingType: 'lab_visit', // 'lab_visit' | 'home_collection'
    itemType: 'package', // 'test' | 'package'
    itemId: '',
    itemName: 'Master Health Checkup (Comprehensive)',
    price: 1999,
    patientName: '',
    mobileNumber: '',
    email: '',
    age: '',
    gender: 'male',
    appointmentDate: todayStr,
    timeSlot: '07:30 AM - 08:30 AM',
    location: 'Salai Road, Thillai Nagar',
    address: '',
    locality: 'Thillai Nagar',
    pincode: '620018',
    specialInstructions: '',
    // Dummy Payment Fields
    paymentMethod: 'pay_at_lab' // 'pay_at_lab' | 'dummy_upi' | 'dummy_card' | 'dummy_netbanking'
  });

  // Dummy Payment Interactive Form State
  const [dummyUpiId, setDummyUpiId] = useState('patient@okhdfcbank');
  const [dummyCardData, setDummyCardData] = useState({
    cardNumber: '4532 8192 3847 9920',
    cardHolder: 'SENTHIL NATHAN',
    expiry: '08/29',
    cvv: '821'
  });
  const [dummyBank, setDummyBank] = useState(NET_BANKS[0]);
  
  // Payment Simulation Gateway Modal State
  const [simulatingPayment, setSimulatingPayment] = useState(false);
  const [simulationStep, setSimulationStep] = useState(1); // 1: connecting, 2: authorizing, 3: success

  // Load catalog for selector
  useEffect(() => {
    if (!isOpen) return;

    const fetchCatalog = async () => {
      try {
        const [testsRes, pkgsRes] = await Promise.all([
          api.get('/tests?active=true'),
          api.get('/packages?active=true')
        ]);
        if (testsRes.data.success && pkgsRes.data.success) {
          setCatalogItems({
            tests: testsRes.data.data,
            packages: pkgsRes.data.data
          });
        }
      } catch (err) {
        console.error('Error fetching catalog for modal:', err);
      }
    };
    fetchCatalog();
  }, [isOpen]);

  // Handle preselected item
  useEffect(() => {
    if (preselectedItem) {
      setFormData((prev) => ({
        ...prev,
        itemType: preselectedItem.type || (preselectedItem.includedTests ? 'package' : 'test'),
        itemId: preselectedItem._id || '',
        itemName: preselectedItem.name || prev.itemName,
        price: preselectedItem.price || prev.price,
        bookingType: preselectedItem.homeCollectionAvailable === false ? 'lab_visit' : prev.bookingType
      }));
    }
  }, [preselectedItem]);

  // Check slot availability whenever date or slot changes
  useEffect(() => {
    if (!formData.appointmentDate || !formData.timeSlot) return;

    let isMounted = true;
    const checkAvailability = async () => {
      setSlotChecking(true);
      try {
        const res = await api.get(`/bookings/check-slot?date=${formData.appointmentDate}&slot=${encodeURIComponent(formData.timeSlot)}`);
        if (isMounted && res.data.success) {
          setSlotAvailability(res.data.data);
        }
      } catch (err) {
        console.error('Slot check error:', err);
      } finally {
        if (isMounted) setSlotChecking(false);
      }
    };

    checkAvailability();
    return () => { isMounted = false; };
  }, [formData.appointmentDate, formData.timeSlot]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleItemSelect = (e) => {
    const selectedId = e.target.value;
    if (formData.itemType === 'package') {
      const pkg = catalogItems.packages.find((p) => p._id === selectedId);
      if (pkg) {
        setFormData((prev) => ({
          ...prev,
          itemId: pkg._id,
          itemName: pkg.name,
          price: pkg.price
        }));
      }
    } else {
      const test = catalogItems.tests.find((t) => t._id === selectedId);
      if (test) {
        setFormData((prev) => ({
          ...prev,
          itemId: test._id,
          itemName: test.name,
          price: test.price
        }));
      }
    }
  };

  const validateBookingForm = () => {
    if (!formData.patientName.trim()) {
      addToast('Please enter patient full name', 'error');
      return false;
    }
    if (!formData.mobileNumber.trim() || formData.mobileNumber.length < 10) {
      addToast('Please enter a valid 10-digit mobile number', 'error');
      return false;
    }
    if (!formData.age || Number(formData.age) <= 0) {
      addToast('Please enter patient age', 'error');
      return false;
    }
    if (formData.bookingType === 'home_collection' && (!formData.address.trim() || !formData.locality)) {
      addToast('Please provide your complete address and Trichy locality for home sample pickup', 'error');
      return false;
    }
    if (slotAvailability && !slotAvailability.available) {
      addToast('Selected slot is full. Please choose another time slot.', 'error');
      return false;
    }

    // Dummy payment validations
    if (formData.paymentMethod === 'dummy_upi' && !dummyUpiId.trim()) {
      addToast('Please enter a demo UPI ID (e.g. yourname@upi)', 'error');
      return false;
    }
    if (formData.paymentMethod === 'dummy_card' && (!dummyCardData.cardNumber || !dummyCardData.expiry || !dummyCardData.cvv)) {
      addToast('Please complete the demo card fields', 'error');
      return false;
    }

    return true;
  };

  // Perform booking creation
  const executeBooking = async (paymentDetails = {}) => {
    setSubmitting(true);
    try {
      const payload = {
        ...formData,
        price: Number(formData.price),
        ...paymentDetails
      };

      const res = await api.post('/bookings', payload);
      if (res.data.success) {
        setConfirmedBooking(res.data.data);
        if (paymentDetails.paymentStatus === 'paid') {
          addToast(`Demo Payment Authorized! Booking confirmed (${res.data.data.bookingReference})`, 'success');
        } else {
          addToast(`Appointment booked successfully! (${res.data.data.bookingReference})`, 'success');
        }
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Failed to submit booking. Please try again.';
      addToast(msg, 'error');
    } finally {
      setSubmitting(false);
      setSimulatingPayment(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateBookingForm()) return;

    // If payment method is Pay At Lab / Pickup, book immediately without payment gateway simulation
    if (formData.paymentMethod === 'pay_at_lab') {
      await executeBooking({
        paymentMethod: 'pay_at_lab',
        paymentStatus: 'pending',
        transactionId: 'PAY-AT-LAB',
        paidAmount: 0
      });
      return;
    }

    // Otherwise, launch realistic interactive simulated gateway
    setSimulatingPayment(true);
    setSimulationStep(1);

    // Step 1 -> Step 2
    setTimeout(() => {
      setSimulationStep(2);
    }, 1100);

    // Step 2 -> Step 3 & finalize booking
    setTimeout(async () => {
      setSimulationStep(3);
      const generatedTxnId = `TXN-${formData.paymentMethod.replace('dummy_', '').toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`;

      setTimeout(async () => {
        await executeBooking({
          paymentMethod: formData.paymentMethod,
          paymentStatus: 'paid',
          transactionId: generatedTxnId,
          paidAmount: Number(formData.price)
        });
      }, 700);
    }, 2200);
  };

  const handleResetAndClose = () => {
    setConfirmedBooking(null);
    setSimulatingPayment(false);
    onClose();
  };

  const handleFillDemoCard = () => {
    setDummyCardData({
      cardNumber: '4532 8192 3847 9920',
      cardHolder: (formData.patientName || 'SENTHIL NATHAN').toUpperCase(),
      expiry: '11/29',
      cvv: '742'
    });
    addToast('Demo test card details filled!', 'info');
  };

  return (
    <div className="modal-overlay" onClick={handleResetAndClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '720px' }}>
        
        {/* Header */}
        <div className="modal-header">
          <div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>{confirmedBooking ? 'Booking & Payment Confirmed!' : 'Book Diagnostic Appointment'}</span>
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
              Doctor Diagnostics Center • Salai Road, Thillai Nagar, Trichy
            </p>
          </div>
          <button 
            onClick={handleResetAndClose}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748B' }}
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Confirmation Screen */}
        {confirmedBooking ? (
          <div className="modal-body" style={{ textAlign: 'center', padding: '1.75rem 1.5rem' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'var(--color-success-bg)',
              color: 'var(--color-success)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem'
            }}>
              <CheckCircle2 size={38} />
            </div>

            <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary-dark)', marginBottom: '0.4rem' }}>
              Appointment Reserved Successfully!
            </h3>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
              Your laboratory booking has been registered. You can track this booking at any time with the reference number.
            </p>

            {/* Reference & Payment Receipt Card */}
            <div style={{
              background: '#F8FAFC',
              border: '1.5px solid #CBD5E1',
              borderRadius: '12px',
              padding: '1.25rem',
              marginBottom: '1.25rem',
              textAlign: 'left'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', borderBottom: '1px solid #E2E8F0', paddingBottom: '10px' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Booking Reference
                  </span>
                  <div style={{ fontWeight: 800, color: 'var(--color-primary)', fontSize: '1.2rem', letterSpacing: '0.5px' }}>
                    {confirmedBooking.bookingReference}
                  </div>
                </div>

                {/* Payment Badge */}
                <div style={{ textAlign: 'right' }}>
                  {confirmedBooking.paymentStatus === 'paid' ? (
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      background: '#DCFCE7',
                      color: '#15803D',
                      fontWeight: 700,
                      fontSize: '0.8125rem',
                      padding: '5px 12px',
                      borderRadius: '9999px',
                      border: '1px solid #86EFAC'
                    }}>
                      <Check size={14} />
                      <span>PAID ONLINE (DEMO)</span>
                    </span>
                  ) : (
                    <span style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      background: '#FEF3C7',
                      color: '#B45309',
                      fontWeight: 700,
                      fontSize: '0.8125rem',
                      padding: '5px 12px',
                      borderRadius: '9999px',
                      border: '1px solid #FCD34D'
                    }}>
                      <Clock size={14} />
                      <span>PAY AT LAB / PICKUP</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Details Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.875rem' }}>
                <div><strong>Patient:</strong> {confirmedBooking.patientName}</div>
                <div><strong>Mobile:</strong> {confirmedBooking.mobileNumber}</div>
                <div><strong>Service:</strong> {confirmedBooking.itemName}</div>
                <div><strong>Total Amount:</strong> ₹{confirmedBooking.price}</div>
                <div><strong>Date &amp; Slot:</strong> {confirmedBooking.appointmentDate} ({confirmedBooking.timeSlot})</div>
                <div>
                  <strong>Payment Method:</strong>{' '}
                  {confirmedBooking.paymentMethod === 'dummy_upi' ? 'UPI (Demo)' :
                   confirmedBooking.paymentMethod === 'dummy_card' ? 'Card (Demo)' :
                   confirmedBooking.paymentMethod === 'dummy_netbanking' ? 'Net Banking (Demo)' :
                   'Pay at Reception / Pickup'}
                </div>
                {confirmedBooking.transactionId && (
                  <div style={{ gridColumn: 'span 2', background: '#FFFFFF', padding: '6px 10px', borderRadius: '6px', border: '1px solid #E2E8F0', marginTop: '4px', fontSize: '0.8125rem' }}>
                    <span style={{ color: 'var(--color-text-muted)' }}>Demo Transaction ID: </span>
                    <code style={{ color: 'var(--color-primary)', fontWeight: 700 }}>{confirmedBooking.transactionId}</code>
                    <span style={{ float: 'right', color: '#16A34A', fontWeight: 600 }}>Amount Settled: ₹{confirmedBooking.price}</span>
                  </div>
                )}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={`https://wa.me/919443100000?text=${encodeURIComponent(`Hello Doctor Diagnostics, my booking reference is ${confirmedBooking.bookingReference} for ${confirmedBooking.itemName} on ${confirmedBooking.appointmentDate}. Payment status: ${confirmedBooking.paymentStatus === 'paid' ? `Paid online (Txn: ${confirmedBooking.transactionId})` : 'Pay at center'}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <span>Notify Lab via WhatsApp</span>
                <ExternalLink size={15} />
              </a>
              <button 
                type="button" 
                onClick={() => window.print()} 
                className="btn btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <Printer size={15} />
                <span>Print Receipt</span>
              </button>
              <button onClick={handleResetAndClose} className="btn btn-primary">
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit}>
            <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto', padding: '1.25rem 1.5rem' }}>
              
              {/* Step 1: Visit vs Home Collection */}
              <div className="form-group">
                <label className="form-label" style={{ fontWeight: 700 }}>Service Type</label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, bookingType: 'lab_visit' })}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: formData.bookingType === 'lab_visit' ? '2px solid var(--color-primary)' : '1px solid var(--color-border)',
                      background: formData.bookingType === 'lab_visit' ? 'var(--color-primary-light)' : '#ffffff',
                      color: formData.bookingType === 'lab_visit' ? 'var(--color-primary-dark)' : 'var(--color-text-main)',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    <Building2 size={18} color="var(--color-primary)" />
                    <span>Visit Lab (Thillai Nagar)</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, bookingType: 'home_collection' })}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: formData.bookingType === 'home_collection' ? '2px solid var(--color-secondary)' : '1px solid var(--color-border)',
                      background: formData.bookingType === 'home_collection' ? 'var(--color-secondary-light)' : '#ffffff',
                      color: formData.bookingType === 'home_collection' ? 'var(--color-secondary)' : 'var(--color-text-main)',
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    <Home size={18} color="var(--color-secondary)" />
                    <span>Home Sample Pickup</span>
                  </button>
                </div>
              </div>

              {/* Step 2: Selected Test / Package */}
              <div className="form-row">
                <div className="form-group" style={{ flex: 1 }}>
                  <label className="form-label">Category</label>
                  <select
                    className="form-control"
                    value={formData.itemType}
                    onChange={(e) => {
                      const newType = e.target.value;
                      const firstItem = newType === 'package' ? catalogItems.packages[0] : catalogItems.tests[0];
                      setFormData({
                        ...formData,
                        itemType: newType,
                        itemId: firstItem?._id || '',
                        itemName: firstItem?.name || '',
                        price: firstItem?.price || 0
                      });
                    }}
                  >
                    <option value="package">Health Package</option>
                    <option value="test">Individual Diagnostic Test</option>
                  </select>
                </div>

                <div className="form-group" style={{ flex: 2 }}>
                  <label className="form-label">Select Investigation / Package</label>
                  <select
                    className="form-control"
                    value={formData.itemId}
                    onChange={handleItemSelect}
                  >
                    {formData.itemType === 'package'
                      ? catalogItems.packages.map((pkg) => (
                          <option key={pkg._id} value={pkg._id}>
                            {pkg.name} — ₹{pkg.price} (MRP: ₹{pkg.mrp})
                          </option>
                        ))
                      : catalogItems.tests.map((test) => (
                          <option key={test._id} value={test._id}>
                            {test.name} — ₹{test.price}
                          </option>
                        ))}
                  </select>
                </div>
              </div>

              {/* Step 3: Date & Slot Picker with live capacity check */}
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Preferred Date *</label>
                  <input
                    type="date"
                    name="appointmentDate"
                    min={todayStr}
                    value={formData.appointmentDate}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Time Slot *</label>
                  <select
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleInputChange}
                    className="form-control"
                    required
                  >
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                  {/* Slot availability notice */}
                  <div style={{ marginTop: '4px', fontSize: '0.78rem' }}>
                    {slotChecking ? (
                      <span style={{ color: 'var(--color-text-muted)' }}>Checking capacity...</span>
                    ) : slotAvailability ? (
                      slotAvailability.available ? (
                        <span style={{ color: 'var(--color-success)', fontWeight: 600 }}>
                          ✓ Available ({slotAvailability.remainingSlots} slots remaining)
                        </span>
                      ) : (
                        <span style={{ color: 'var(--color-danger)', fontWeight: 600 }}>
                          ✕ Slot full. Please choose another time.
                        </span>
                      )
                    ) : null}
                  </div>
                </div>
              </div>

              {/* Step 4: Patient Info */}
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Patient Full Name *</label>
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleInputChange}
                    placeholder="e.g. Senthil Nathan"
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
                    placeholder="e.g. 9842412345"
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
                    placeholder="e.g. 42"
                    min="1"
                    max="120"
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
                    <option value="male">Male</option>
                    <option value="female">Female</option>
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
                    placeholder="For report PDF delivery"
                    className="form-control"
                  />
                </div>
              </div>

              {/* Step 5: Address for Home Sample Pickup */}
              {formData.bookingType === 'home_collection' && (
                <div style={{
                  background: 'var(--color-secondary-light)',
                  padding: '1rem',
                  borderRadius: '10px',
                  marginBottom: '1rem',
                  border: '1px solid rgba(8, 127, 115, 0.2)'
                }}>
                  <div style={{ fontWeight: 600, color: 'var(--color-secondary)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={18} />
                    <span>Home Sample Pickup Address in Trichy</span>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Trichy Locality *</label>
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

                    <div className="form-group">
                      <label className="form-label">Pincode</label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="e.g. 620018"
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginBottom: 0 }}>
                    <label className="form-label">Complete Door/Street Address *</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows="2"
                      placeholder="e.g. No. 15, 2nd Cross, Thillai Nagar West, Trichy"
                      className="form-control"
                      required
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Step 6: Payment Method Section (Dummy Payment) */}
              <div style={{
                background: '#FFFFFF',
                border: '1.5px solid #CBD5E1',
                borderRadius: '12px',
                padding: '1.25rem',
                marginTop: '1rem',
                marginBottom: '1rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '6px',
                      background: 'var(--color-primary-light)',
                      color: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <CreditCard size={16} />
                    </div>
                    <span style={{ fontWeight: 700, color: 'var(--color-primary-dark)', fontSize: '0.95rem' }}>
                      Payment Method
                    </span>
                  </div>
                  <span style={{ fontSize: '0.725rem', color: '#047857', background: '#D1FAE5', padding: '3px 8px', borderRadius: '4px', fontWeight: 600 }}>
                    🔒 Simulated Demo Gateway
                  </span>
                </div>

                {/* Payment Option Pills */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '1rem' }}>
                  
                  {/* Option 1: Pay at Lab */}
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'pay_at_lab' })}
                    style={{
                      padding: '10px 8px',
                      borderRadius: '8px',
                      border: formData.paymentMethod === 'pay_at_lab' ? '2px solid var(--color-primary)' : '1px solid #CBD5E1',
                      background: formData.paymentMethod === 'pay_at_lab' ? 'var(--color-primary-light)' : '#F8FAFC',
                      color: formData.paymentMethod === 'pay_at_lab' ? 'var(--color-primary-dark)' : '#475569',
                      fontSize: '0.775rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px',
                      textAlign: 'center'
                    }}
                  >
                    <Banknote size={18} color={formData.paymentMethod === 'pay_at_lab' ? 'var(--color-primary)' : '#64748B'} />
                    <span>Pay at Lab</span>
                  </button>

                  {/* Option 2: Dummy UPI */}
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'dummy_upi' })}
                    style={{
                      padding: '10px 8px',
                      borderRadius: '8px',
                      border: formData.paymentMethod === 'dummy_upi' ? '2px solid var(--color-primary)' : '1px solid #CBD5E1',
                      background: formData.paymentMethod === 'dummy_upi' ? 'var(--color-primary-light)' : '#F8FAFC',
                      color: formData.paymentMethod === 'dummy_upi' ? 'var(--color-primary-dark)' : '#475569',
                      fontSize: '0.775rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px',
                      textAlign: 'center'
                    }}
                  >
                    <Smartphone size={18} color={formData.paymentMethod === 'dummy_upi' ? 'var(--color-primary)' : '#64748B'} />
                    <span>Demo UPI</span>
                  </button>

                  {/* Option 3: Dummy Card */}
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'dummy_card' })}
                    style={{
                      padding: '10px 8px',
                      borderRadius: '8px',
                      border: formData.paymentMethod === 'dummy_card' ? '2px solid var(--color-primary)' : '1px solid #CBD5E1',
                      background: formData.paymentMethod === 'dummy_card' ? 'var(--color-primary-light)' : '#F8FAFC',
                      color: formData.paymentMethod === 'dummy_card' ? 'var(--color-primary-dark)' : '#475569',
                      fontSize: '0.775rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px',
                      textAlign: 'center'
                    }}
                  >
                    <CreditCard size={18} color={formData.paymentMethod === 'dummy_card' ? 'var(--color-primary)' : '#64748B'} />
                    <span>Demo Card</span>
                  </button>

                  {/* Option 4: Dummy Net Banking */}
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'dummy_netbanking' })}
                    style={{
                      padding: '10px 8px',
                      borderRadius: '8px',
                      border: formData.paymentMethod === 'dummy_netbanking' ? '2px solid var(--color-primary)' : '1px solid #CBD5E1',
                      background: formData.paymentMethod === 'dummy_netbanking' ? 'var(--color-primary-light)' : '#F8FAFC',
                      color: formData.paymentMethod === 'dummy_netbanking' ? 'var(--color-primary-dark)' : '#475569',
                      fontSize: '0.775rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px',
                      textAlign: 'center'
                    }}
                  >
                    <Building size={18} color={formData.paymentMethod === 'dummy_netbanking' ? 'var(--color-primary)' : '#64748B'} />
                    <span>Net Banking</span>
                  </button>

                </div>

                {/* Sub-form based on selection */}
                {formData.paymentMethod === 'pay_at_lab' && (
                  <div style={{ background: '#F8FAFC', padding: '10px 14px', borderRadius: '8px', fontSize: '0.825rem', color: '#475569' }}>
                    <p style={{ margin: 0 }}>
                      ✓ <strong>No Advance Payment Required.</strong> Pay ₹{formData.price} at our Thillai Nagar center reception or in cash/UPI to our phlebotomist during home sample pickup.
                    </p>
                  </div>
                )}

                {formData.paymentMethod === 'dummy_upi' && (
                  <div style={{ background: '#F0FDF4', padding: '12px 14px', borderRadius: '8px', border: '1px solid #BBF7D0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#166534' }}>
                        Simulated Instant UPI Payment (Google Pay / PhonePe / Paytm)
                      </span>
                      <span style={{ fontSize: '0.7rem', color: '#15803D' }}>Zero real charge</span>
                    </div>

                    <div style={{ display: 'flex', gap: '8px' }}>
                      <input
                        type="text"
                        value={dummyUpiId}
                        onChange={(e) => setDummyUpiId(e.target.value)}
                        placeholder="e.g. yourname@okhdfcbank"
                        className="form-control"
                        style={{ fontSize: '0.85rem' }}
                      />
                      <button
                        type="button"
                        onClick={() => setDummyUpiId('demo.patient@okaxis')}
                        className="btn btn-outline btn-sm"
                        style={{ whiteSpace: 'nowrap', fontSize: '0.75rem' }}
                      >
                        Auto-Fill
                      </button>
                    </div>

                    <p style={{ margin: '6px 0 0', fontSize: '0.725rem', color: '#15803D' }}>
                      💡 A simulated UPI approval prompt will verify instantly upon booking submission.
                    </p>
                  </div>
                )}

                {formData.paymentMethod === 'dummy_card' && (
                  <div style={{ background: '#EFF6FF', padding: '12px 14px', borderRadius: '8px', border: '1px solid #BFDBFE' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#1E40AF' }}>
                        Demo Credit / Debit Card Gateway
                      </span>
                      <button
                        type="button"
                        onClick={handleFillDemoCard}
                        style={{
                          background: '#DBEAFE',
                          border: 'none',
                          color: '#1D4ED8',
                          fontSize: '0.725rem',
                          fontWeight: 700,
                          padding: '3px 8px',
                          borderRadius: '4px',
                          cursor: 'pointer'
                        }}
                      >
                        ⚡ Fill Demo Card
                      </button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <input
                        type="text"
                        value={dummyCardData.cardNumber}
                        onChange={(e) => setDummyCardData({ ...dummyCardData, cardNumber: e.target.value })}
                        placeholder="Card Number (4532 •••• •••• ••••)"
                        className="form-control"
                        style={{ fontSize: '0.85rem' }}
                      />
                      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '8px' }}>
                        <input
                          type="text"
                          value={dummyCardData.cardHolder}
                          onChange={(e) => setDummyCardData({ ...dummyCardData, cardHolder: e.target.value })}
                          placeholder="Cardholder Name"
                          className="form-control"
                          style={{ fontSize: '0.825rem' }}
                        />
                        <input
                          type="text"
                          value={dummyCardData.expiry}
                          onChange={(e) => setDummyCardData({ ...dummyCardData, expiry: e.target.value })}
                          placeholder="MM/YY"
                          className="form-control"
                          style={{ fontSize: '0.825rem' }}
                        />
                        <input
                          type="password"
                          value={dummyCardData.cvv}
                          onChange={(e) => setDummyCardData({ ...dummyCardData, cvv: e.target.value })}
                          placeholder="CVV"
                          maxLength={4}
                          className="form-control"
                          style={{ fontSize: '0.825rem' }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {formData.paymentMethod === 'dummy_netbanking' && (
                  <div style={{ background: '#FAF5FF', padding: '12px 14px', borderRadius: '8px', border: '1px solid #E9D5FF' }}>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#6B21A8', display: 'block', marginBottom: '8px' }}>
                      Select Bank for Simulated Authorization
                    </span>
                    <select
                      value={dummyBank}
                      onChange={(e) => setDummyBank(e.target.value)}
                      className="form-control"
                      style={{ fontSize: '0.85rem' }}
                    >
                      {NET_BANKS.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>

              {/* Special Instructions */}
              <div className="form-group" style={{ marginBottom: '0.5rem' }}>
                <label className="form-label">Clinical or Delivery Instructions (Optional)</label>
                <input
                  type="text"
                  name="specialInstructions"
                  value={formData.specialInstructions}
                  onChange={handleInputChange}
                  placeholder="e.g. Fasting started at 9 PM, Diabetic patient, etc."
                  className="form-control"
                />
              </div>

              {/* Summary Bar */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.85rem 1rem',
                background: 'var(--color-bg)',
                borderRadius: '8px',
                marginTop: '1rem'
              }}>
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Estimated Payable Amount:</span>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-primary)' }}>
                    ₹{formData.price}
                  </div>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', textAlign: 'right' }}>
                  {formData.paymentMethod === 'pay_at_lab' ? (
                    <>
                      Pay upon arrival / pickup<br />
                      <span style={{ color: 'var(--color-secondary)', fontWeight: 600 }}>Cash • UPI • Card Accepted</span>
                    </>
                  ) : (
                    <>
                      Demo Payment Mode<br />
                      <span style={{ color: '#16A34A', fontWeight: 700 }}>Instant Test Authorization</span>
                    </>
                  )}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="modal-footer">
              <button type="button" onClick={handleResetAndClose} className="btn btn-outline btn-sm">
                Cancel
              </button>
              <button
                type="submit"
                disabled={submitting || (slotAvailability && !slotAvailability.available)}
                className="btn btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                {submitting ? (
                  <span>Reserving Slot...</span>
                ) : formData.paymentMethod === 'pay_at_lab' ? (
                  <span>Confirm &amp; Reserve Appointment</span>
                ) : (
                  <>
                    <Lock size={15} />
                    <span>Pay ₹{formData.price} (Demo) &amp; Confirm</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {/* Realistic Simulated Payment Processing Dialog Overlay */}
        {simulatingPayment && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(5px)',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '2rem',
            textAlign: 'center'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: simulationStep === 3 ? '#DCFCE7' : '#EFF6FF',
              color: simulationStep === 3 ? '#16A34A' : 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.25rem',
              transition: 'all 0.3s ease'
            }}>
              {simulationStep === 3 ? (
                <CheckCircle2 size={36} />
              ) : (
                <Lock size={30} className="spin" />
              )}
            </div>

            <h3 style={{ color: 'var(--color-primary-dark)', fontSize: '1.25rem', marginBottom: '0.4rem' }}>
              {simulationStep === 1 && 'Connecting to Simulated Payment Gateway...'}
              {simulationStep === 2 && 'Authorizing Demo Payment of ₹' + formData.price + '...'}
              {simulationStep === 3 && 'Payment Authorized Successfully!'}
            </h3>

            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', maxWidth: '380px', margin: 0 }}>
              {simulationStep === 1 && 'Secure 256-bit sandbox handshake in progress...'}
              {simulationStep === 2 && 'Simulating bank OTP verification & clearing...'}
              {simulationStep === 3 && 'Finalizing laboratory appointment reservation...'}
            </p>

            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: simulationStep >= 1 ? 'var(--color-primary)' : '#CBD5E1' }} />
              <div style={{ width: '20px', height: '2px', background: simulationStep >= 2 ? 'var(--color-primary)' : '#CBD5E1' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: simulationStep >= 2 ? 'var(--color-primary)' : '#CBD5E1' }} />
              <div style={{ width: '20px', height: '2px', background: simulationStep >= 3 ? 'var(--color-primary)' : '#CBD5E1' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: simulationStep === 3 ? '#16A34A' : '#CBD5E1' }} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AppointmentModal;
