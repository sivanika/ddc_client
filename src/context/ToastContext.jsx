import React, { createContext, useContext, useState, useCallback } from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

const ToastContext = createContext(null);

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info', duration = 4000) => {
    const id = Date.now() + Math.random().toString(36).substr(2, 5);
    setToasts((prev) => [...prev, { id, message, type }]);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div style={{
        position: 'fixed',
        top: '24px',
        right: '24px',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        maxWidth: '380px'
      }}>
        {toasts.map((toast) => {
          let bg = '#1E293B';
          let border = '#334155';
          let icon = <Info size={20} color="#38BDF8" />;

          if (toast.type === 'success') {
            bg = '#064E3B';
            border = '#059669';
            icon = <CheckCircle2 size={20} color="#34D399" />;
          } else if (toast.type === 'error') {
            bg = '#7F1D1D';
            border = '#DC2626';
            icon = <AlertCircle size={20} color="#F87171" />;
          }

          return (
            <div
              key={toast.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: bg,
                color: '#FFFFFF',
                padding: '12px 16px',
                borderRadius: '10px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
                border: `1px solid ${border}`,
                animation: 'slideUp 0.2s ease',
                fontSize: '0.9rem',
                lineHeight: 1.4
              }}
            >
              <div>{icon}</div>
              <div style={{ flex: 1 }}>{toast.message}</div>
              <button
                onClick={() => removeToast(toast.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.7)',
                  cursor: 'pointer',
                  padding: '2px',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <X size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
