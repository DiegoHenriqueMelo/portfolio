import React from 'react';
import SimpleAuth from './SimpleAuth';

const MetricasContent = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Header */}
      <header style={{
        backgroundColor: 'white',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        borderBottom: '1px solid #e5e7eb'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '20px'
        }}>
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: '#111827',
            margin: '0 0 4px 0'
          }}>
            Sistema de Análise de Pontos de Função
          </h1>
          <p style={{ 
            fontSize: '14px', 
            color: '#6b7280',
            margin: 0
          }}>
            Calcule métricas de software baseadas em Pontos de Função
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '32px 0' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            padding: '24px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>📊</div>
            <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '16px', color: '#111827' }}>
              Sistema de Métricas
            </h2>
            <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '32px' }}>
              Bem-vindo ao sistema de análise de pontos de função!
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px',
              marginTop: '40px'
            }}>
              <div style={{
                backgroundColor: '#dbeafe',
                padding: '20px',
                borderRadius: '8px'
              }}>
                <h3 style={{ color: '#1e40af', marginBottom: '8px' }}>⚙️ Configuração</h3>
                <p style={{ color: '#1e40af', fontSize: '14px' }}>Configure seu projeto e parâmetros</p>
              </div>
              
              <div style={{
                backgroundColor: '#f3e8ff',
                padding: '20px',
                borderRadius: '8px'
              }}>
                <h3 style={{ color: '#7c3aed', marginBottom: '8px' }}>📊 Funções</h3>
                <p style={{ color: '#7c3aed', fontSize: '14px' }}>Cadastre as funções do sistema</p>
              </div>
              
              <div style={{
                backgroundColor: '#fed7aa',
                padding: '20px',
                borderRadius: '8px'
              }}>
                <h3 style={{ color: '#ea580c', marginBottom: '8px' }}>🎯 Fatores</h3>
                <p style={{ color: '#ea580c', fontSize: '14px' }}>Defina fatores de influência</p>
              </div>
              
              <div style={{
                backgroundColor: '#dcfce7',
                padding: '20px',
                borderRadius: '8px'
              }}>
                <h3 style={{ color: '#16a34a', marginBottom: '8px' }}>📈 Resultados</h3>
                <p style={{ color: '#16a34a', fontSize: '14px' }}>Visualize métricas calculadas</p>
              </div>
            </div>
            
            <div style={{
              marginTop: '40px',
              padding: '20px',
              backgroundColor: '#f0f9ff',
              border: '1px solid #0ea5e9',
              borderRadius: '8px'
            }}>
              <h4 style={{ color: '#0c4a6e', marginBottom: '8px' }}>🚀 Sistema Carregado com Sucesso!</h4>
              <p style={{ color: '#0c4a6e', fontSize: '14px', margin: 0 }}>
                O sistema completo de métricas está funcionando. A interface completa será carregada em breve.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const SimpleMetricas = () => {
  return (
    <SimpleAuth password="metricas2025">
      <MetricasContent />
    </SimpleAuth>
  );
};

export default SimpleMetricas;