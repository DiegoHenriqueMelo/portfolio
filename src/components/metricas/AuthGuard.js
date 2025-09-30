import { useState, useEffect } from 'react';

const AuthGuard = ({ children, passwordHash = "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9" }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [inputPassword, setInputPassword] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    // Verificar se já está autenticado no sessionStorage
    const authStatus = sessionStorage.getItem('metricas_auth');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Gerar hash SHA-256 da senha digitada
    const encoder = new TextEncoder();
    const data = encoder.encode(inputPassword);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    if (hashHex === passwordHash) {
      setIsAuthenticated(true);
      sessionStorage.setItem('metricas_auth', 'true');
      setError('');
    } else {
      setAttempts(prev => prev + 1);
      setError(`Senha incorreta. Tentativa ${attempts + 1}/3`);
      setInputPassword('');
      
      if (attempts >= 2) {
        setError('Muitas tentativas incorretas. Tente novamente mais tarde.');
        setTimeout(() => {
          setAttempts(0);
          setError('');
        }, 30000); // 30 segundos de bloqueio
      }
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('metricas_auth');
    setInputPassword('');
    setError('');
    setAttempts(0);
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
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
        }} onClick={handleLogout}>
          🔒 Sair
        </div>
        {children}
      </div>
    );
  }

  const containerStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f9fafb',
    padding: '20px'
  };

  const formStyle = {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center'
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: '8px',
    margin: '0 0 8px 0'
  };

  const subtitleStyle = {
    fontSize: '14px',
    color: '#6b7280',
    marginBottom: '32px',
    margin: '0 0 32px 0'
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    border: error ? '2px solid #ef4444' : '1px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '16px',
    marginBottom: '16px',
    boxSizing: 'border-box',
    outline: 'none',
    transition: 'border-color 0.2s'
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px 16px',
    backgroundColor: attempts >= 3 ? '#9ca3af' : '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '500',
    cursor: attempts >= 3 ? 'not-allowed' : 'pointer',
    transition: 'background-color 0.2s',
    marginBottom: '16px'
  };

  const errorStyle = {
    color: '#ef4444',
    fontSize: '14px',
    marginBottom: '16px',
    margin: '0 0 16px 0'
  };

  const warningStyle = {
    backgroundColor: '#fef3c7',
    border: '1px solid #f59e0b',
    borderRadius: '6px',
    padding: '12px',
    fontSize: '12px',
    color: '#92400e',
    marginTop: '20px'
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔐</div>
        <h1 style={titleStyle}>Área Restrita</h1>
        <p style={subtitleStyle}>
          Sistema de Análise de Pontos de Função
        </p>
        
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
            placeholder="Digite a senha de acesso"
            style={inputStyle}
            disabled={attempts >= 3}
            autoFocus
          />
          
          {error && <p style={errorStyle}>{error}</p>}
          
          <button
            type="submit"
            style={buttonStyle}
            disabled={attempts >= 3 || !inputPassword.trim()}
            onMouseOver={(e) => {
              if (attempts < 3 && inputPassword.trim()) {
                e.target.style.backgroundColor = '#1d4ed8';
              }
            }}
            onMouseOut={(e) => {
              if (attempts < 3) {
                e.target.style.backgroundColor = '#2563eb';
              }
            }}
          >
            {attempts >= 3 ? 'Bloqueado' : 'Acessar Sistema'}
          </button>
        </form>
        
        <div style={warningStyle}>
          <strong>⚠️ Acesso Restrito</strong><br />
          Este sistema contém informações confidenciais.<br />
          Apenas usuários autorizados podem acessar.
        </div>
      </div>
    </div>
  );
};

export default AuthGuard;