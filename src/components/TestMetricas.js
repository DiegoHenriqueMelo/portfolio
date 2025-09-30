import React from 'react';

const TestMetricas = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f0f0f0',
      flexDirection: 'column'
    }}>
      <h1>🎉 Rota /metricas funcionando!</h1>
      <p>Sistema de Métricas carregado com sucesso.</p>
      <div style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h3>✅ Teste de Rota Concluído</h3>
        <p>A rota <code>/metricas</code> está funcionando corretamente!</p>
      </div>
    </div>
  );
};

export default TestMetricas;