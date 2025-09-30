import { useState } from 'react';
import { useFunctionPoints } from '../../hooks/useFunctionPoints';
import FunctionForm from './FunctionForm';
import ConfirmModal from './ConfirmModal';

export default function FunctionsTable() {
  const { state, dispatch, actions, getFunctionResult, getPFNA } = useFunctionPoints();
  const [editingFunction, setEditingFunction] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState({ isOpen: false, functionId: null, functionType: '' });

  const handleEdit = (func) => {
    setEditingFunction(func);
  };

  const handleDelete = (func) => {
    setConfirmDelete({
      isOpen: true,
      functionId: func.id,
      functionType: func.type
    });
  };

  const confirmDeleteFunction = () => {
    dispatch({
      type: actions.DELETE_FUNCTION,
      payload: confirmDelete.functionId
    });
    setConfirmDelete({ isOpen: false, functionId: null, functionType: '' });
  };

  const cancelDelete = () => {
    setConfirmDelete({ isOpen: false, functionId: null, functionType: '' });
  };

  const handleCloseForm = () => {
    setEditingFunction(null);
  };

  const containerStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    padding: '24px'
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse'
  };

  const headerStyle = {
    backgroundColor: '#f9fafb',
    textAlign: 'left',
    padding: '12px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#374151',
    borderBottom: '1px solid #e5e7eb'
  };

  const cellStyle = (isEven) => ({
    padding: '12px',
    fontSize: '14px',
    color: '#111827',
    backgroundColor: isEven ? 'white' : '#f9fafb',
    borderBottom: '1px solid #e5e7eb'
  });

  const buttonStyle = (isPrimary) => ({
    color: isPrimary ? '#2563eb' : '#dc2626',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    marginRight: '8px'
  });

  const totalRowStyle = {
    backgroundColor: '#dbeafe',
    borderTop: '2px solid #3b82f6'
  };

  const emptyStateStyle = {
    textAlign: 'center',
    padding: '48px 20px',
    color: '#6b7280'
  };

  if (state.functions.length === 0) {
    return (
      <div style={containerStyle}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', margin: '0 0 20px 0' }}>
          Funções Cadastradas
        </h2>
        <div style={emptyStateStyle}>
          <p style={{ margin: '0 0 8px 0' }}>Nenhuma função cadastrada ainda.</p>
          <p style={{ fontSize: '12px', margin: 0 }}>Use o botão "Adicionar Função" para começar.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div style={containerStyle}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', margin: '0 0 20px 0' }}>
          Funções Cadastradas
        </h2>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={headerStyle}>Tipo</th>
                <th style={headerStyle}>Ocorrências</th>
                <th style={headerStyle}>Complexidade</th>
                <th style={headerStyle}>Peso</th>
                <th style={headerStyle}>Resultado</th>
                <th style={headerStyle}>Ações</th>
              </tr>
            </thead>
            <tbody>
              {state.functions.map((func, index) => {
                const result = getFunctionResult(func);
                const weight = result / func.occurrences;
                return (
                  <tr key={func.id}>
                    <td style={cellStyle(index % 2 === 0)}>{func.type}</td>
                    <td style={{...cellStyle(index % 2 === 0), textAlign: 'center'}}>{func.occurrences}</td>
                    <td style={cellStyle(index % 2 === 0)}>{func.complexity}</td>
                    <td style={{...cellStyle(index % 2 === 0), fontWeight: '500', textAlign: 'center'}}>
                      {weight}
                    </td>
                    <td style={{...cellStyle(index % 2 === 0), fontWeight: 'bold', color: '#059669', textAlign: 'center'}}>
                      {result}
                    </td>
                    <td style={{...cellStyle(index % 2 === 0), whiteSpace: 'nowrap'}}>
                      <button
                        onClick={() => handleEdit(func)}
                        style={buttonStyle(true)}
                        title="Editar função"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => handleDelete(func)}
                        style={buttonStyle(false)}
                        title="Excluir função"
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr style={totalRowStyle}>
                <td colSpan="4" style={{...headerStyle, ...totalRowStyle, fontWeight: 'bold', color: '#111827'}}>
                  Total PFNA (Pontos de Função Não Ajustados):
                </td>
                <td style={{...headerStyle, ...totalRowStyle, fontWeight: 'bold', color: '#2563eb', textAlign: 'center'}}>
                  {getPFNA()}
                </td>
                <td style={{...headerStyle, ...totalRowStyle}}></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {editingFunction && (
        <FunctionForm
          editingFunction={editingFunction}
          onClose={handleCloseForm}
        />
      )}

      <ConfirmModal
        isOpen={confirmDelete.isOpen}
        onClose={cancelDelete}
        onConfirm={confirmDeleteFunction}
        title="Excluir Função"
        message={`Tem certeza que deseja excluir esta função?\n\nTipo: ${confirmDelete.functionType}\n\nEsta ação não pode ser desfeita.`}
        type="danger"
      />
    </>
  );
}