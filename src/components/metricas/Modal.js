import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, title, message, type = 'info' }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✅';
      case 'error':
        return '❌';
      case 'warning':
        return '⚠️';
      default:
        return 'ℹ️';
    }
  };

  const getColors = () => {
    switch (type) {
      case 'success':
        return {
          border: '#10b981',
          bg: '#ecfdf5',
          text: '#065f46',
          button: '#10b981'
        };
      case 'error':
        return {
          border: '#ef4444',
          bg: '#fef2f2',
          text: '#991b1b',
          button: '#ef4444'
        };
      case 'warning':
        return {
          border: '#f59e0b',
          bg: '#fffbeb',
          text: '#92400e',
          button: '#f59e0b'
        };
      default:
        return {
          border: '#3b82f6',
          bg: '#eff6ff',
          text: '#1e40af',
          button: '#3b82f6'
        };
    }
  };

  const colors = getColors();

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px'
  };

  const modalStyle = {
    backgroundColor: 'white',
    borderRadius: '12px',
    maxWidth: '500px',
    width: '100%',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    border: `2px solid ${colors.border}`,
    overflow: 'hidden',
    animation: 'modalFadeIn 0.3s ease-out'
  };

  const headerStyle = {
    backgroundColor: colors.bg,
    padding: '20px',
    borderBottom: `1px solid ${colors.border}`,
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: colors.text,
    margin: 0
  };

  const contentStyle = {
    padding: '20px'
  };

  const messageStyle = {
    fontSize: '14px',
    color: '#374151',
    lineHeight: '1.5',
    margin: 0,
    whiteSpace: 'pre-wrap'
  };

  const footerStyle = {
    padding: '20px',
    borderTop: '1px solid #e5e7eb',
    display: 'flex',
    justifyContent: 'flex-end'
  };

  const buttonStyle = {
    backgroundColor: colors.button,
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s'
  };

  return (
    <>
      <style>{`
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
      
      <div style={overlayStyle} onClick={onClose}>
        <div style={modalStyle} onClick={(e) => e.stopPropagation()}>
          <div style={headerStyle}>
            <span style={{ fontSize: '24px' }}>{getIcon()}</span>
            <h3 style={titleStyle}>{title}</h3>
          </div>
          
          <div style={contentStyle}>
            <p style={messageStyle}>{message}</p>
          </div>
          
          <div style={footerStyle}>
            <button
              style={buttonStyle}
              onClick={onClose}
              onMouseOver={(e) => e.target.style.opacity = '0.9'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}