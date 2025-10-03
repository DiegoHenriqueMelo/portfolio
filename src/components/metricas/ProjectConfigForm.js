import { useState } from 'react';
import { useFunctionPoints } from '../../hooks/useFunctionPoints';
import { PROGRAMMING_LANGUAGES, SYSTEM_TYPES, ISO_WORKING_HOURS } from '../../utils/constants';

export default function ProjectConfigForm() {
  const { state, dispatch, actions } = useFunctionPoints();
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    const finalValue = type === 'number' ? parseFloat(value) || 0 : value;
    
    dispatch({
      type: actions.UPDATE_PROJECT_CONFIG,
      payload: { [name]: finalValue }
    });
  };

  const handleLanguageChange = (index, language) => {
    const currentLanguages = state.projectConfig.languages || [];
    const newLanguages = [...currentLanguages];
    
    if (language === '') {
      // Remove a linguagem do índice especificado
      newLanguages.splice(index, 1);
    } else {
      // Atualiza ou adiciona a linguagem no índice especificado
      newLanguages[index] = language;
    }
    
    // Remove valores vazios e duplicatas
    const filteredLanguages = newLanguages.filter((lang, idx, arr) => 
      lang && lang !== '' && arr.indexOf(lang) === idx
    );
    
    dispatch({
      type: actions.UPDATE_PROJECT_CONFIG,
      payload: { languages: filteredLanguages }
    });
  };

  const containerStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    padding: '24px',
    marginBottom: '24px'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  };

  const toggleButtonStyle = {
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    padding: '8px 16px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px'
  };

  const fieldStyle = {
    marginBottom: '16px'
  };

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '6px'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px 12px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '14px',
    boxSizing: 'border-box'
  };

  const summaryStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
    padding: '16px',
    backgroundColor: '#f8fafc',
    borderRadius: '6px',
    fontSize: '14px'
  };

  const summaryItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>
          ⚙️ Configurações do Projeto
        </h2>
        <button
          onClick={() => setShowForm(!showForm)}
          style={toggleButtonStyle}
        >
          {showForm ? 'Ocultar' : 'Configurar'}
        </button>
      </div>

      {!showForm ? (
        <div style={summaryStyle}>
          <div style={summaryItemStyle}>
            <span>Linguagens:</span>
            <strong>
              {(state.projectConfig.languages && state.projectConfig.languages.length > 0) 
                ? state.projectConfig.languages.join(', ')
                : state.projectConfig.language
              }
            </strong>
          </div>
          <div style={summaryItemStyle}>
            <span>Tipo de Sistema:</span>
            <strong>{state.projectConfig.systemType}</strong>
          </div>
          <div style={summaryItemStyle}>
            <span>Produtividade:</span>
            <strong>{SYSTEM_TYPES[state.projectConfig.systemType]} LOC/mês</strong>
          </div>
          <div style={summaryItemStyle}>
            <span>Valor/Hora:</span>
            <strong>R$ {state.projectConfig.hourlyRate}</strong>
          </div>
        </div>
      ) : (
        <div style={gridStyle}>
          <div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Nome do Projeto</label>
              <input
                type="text"
                name="name"
                value={state.projectConfig.name}
                onChange={handleInputChange}
                placeholder="Nome do seu projeto..."
                style={inputStyle}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Descrição</label>
              <textarea
                name="description"
                value={state.projectConfig.description}
                onChange={handleInputChange}
                placeholder="Descreva o projeto..."
                rows="3"
                style={{...inputStyle, resize: 'vertical', fontFamily: 'inherit'}}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>
                Tipo de Linguagem para Cálculo de LOC
                <span style={{fontSize: '12px', color: '#6b7280', fontWeight: 'normal'}}>
                  {' '}(Selecione até 2 linguagens)
                </span>
              </label>
              
              <div style={{display: 'grid', gap: '12px'}}>
                {/* Primeira linguagem */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#4b5563',
                    marginBottom: '4px'
                  }}>
                    Linguagem Principal
                  </label>
                  <select
                    value={(state.projectConfig.languages || [])[0] || ''}
                    onChange={(e) => handleLanguageChange(0, e.target.value)}
                    style={inputStyle}
                  >
                    <option value="">Selecione uma linguagem...</option>
                    {Object.keys(PROGRAMMING_LANGUAGES).map(lang => (
                      <option key={lang} value={lang}>
                        {lang} ({PROGRAMMING_LANGUAGES[lang]} LOC/PF)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Segunda linguagem */}
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: '500',
                    color: '#4b5563',
                    marginBottom: '4px'
                  }}>
                    Linguagem Secundária (Opcional)
                  </label>
                  <select
                    value={(state.projectConfig.languages || [])[1] || ''}
                    onChange={(e) => handleLanguageChange(1, e.target.value)}
                    style={inputStyle}
                    disabled={!(state.projectConfig.languages || [])[0]}
                  >
                    <option value="">Selecione uma linguagem...</option>
                    {Object.keys(PROGRAMMING_LANGUAGES)
                      .filter(lang => lang !== (state.projectConfig.languages || [])[0])
                      .map(lang => (
                        <option key={lang} value={lang}>
                          {lang} ({PROGRAMMING_LANGUAGES[lang]} LOC/PF)
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div style={fieldStyle}>
              <label style={labelStyle}>
                Tipo de Sistema
                <span style={{fontSize: '12px', color: '#6b7280', fontWeight: 'normal'}}>
                  {' '}(Produtividade: {SYSTEM_TYPES[state.projectConfig.systemType]} LOC/mês)
                </span>
              </label>
              <select
                name="systemType"
                value={state.projectConfig.systemType}
                onChange={handleInputChange}
                style={inputStyle}
              >
                {Object.keys(SYSTEM_TYPES).map(type => (
                  <option key={type} value={type}>
                    {type} ({SYSTEM_TYPES[type]} LOC/mês)
                  </option>
                ))}
              </select>
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Valor por Hora (R$)</label>
              <input
                type="number"
                name="hourlyRate"
                value={state.projectConfig.hourlyRate}
                onChange={handleInputChange}
                min="1"
                step="0.01"
                placeholder="50.00"
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <div style={fieldStyle}>
              <label style={labelStyle}>Horas de Trabalho por Dia (ISO: {ISO_WORKING_HOURS.HOURS_PER_DAY}h)</label>
              <input
                type="number"
                name="workingHoursPerDay"
                value={state.projectConfig.workingHoursPerDay}
                onChange={handleInputChange}
                min="1"
                max="24"
                placeholder={ISO_WORKING_HOURS.HOURS_PER_DAY}
                style={inputStyle}
              />
            </div>

            <div style={fieldStyle}>
              <label style={labelStyle}>Dias de Trabalho por Mês (ISO: {ISO_WORKING_HOURS.DAYS_PER_MONTH} dias)</label>
              <input
                type="number"
                name="workingDaysPerMonth"
                value={state.projectConfig.workingDaysPerMonth}
                onChange={handleInputChange}
                min="1"
                max="31"
                placeholder={ISO_WORKING_HOURS.DAYS_PER_MONTH}
                style={inputStyle}
              />
            </div>

            <div style={{
              padding: '16px',
              backgroundColor: '#ecfdf5',
              border: '1px solid #10b981',
              borderRadius: '6px',
              marginTop: '16px'
            }}>
              <h4 style={{margin: '0 0 8px 0', color: '#065f46', fontSize: '14px'}}>
                💡 Configuração Atual
              </h4>
              <div style={{fontSize: '12px', color: '#047857', lineHeight: '1.5'}}>
                <div>• Linguagens: {
                  (state.projectConfig.languages && state.projectConfig.languages.length > 0)
                    ? state.projectConfig.languages.map(lang => `${lang} (${PROGRAMMING_LANGUAGES[lang]} LOC/PF)`).join(', ')
                    : `${state.projectConfig.language} (${PROGRAMMING_LANGUAGES[state.projectConfig.language]} LOC/PF)`
                }</div>
                <div>• {SYSTEM_TYPES[state.projectConfig.systemType]} LOC/mês</div>
                <div>• R$ {state.projectConfig.hourlyRate}/hora</div>
                <div>• {ISO_WORKING_HOURS.HOURS_PER_MONTH}h/mês (padrão ISO)</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}