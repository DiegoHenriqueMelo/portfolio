import { useFunctionPoints } from '../../hooks/useFunctionPoints';
import { INFLUENCE_FACTORS } from '../../utils/constants';

export default function InfluenceFactorsForm() {
  const { state, dispatch, actions, getInfluenceFactorsSum } = useFunctionPoints();

  const handleFactorChange = (factor, value) => {
    const numValue = parseInt(value) || 0;
    
    if (numValue >= 0 && numValue <= 5) {
      dispatch({
        type: actions.UPDATE_INFLUENCE_FACTOR,
        payload: { factor, value: numValue }
      });
    }
  };

  const containerStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    padding: '24px'
  };

  const factorRowStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '16px'
  };

  const labelStyle = {
    flex: 1,
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151'
  };

  const controlsStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginLeft: '16px'
  };

  const selectStyle = {
    width: '80px',
    padding: '8px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '14px'
  };

  const valueDisplayStyle = {
    fontSize: '14px',
    color: '#6b7280',
    width: '32px',
    textAlign: 'center'
  };

  const totalSectionStyle = {
    marginTop: '24px',
    paddingTop: '16px',
    borderTop: '1px solid #e5e7eb'
  };

  const totalRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const infoSectionStyle = {
    marginTop: '16px',
    padding: '16px',
    backgroundColor: '#f9fafb',
    borderRadius: '6px'
  };

  const infoListStyle = {
    fontSize: '14px',
    color: '#6b7280',
    margin: '8px 0 0 0',
    paddingLeft: '0',
    listStyle: 'none'
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', margin: '0 0 16px 0' }}>
        Fatores de Influência do Sistema
      </h2>
      <p style={{ color: '#6b7280', marginBottom: '24px', margin: '0 0 24px 0' }}>
        Avalie cada fator de 0 a 5, onde 0 = sem influência e 5 = forte influência.
      </p>
      
      <div>
        {INFLUENCE_FACTORS.map((factor) => (
          <div key={factor} style={factorRowStyle}>
            <label style={labelStyle}>
              {factor}
            </label>
            <div style={controlsStyle}>
              <select
                value={state.influenceFactors[factor]}
                onChange={(e) => handleFactorChange(factor, e.target.value)}
                style={selectStyle}
              >
                {[0, 1, 2, 3, 4, 5].map(value => (
                  <option key={value} value={value}>{value}</option>
                ))}
              </select>
              <span style={valueDisplayStyle}>
                {state.influenceFactors[factor]}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div style={totalSectionStyle}>
        <div style={totalRowStyle}>
          <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827' }}>
            Soma dos Fatores de Influência:
          </span>
          <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#2563eb' }}>
            {getInfluenceFactorsSum()}
          </span>
        </div>
      </div>

      <div style={infoSectionStyle}>
        <h3 style={{ fontWeight: '500', color: '#111827', marginBottom: '8px', margin: '0 0 8px 0' }}>
          Descrição dos Fatores:
        </h3>
        <ul style={infoListStyle}>
          <li style={{ marginBottom: '4px' }}>
            <strong>Comunicação de dados:</strong> Grau de comunicação com outras aplicações
          </li>
          <li style={{ marginBottom: '4px' }}>
            <strong>Performance:</strong> Requisitos de performance da aplicação
          </li>
          <li style={{ marginBottom: '4px' }}>
            <strong>Volume de transações:</strong> Frequência de transações
          </li>
          <li style={{ marginBottom: '4px' }}>
            <strong>Eficiência do usuário final:</strong> Facilidade de uso
          </li>
          <li>
            <strong>Processamento complexo:</strong> Complexidade dos algoritmos
          </li>
        </ul>
      </div>
    </div>
  );
}