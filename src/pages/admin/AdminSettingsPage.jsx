import React, { useState, useEffect } from 'react';
import { Settings, Save, CheckCircle2, ShieldCheck } from 'lucide-react';
import api from '../../services/api';
import { useToast } from '../../context/ToastContext';

const AdminSettingsPage = () => {
  const [settings, setSettings] = useState({
    centerName: '',
    tagline: '',
    address: '',
    phone: '',
    altPhone: '',
    whatsappNumber: '',
    email: '',
    workingHours: '',
    homeCollectionHours: '',
    noticeBanner: '',
    maxSlotCapacity: 5
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { addToast } = useToast();

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await api.get('/settings');
        if (res.data.success && res.data.data) {
          setSettings(res.data.data);
        }
      } catch (err) {
        console.error('Error fetching settings:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await api.put('/settings', settings);
      if (res.data.success) {
        addToast('Center settings saved successfully!', 'success');
      }
    } catch (err) {
      addToast('Failed to save settings', 'error');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div style={{ padding: '2rem', textAlign: 'center' }}>Loading settings...</div>;
  }

  return (
    <div className="admin-settings-view">
      
      <div className="admin-page-header">
        <div>
          <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary-dark)' }}>
            Business &amp; Center Settings
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
            Configure center contact details, WhatsApp integration number, hours, and booking capacity.
          </p>
        </div>
      </div>

      <div className="card" style={{ padding: '2.5rem', maxWidth: '820px' }}>
        <form onSubmit={handleSubmit}>
          
          <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary)', marginBottom: '1.25rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
            1. Brand &amp; Identity
          </h3>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Center Name</label>
              <input
                type="text"
                name="centerName"
                value={settings.centerName || ''}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Center Tagline</label>
              <input
                type="text"
                name="tagline"
                value={settings.tagline || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>

          <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary)', margin: '1.5rem 0 1.25rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
            2. Contact &amp; WhatsApp Integration
          </h3>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Primary Mobile / Helpdesk</label>
              <input
                type="text"
                name="phone"
                value={settings.phone || ''}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Landline Lab Number</label>
              <input
                type="text"
                name="altPhone"
                value={settings.altPhone || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">WhatsApp Business Number (with country code, e.g. 919443152200)</label>
              <input
                type="text"
                name="whatsappNumber"
                value={settings.whatsappNumber || ''}
                onChange={handleInputChange}
                className="form-control"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Official Support Email</label>
              <input
                type="email"
                name="email"
                value={settings.email || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>

          <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary)', margin: '1.5rem 0 1.25rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
            3. Address &amp; Operating Hours
          </h3>

          <div className="form-group">
            <label className="form-label">Laboratory Address in Trichy</label>
            <input
              type="text"
              name="address"
              value={settings.address || ''}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Center Operating Hours</label>
              <input
                type="text"
                name="workingHours"
                value={settings.workingHours || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Home Sample Collection Hours</label>
              <input
                type="text"
                name="homeCollectionHours"
                value={settings.homeCollectionHours || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>

          <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary)', margin: '1.5rem 0 1.25rem', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>
            4. Capacity &amp; Public Notices
          </h3>

          <div className="form-row">
            <div className="form-group" style={{ flex: 1 }}>
              <label className="form-label">Max Slot Capacity (Concurrent Bookings)</label>
              <input
                type="number"
                name="maxSlotCapacity"
                value={settings.maxSlotCapacity || 5}
                onChange={handleInputChange}
                className="form-control"
                min="1"
                max="50"
                required
              />
            </div>

            <div className="form-group" style={{ flex: 2 }}>
              <label className="form-label">Notice Banner Announcement</label>
              <input
                type="text"
                name="noticeBanner"
                value={settings.noticeBanner || ''}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>
          </div>

          <div style={{ marginTop: '2.5rem', borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
            <button
              type="submit"
              disabled={saving}
              className="btn btn-primary btn-lg"
            >
              <Save size={18} />
              <span>{saving ? 'Saving Changes...' : 'Save Center Settings'}</span>
            </button>
          </div>

        </form>
      </div>

    </div>
  );
};

export default AdminSettingsPage;
