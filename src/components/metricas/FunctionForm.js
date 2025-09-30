import { useState } from 'react';
import { useFunctionPoints } from '../../hooks/useFunctionPoints';
import { FUNCTION_TYPES, COMPLEXITY_LEVELS } from '../../utils/constants';

export default function FunctionForm({ onClose, editingFunction = null }) {
  const { dispatch, actions, getWeight } = useFunctionPoints();
  
  const [formData, setFormData] = useState({
    type: editingFunction?.type || Object.keys(FUNCTION_TYPES)[0],
    occurrences: editingFunction?.occurrences || 1,
    complexity: editingFunction?.complexity || COMPLEXITY_LEVELS[0]
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.type) {
      newErrors.type = 'Tipo de função é obrigatório';
    }
    
    if (!formData.occurrences || formData.occurrences < 1) {
      newErrors.occurrences = 'Número de ocorrências deve ser maior que 0';
    }
    
    if (!formData.complexity) {
      newErrors.complexity = 'Complexidade é obrigatória';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const functionData = {
      ...formData,
      occurrences: parseInt(formData.occurrences)
    };

    if (editingFunction) {
      dispatch({
        type: actions.UPDATE_FUNCTION,
        payload: { ...functionData, id: editingFunction.id }
      });
    } else {
      dispatch({
        type: actions.ADD_FUNCTION,
        payload: functionData
      });
    }

    onClose();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const weight = getWeight(formData.type, formData.complexity);
  const result = formData.occurrences * weight;

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    zIndex: 1000
  };

  const formStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '24px',
    width: '100%',
    maxWidth: '480px',
    maxHeight: '90vh',
    overflowY: 'auto'
  };

  const inputStyle = (hasError) => ({
    width: '100%',
    padding: '8px 12px',
    border: hasError ? '1px solid #ef4444' : '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '14px',
    boxSizing: 'border-box'
  });

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '6px'
  };

  const fieldStyle = {
    marginBottom: '20px'
  };

  const errorStyle = {
    color: '#ef4444',
    fontSize: '12px',
    marginTop: '4px'
  };

  const previewStyle = {
    backgroundColor: '#f9fafb',
    padding: '12px',
    borderRadius: '6px',
    marginBottom: '20px'
  };

  const buttonStyle = (isPrimary) => ({
    flex: 1,
    padding: '10px 16px',
    fontSize: '14px',
    fontWeight: '500',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: isPrimary ? '#2563eb' : '#e5e7eb',
    color: isPrimary ? 'white' : '#374151'
  });

  return (
    <div style={modalStyle}>
      <div style={formStyle}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', margin: '0 0 20px 0' }}>
          {editingFunction ? 'Editar Função' : 'Adicionar Nova Função'}
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div style={fieldStyle}>
            <label style={labelStyle}>Tipo de Função *</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              style={inputStyle(errors.type)}
            >
              {Object.keys(FUNCTION_TYPES).map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.type && <p style={errorStyle}>{errors.type}</p>}
          </div>

          <div style={fieldStyle}>
            <label style={labelStyle}>Número de Ocorrências *</label>
            <input
              type="number"
              name="occurrences"
              value={formData.occurrences}
              onChange={handleInputChange}
              min="1"
              placeholder="Quantas vezes esta função aparece?"
              style={inputStyle(errors.occurrences)}
            />
            {errors.occurrences && <p style={errorStyle}>{errors.occurrences}</p>}
          </div>

          <div style={fieldStyle}>
            <label style={labelStyle}>Complexidade *</label>
            <select
              name="complexity"
              value={formData.complexity}
              onChange={handleInputChange}
              style={inputStyle(errors.complexity)}
            >
              {COMPLEXITY_LEVELS.map(level => (
                <option key={level} value={level}>
                  {level} (Peso: {FUNCTION_TYPES[formData.type]?.[level.toLowerCase()] || 0})
                </option>
              ))}
            </select>
            {errors.complexity && <p style={errorStyle}>{errors.complexity}</p>}
          </div>

          <div style={{...previewStyle, border: '2px solid #10b981'}}>
            <h3 style={{margin: '0 0 12px 0', fontSize: '16px', color: '#065f46'}}>📊 Resumo do Cálculo</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <span>Tipo:</span>
                <span style={{ fontWeight: '500' }}>{formData.type}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
                <span>Complexidade:</span>
                <span style={{ fontWeight: '500' }}>{formData.complexity}</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '8px' }}>
              <span>Peso unitário:</span>
              <span style={{ fontWeight: '500', color: '#059669' }}>{weight} PF</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '8px' }}>
              <span>Ocorrências:</span>
              <span style={{ fontWeight: '500' }}>{formData.occurrences}x</span>
            </div>
            <hr style={{ margin: '8px 0', border: 'none', borderTop: '1px solid #d1fae5' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: 'bold' }}>
              <span>Total:</span>
              <span style={{ color: '#065f46' }}>{result} PF</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', paddingTop: '20px' }}>
            <button
              type="button"
              onClick={onClose}
              style={buttonStyle(false)}
            >
              Cancelar
            </button>
            <button
              type="submit"
              style={buttonStyle(true)}
            >
              {editingFunction ? 'Atualizar' : 'Adicionar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}