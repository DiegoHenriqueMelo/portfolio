import React, { useState } from 'react';

const SimpleAuth = ({ children, password = "metricas2025" }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (inputPassword === password) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Senha incorreta!');
      setInputPassword('');
    }
  };

  if (isAuthenticated) {
    return (
      <div>
        <div style={{
          position: 'fixed',
          top: '10px',
          right: '10px',
          zIndex: 9999,
          backgroundColor: '#dc2626',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '6px',
          fontSize: '12px',
          cursor: 'pointer'
        }} onClick={() => setIsAuthenticated(false)}>
          🔒 Sair
        </div>
        {children}
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f9fafb',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔐</div>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>
          Área Restrita
        </h1>
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '32px' }}>
          Sistema de Análise de Pontos de Função
        </p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            placeholder="Digite a senha de acesso"
            style={{
              width: '100%',
              padding: '12px 16px',
              border: error ? '2px solid #ef4444' : '1px solid #d1d5db',
              borderRadius: '8px',
              fontSize: '16px',
              marginBottom: '16px',
              boxSizing: 'border-box'
            }}
            autoFocus
          />
          
          {error && <p style={{ color: '#ef4444', fontSize: '14px', marginBottom: '16px' }}>{error}</p>}
          
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px 16px',
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer'
            }}
          >
            Acessar Sistema
          </button>
        </form>
        
        <div style={{
          backgroundColor: '#fef3c7',
          border: '1px solid #f59e0b',
          borderRadius: '6px',
          padding: '12px',
          fontSize: '12px',
          color: '#92400e',
          marginTop: '20px'
        }}>
          <strong>⚠️ Acesso Restrito</strong><br />
          Apenas usuários autorizados podem acessar.
        </div>
      </div>
    </div>
  );
};

export default SimpleAuth;