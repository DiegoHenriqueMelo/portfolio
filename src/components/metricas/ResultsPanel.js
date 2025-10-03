import { useFunctionPoints } from '../../hooks/useFunctionPoints';
import { SYSTEM_TYPES } from '../../utils/constants';
import jsPDF from 'jspdf';

export default function ResultsPanel() {
  const { 
    state, 
    getFPb, 
    getInfluenceFactorsSum, 
    getAdjustmentValue, 
    getPFA,
    getLinesOfCode,
    getKLOC,
    getEffortInMonths,
    getEffortInMonthsOnly,
    getEffortInDaysOnly,
    getEffortInHoursOnly,
    getEffortInMinutes,
    getTotalCost,
    getFunctionResult
  } = useFunctionPoints();



  const fpb = getFPb();
  const influenceSum = getInfluenceFactorsSum();
  const adjustmentValue = getAdjustmentValue();
  const pfa = getPFA();
  const linesOfCode = getLinesOfCode();
  const kloc = getKLOC();
  const effortMonths = getEffortInMonths();
  const effortMonthsOnly = getEffortInMonthsOnly();
  const effortDaysOnly = getEffortInDaysOnly();
  const effortHoursOnly = getEffortInHoursOnly();
  const effortMinutes = getEffortInMinutes();
  const totalCost = getTotalCost();

  const exportToPDF = () => {
    const doc = new jsPDF();
    let yPosition = 20;
    
    // Configurações do documento
    doc.setFont('helvetica');
    
    // Título principal
    doc.setFontSize(20);
    doc.setTextColor(40, 40, 40);
    doc.text('RELATÓRIO DE ANÁLISE DE PONTOS DE FUNÇÃO', 20, yPosition);
    yPosition += 15;
    
    // Data de geração
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.text(`Gerado em: ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR')}`, 20, yPosition);
    yPosition += 20;
    
    // Informações do projeto
    doc.setFontSize(14);
    doc.setTextColor(40, 40, 40);
    doc.text('INFORMAÇÕES DO PROJETO', 20, yPosition);
    yPosition += 10;
    
    doc.setFontSize(10);
    doc.text(`Nome: ${state.projectConfig.name || 'Não informado'}`, 20, yPosition);
    yPosition += 7;
    doc.text(`Descrição: ${state.projectConfig.description || 'Não informada'}`, 20, yPosition);
    yPosition += 7;
    doc.text(`Tipo de Sistema: ${state.projectConfig.systemType}`, 20, yPosition);
    yPosition += 7;
    doc.text(`Produtividade: ${SYSTEM_TYPES[state.projectConfig.systemType]} LOC/mês`, 20, yPosition);
    yPosition += 7;
    doc.text(`Valor por Hora: R$ ${state.projectConfig.hourlyRate}`, 20, yPosition);
    yPosition += 7;
    
    // Linguagens selecionadas
    const languages = (state.projectConfig.languages && state.projectConfig.languages.length > 0) 
      ? state.projectConfig.languages.join(', ')
      : state.projectConfig.language;
    doc.text(`Linguagens: ${languages}`, 20, yPosition);
    yPosition += 15;
    
    // Funções cadastradas
    if (state.functions.length > 0) {
      doc.setFontSize(14);
      doc.text('FUNÇÕES CADASTRADAS', 20, yPosition);
      yPosition += 10;
      
      doc.setFontSize(9);
      doc.text('TIPO', 20, yPosition);
      doc.text('OCORRÊNCIAS', 80, yPosition);
      doc.text('COMPLEXIDADE', 120, yPosition);
      doc.text('RESULTADO (PF)', 160, yPosition);
      yPosition += 5;
      
      // Linha separadora
      doc.line(20, yPosition, 190, yPosition);
      yPosition += 5;
      
      state.functions.forEach(func => {
        const result = getFunctionResult(func);
        doc.text(func.type.substring(0, 25), 20, yPosition);
        doc.text(func.occurrences.toString(), 80, yPosition);
        doc.text(func.complexity, 120, yPosition);
        doc.text(result.toString(), 160, yPosition);
        yPosition += 5;
      });
      
      // Total
      doc.line(20, yPosition, 190, yPosition);
      yPosition += 5;
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text(`TOTAL FP'b: ${fpb}`, 20, yPosition);
      doc.setFont('helvetica', 'normal');
      yPosition += 15;
    }
    
    // Resultados finais
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('RESULTADOS FINAIS', 20, yPosition);
    yPosition += 10;
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(`FP'b (Ponto de Função Bruto): ${fpb}`, 20, yPosition);
    yPosition += 7;
    doc.text(`Soma dos Fatores de Influência: ${influenceSum}`, 20, yPosition);
    yPosition += 7;
    doc.text(`VA (Valor de Ajuste): ${adjustmentValue.toFixed(4)}`, 20, yPosition);
    yPosition += 7;
    doc.text(`PFA (Pontos de Função Ajustados): ${pfa.toFixed(4)}`, 20, yPosition);
    yPosition += 7;
    doc.text(`LOC (Linhas de Código): ${linesOfCode.toFixed(0)}`, 20, yPosition);
    yPosition += 7;
    doc.text(`KLOC (Milhares de Linhas): ${kloc.toFixed(4)}`, 20, yPosition);
    yPosition += 7;
    doc.text(`PRAZO: ${effortMonthsOnly} meses, ${effortDaysOnly} dias, ${effortHoursOnly} horas, ${Math.floor(effortMinutes)} minutos`, 20, yPosition);
    yPosition += 7;
    doc.text(`CUSTO TOTAL: R$ ${totalCost.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`, 20, yPosition);
    yPosition += 15;
    
    // Fórmulas utilizadas
    if (yPosition < 250) {
      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text('FÓRMULAS UTILIZADAS', 20, yPosition);
      yPosition += 10;
      
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.text('• FP\'b: Soma dos resultados de todas as funções', 20, yPosition);
      yPosition += 6;
      doc.text('• VA: 0,65 + (0,01 × soma dos fatores de influência)', 20, yPosition);
      yPosition += 6;
      doc.text('• PFA: FP\'b × VA', 20, yPosition);
      yPosition += 6;
      doc.text('• KLOC: (FP\'b × PFA) × LOC', 20, yPosition);
      yPosition += 6;
      doc.text('• Prazo: KLOC ÷ Tipo do Sistema', 20, yPosition);
      yPosition += 6;
      doc.text('• Custo: (KLOC ÷ Tipo do Sistema) × 132 × Valor/Hora', 20, yPosition);
    }
    
    // Salvar o PDF
    const fileName = `relatorio-pontos-funcao-${new Date().toISOString().split('T')[0]}.pdf`;
    doc.save(fileName);
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
          <h3 style={cardTitleStyle('#7c3aed')}>FP'b</h3>
          <p style={cardValueStyle('#8b5cf6')}>{fpb}</p>
          <p style={cardSubtitleStyle('#7c3aed')}>Ponto de Função Bruto</p>
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

        {/* COMPONENTE DE ESFORÇO SUPER BONITO - FORMATO: MES/DIAS/HORA/MIN */}
        <div style={{
          ...cardStyle('#e0f2fe'), 
          gridColumn: 'span 2',
          background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
          border: '2px solid #0284c7',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decoração de fundo */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '100px',
            height: '100px',
            background: 'rgba(2, 132, 199, 0.1)',
            borderRadius: '50%'
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 style={{
              ...cardTitleStyle('#0284c7'),
              fontSize: '18px',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              ⏱️ Prazo de Desenvolvimento
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '12px',
              marginBottom: '16px'
            }}>
              {/* MESES */}
              <div style={{
                backgroundColor: 'rgba(2, 132, 199, 0.1)',
                padding: '12px',
                borderRadius: '8px',
                textAlign: 'center',
                border: '1px solid rgba(2, 132, 199, 0.2)'
              }}>
                <div style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#0284c7',
                  lineHeight: '1'
                }}>
                  {effortMonthsOnly}
                </div>
                <div style={{
                  fontSize: '11px',
                  color: '#0369a1',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginTop: '2px'
                }}>
                  MESES
                </div>
              </div>

              {/* DIAS */}
              <div style={{
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                padding: '12px',
                borderRadius: '8px',
                textAlign: 'center',
                border: '1px solid rgba(34, 197, 94, 0.2)'
              }}>
                <div style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#22c55e',
                  lineHeight: '1'
                }}>
                  {effortDaysOnly}
                </div>
                <div style={{
                  fontSize: '11px',
                  color: '#16a34a',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginTop: '2px'
                }}>
                  DIAS
                </div>
              </div>

              {/* HORAS */}
              <div style={{
                backgroundColor: 'rgba(251, 146, 60, 0.1)',
                padding: '12px',
                borderRadius: '8px',
                textAlign: 'center',
                border: '1px solid rgba(251, 146, 60, 0.2)'
              }}>
                <div style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#fb923c',
                  lineHeight: '1'
                }}>
                  {effortHoursOnly}
                </div>
                <div style={{
                  fontSize: '11px',
                  color: '#ea580c',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginTop: '2px'
                }}>
                  HORAS
                </div>
              </div>

              {/* MINUTOS */}
              <div style={{
                backgroundColor: 'rgba(168, 85, 247, 0.1)',
                padding: '12px',
                borderRadius: '8px',
                textAlign: 'center',
                border: '1px solid rgba(168, 85, 247, 0.2)'
              }}>
                <div style={{
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: '#a855f7',
                  lineHeight: '1'
                }}>
                  {Math.floor(effortMinutes)}
                </div>
                <div style={{
                  fontSize: '11px',
                  color: '#9333ea',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  marginTop: '2px'
                }}>
                  MIN
                </div>
              </div>
            </div>

            {/* Resumo elegante */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              padding: '12px',
              borderRadius: '6px',
              border: '1px solid rgba(2, 132, 199, 0.2)',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '13px',
                color: '#0369a1',
                fontWeight: '500'
              }}>
                📊 Prazo total baseado em: {effortMonths.toFixed(4)} meses
              </div>
            </div>
          </div>
        </div>

        <div style={cardStyle('#fecaca')}>
          <h3 style={cardTitleStyle('#dc2626')}>💰 Custo Total</h3>
          <p style={cardValueStyle('#ef4444')}>R$ {totalCost.toLocaleString('pt-BR', {minimumFractionDigits: 2})}</p>
          <p style={cardSubtitleStyle('#dc2626')}>R$ {state.projectConfig.hourlyRate}/hora</p>
        </div>
      </div>

      <div style={formulasStyle}>
        <h3 style={{ fontWeight: '500', color: '#111827', marginBottom: '8px', margin: '0 0 8px 0' }}>
          Fórmulas Utilizadas:
        </h3>
        <ul style={formulasListStyle}>
          <li style={{ marginBottom: '4px' }}>
            <strong>FP'b:</strong> Soma dos resultados de todas as funções
          </li>
          <li style={{ marginBottom: '4px' }}>
            <strong>VA:</strong> 0,65 + (0,01 × soma dos fatores de influência)
          </li>
          <li style={{ marginBottom: '4px' }}>
            <strong>PFA:</strong> FP'b × VA
          </li>
          <li style={{ marginBottom: '4px' }}>
            <strong>KLOC:</strong> (FP'b × PFA) × LOC
          </li>
          <li style={{ marginBottom: '4px' }}>
            <strong>Prazo:</strong> KLOC ÷ Tipo do Sistema
          </li>
          <li>
            <strong>Resultado da função:</strong> Nº de ocorrências × Peso
          </li>
        </ul>
      </div>


    </div>
  );
}