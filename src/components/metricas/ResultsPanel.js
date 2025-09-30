import { useFunctionPoints } from '../../hooks/useFunctionPoints';
import { SYSTEM_TYPES } from '../../utils/constants';

export default function ResultsPanel() {
  const { 
    state, 
    getPFNA, 
    getInfluenceFactorsSum, 
    getAdjustmentValue, 
    getPFA,
    getLinesOfCode,
    getKLOC,
    getEffortInHours,
    getEffortInDays,
    getEffortInMonths,
    getTotalCost,
    getProductivity
  } = useFunctionPoints();



  const pfna = getPFNA();
  const influenceSum = getInfluenceFactorsSum();
  const adjustmentValue = getAdjustmentValue();
  const pfa = getPFA();
  const linesOfCode = getLinesOfCode();
  const kloc = getKLOC();
  const effortHours = getEffortInHours();
  const effortDays = getEffortInDays();
  const effortMonths = getEffortInMonths();
  const totalCost = getTotalCost();
  const productivity = getProductivity();

  const exportToPDF = () => {
    alert('Funcionalidade de exportação PDF será implementada em breve!');
  };

  const containerStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    padding: '24px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
    marginBottom: '24px'
  };

  const cardStyle = (bgColor) => ({
    backgroundColor: bgColor,
    padding: '16px',
    borderRadius: '8px'
  });

  const cardTitleStyle = (color) => ({
    fontSize: '14px',
    fontWeight: '500',
    color: color,
    marginBottom: '4px',
    margin: '0 0 4px 0'
  });

  const cardValueStyle = (color) => ({
    fontSize: '24px',
    fontWeight: 'bold',
    color: color,
    margin: 0
  });

  const cardSubtitleStyle = (color) => ({
    fontSize: '12px',
    color: color,
    margin: 0
  });

  const buttonStyle = {
    padding: '12px 20px',
    backgroundColor: '#16a34a',
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

  const formulasStyle = {
    marginTop: '24px',
    padding: '16px',
    backgroundColor: '#f9fafb',
    borderRadius: '8px'
  };

  const formulasListStyle = {
    fontSize: '14px',
    color: '#6b7280',
    margin: '8px 0 0 0',
    paddingLeft: '0',
    listStyle: 'none'
  };

  if (state.functions.length === 0) {
    return (
      <div style={containerStyle}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', margin: '0 0 16px 0' }}>
          Resultado Final
        </h2>
        <div style={{ textAlign: 'center', padding: '32px 0', color: '#6b7280' }}>
          <p style={{ margin: 0 }}>Adicione pelo menos uma função para ver os resultados.</p>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>
          Resultado Final
        </h2>
        <button
          onClick={exportToPDF}
          style={buttonStyle}
          onMouseOver={(e) => e.target.style.backgroundColor = '#15803d'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#16a34a'}
        >
          <span>📄</span>
          <span>Exportar PDF</span>
        </button>
      </div>

      <div style={gridStyle}>
        <div style={cardStyle('#dbeafe')}>
          <h3 style={cardTitleStyle('#1e40af')}>Total de Funções</h3>
          <p style={cardValueStyle('#2563eb')}>{state.functions.length}</p>
        </div>

        <div style={cardStyle('#f3e8ff')}>
          <h3 style={cardTitleStyle('#7c3aed')}>PFNA</h3>
          <p style={cardValueStyle('#8b5cf6')}>{pfna}</p>
          <p style={cardSubtitleStyle('#7c3aed')}>Pontos de Função Não Ajustados</p>
        </div>

        <div style={cardStyle('#fed7aa')}>
          <h3 style={cardTitleStyle('#ea580c')}>Fatores de Influência</h3>
          <p style={cardValueStyle('#f97316')}>{influenceSum}</p>
          <p style={cardSubtitleStyle('#ea580c')}>VA: {adjustmentValue.toFixed(2)}</p>
        </div>

        <div style={{...cardStyle('#dcfce7'), gridColumn: 'span 2'}}>
          <h3 style={cardTitleStyle('#16a34a')}>🎯 PFA - Resultado Final</h3>
          <p style={{...cardValueStyle('#22c55e'), fontSize: '32px'}}>{pfa.toFixed(2)}</p>
          <p style={cardSubtitleStyle('#16a34a')}>Pontos de Função Ajustados</p>
        </div>

        <div style={cardStyle('#fef3c7')}>
          <h3 style={cardTitleStyle('#d97706')}>💻 Linhas de Código</h3>
          <p style={cardValueStyle('#f59e0b')}>{linesOfCode.toLocaleString('pt-BR')}</p>
          <p style={cardSubtitleStyle('#d97706')}>KLOC: {kloc.toFixed(3)}</p>
        </div>

        <div style={cardStyle('#e0e7ff')}>
          <h3 style={cardTitleStyle('#5b21b6')}>🏭 Tipo de Sistema</h3>
          <p style={cardValueStyle('#7c3aed')}>{state.projectConfig.systemType}</p>
          <p style={cardSubtitleStyle('#5b21b6')}>{SYSTEM_TYPES[state.projectConfig.systemType]} LOC/mês</p>
        </div>

        <div style={cardStyle('#e0e7ff')}>
          <h3 style={cardTitleStyle('#5b21b6')}>⏱️ Esforço (Horas)</h3>
          <p style={cardValueStyle('#7c3aed')}>{effortHours.toLocaleString('pt-BR')}</p>
          <p style={cardSubtitleStyle('#5b21b6')}>{effortDays} dias | {effortMonths} meses</p>
        </div>

        <div style={cardStyle('#fecaca')}>
          <h3 style={cardTitleStyle('#dc2626')}>💰 Custo Total</h3>
          <p style={cardValueStyle('#ef4444')}>R$ {totalCost.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</p>
          <p style={cardSubtitleStyle('#dc2626')}>R$ {state.projectConfig.hourlyRate}/hora</p>
        </div>

        <div style={cardStyle('#d1fae5')}>
          <h3 style={cardTitleStyle('#059669')}>📈 Produtividade</h3>
          <p style={cardValueStyle('#10b981')}>{productivity}</p>
          <p style={cardSubtitleStyle('#059669')}>PF por mês</p>
        </div>
      </div>

      <div style={formulasStyle}>
        <h3 style={{ fontWeight: '500', color: '#111827', marginBottom: '8px', margin: '0 0 8px 0' }}>
          Fórmulas Utilizadas:
        </h3>
        <ul style={formulasListStyle}>
          <li style={{ marginBottom: '4px' }}>
            <strong>PFNA:</strong> Soma dos resultados de todas as funções
          </li>
          <li style={{ marginBottom: '4px' }}>
            <strong>VA:</strong> 0,65 + (0,01 × soma dos fatores de influência)
          </li>
          <li style={{ marginBottom: '4px' }}>
            <strong>PFA:</strong> PFNA × VA
          </li>
          <li>
            <strong>Resultado da função:</strong> Nº de ocorrências × Peso
          </li>
        </ul>
      </div>


    </div>
  );
}