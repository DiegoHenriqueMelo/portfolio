import { useState } from 'react';
import { FunctionPointsProvider } from '../../context/FunctionPointsContext';
import FunctionForm from './FunctionForm';
import FunctionsTable from './FunctionsTable';
import InfluenceFactorsForm from './InfluenceFactorsForm';
import ResultsPanel from './ResultsPanel';
import ProjectConfigForm from './ProjectConfigForm';

function MetricasApp() {
  const [showFunctionForm, setShowFunctionForm] = useState(false);
  const [activeTab, setActiveTab] = useState('config');

  const tabs = [
    { id: 'config', name: 'Configuração', icon: '⚙️' },
    { id: 'functions', name: 'Funções', icon: '📊' },
    { id: 'factors', name: 'Fatores de Influência', icon: '🎯' },
    { id: 'results', name: 'Resultados', icon: '📈' }
  ];

  const headerStyle = {
    backgroundColor: 'white',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    borderBottom: '1px solid #e5e7eb'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  };

  const headerContentStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 0'
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: '500'
  };

  const tabsContainerStyle = {
    backgroundColor: 'white',
    borderBottom: '1px solid #e5e7eb'
  };

  const tabsStyle = {
    display: 'flex',
    gap: '32px'
  };

  const tabStyle = (isActive) => ({
    padding: '16px 4px',
    borderBottom: isActive ? '2px solid #2563eb' : '2px solid transparent',
    color: isActive ? '#2563eb' : '#6b7280',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '8px'
  });

  const mainStyle = {
    padding: '32px 0',
    minHeight: 'calc(100vh - 140px)'
  };

  return (
    <FunctionPointsProvider>
      <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
        {/* Header */}
        <header style={headerStyle}>
          <div style={containerStyle}>
            <div style={headerContentStyle}>
              <div>
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
              
              {activeTab === 'functions' && (
                <button
                  onClick={() => setShowFunctionForm(true)}
                  style={buttonStyle}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
                >
                  <span>+</span>
                  <span>Adicionar Função</span>
                </button>
              )}
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav style={tabsContainerStyle}>
          <div style={containerStyle}>
            <div style={tabsStyle}>
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={tabStyle(activeTab === tab.id)}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main style={mainStyle}>
          <div style={containerStyle}>
            {activeTab === 'config' && <ProjectConfigForm />}
            {activeTab === 'functions' && <FunctionsTable />}
            {activeTab === 'factors' && <InfluenceFactorsForm />}
            {activeTab === 'results' && <ResultsPanel />}
          </div>
        </main>

        {/* Function Form Modal */}
        {showFunctionForm && (
          <FunctionForm onClose={() => setShowFunctionForm(false)} />
        )}
      </div>
    </FunctionPointsProvider>
  );
}

export default MetricasApp;