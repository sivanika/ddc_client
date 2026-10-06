import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ShieldCheck, ArrowRight, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

const AdminLoginPage = () => {
  const [email, setEmail] = useState('admin@doctordiagnostics.com');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { login } = useAuth();
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      addToast('Welcome back, Administrator!', 'success');
      navigate('/admin');
    } catch (err) {
      setError(err.message || 'Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-card">
        
        <div className="login-header">
          <img src="/logo.svg" alt="Doctor Diagnostics Logo" className="login-logo" />
          <h2 className="login-title">Staff &amp; Admin Portal</h2>
          <p className="login-subtitle">Doctor Diagnostics Center • Trichy</p>
        </div>

        {error && (
          <div className="login-error-alert">
            <AlertCircle size={18} />
            <span>{error}</span>
          </div>
        )}

        {/* Demo Credentials Box */}
        <div className="demo-credentials-box">
          <div style={{ fontWeight: 700, color: 'var(--color-primary)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ShieldCheck size={16} />
            <span>Authorized Access Credentials:</span>
          </div>
          <div style={{ fontSize: '0.825rem', color: 'var(--color-text-body)' }}>
            Email: <code>admin@doctordiagnostics.com</code><br />
            Password: <code>admin123</code>
          </div>
        </div>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">Administrator Email</label>
            <div className="login-input-wrap">
              <Mail size={18} className="input-icon" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@doctordiagnostics.com"
                className="form-control"
                style={{ paddingLeft: '40px' }}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="login-input-wrap">
              <Lock size={18} className="input-icon" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="form-control"
                style={{ paddingLeft: '40px' }}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary btn-lg"
            style={{ width: '100%', marginTop: '1rem' }}
          >
            <span>{loading ? 'Authenticating...' : 'Sign In to Dashboard'}</span>
            <ArrowRight size={18} />
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <a href="/" style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
            ← Return to Public Website
          </a>
        </div>

      </div>

      <style>{`
        .admin-login-wrapper {
          min-height: 100vh;
          background: linear-gradient(135deg, #0B4778 0%, #072F50 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .admin-login-card {
          background: #ffffff;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
          width: 100%;
          max-width: 440px;
          padding: 2.5rem;
        }
        .login-header {
          text-align: center;
          margin-bottom: 1.75rem;
        }
        .login-logo {
          width: 60px;
          height: 60px;
          margin: 0 auto 12px;
        }
        .login-title {
          font-size: 1.45rem;
          color: var(--color-primary-dark);
          margin-bottom: 2px;
        }
        .login-subtitle {
          font-size: 0.85rem;
          color: var(--color-secondary);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .login-error-alert {
          background: var(--color-danger-bg);
          border: 1px solid var(--color-danger);
          color: #991B1B;
          border-radius: 8px;
          padding: 10px 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          margin-bottom: 1.25rem;
        }
        .demo-credentials-box {
          background: var(--color-bg);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          padding: 10px 14px;
          margin-bottom: 1.5rem;
        }
        .login-input-wrap {
          position: relative;
        }
        .input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #94A3B8;
        }
      `}</style>
    </div>
  );
};

export default AdminLoginPage;
