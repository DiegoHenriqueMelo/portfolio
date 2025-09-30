export const FUNCTION_TYPES = {
  'Entrada': { simple: 3, medium: 4, complex: 6 },
  'Saída': { simple: 4, medium: 5, complex: 7 },
  'Consulta': { simple: 3, medium: 4, complex: 6 },
  'Arquivo Lógico Interno': { simple: 7, medium: 10, complex: 15 },
  'Arquivo Externo de Interface': { simple: 5, medium: 7, complex: 10 }
};

export const COMPLEXITY_LEVELS = ['Simples', 'Médio', 'Complexo'];

export const INFLUENCE_FACTORS = [
  'Comunicação de dados',
  'Performance', 
  'Volume de transações',
  'Eficiência do usuário final',
  'Processamento complexo',
  'Facilidade de implantação',
  'Múltiplos locais',
  'Processamento distribuído',
  'Utilização de equipamento',
  'Entrada de dados on-line',
  'Atualização on-line',
  'Reutilização de código',
  'Facilidade operacional',
  'Facilidade de mudanças'
];

export const PROGRAMMING_LANGUAGES = {
  'Cobol': 100,
  'Pascal': 90,
  'C++': 30,
  'Java / Delphi / Visual Basic': 20,
  'Geradores de Código (SQL + HTML)': 15
};

export const SYSTEM_TYPES = {
  'Sistema Comercial': 2500,
  'Comércio Eletrônico': 3600,
  'Sistema Web': 3300
};

export const ISO_WORKING_HOURS = {
  HOURS_PER_MONTH: 132,
  DAYS_PER_MONTH: 22,
  HOURS_PER_DAY: 6,
  MINUTES_PER_HOUR: 60
};

export const EXPERIENCE_LEVELS = {
  'Junior (0-2 anos)': 0.7,
  'Pleno (2-5 anos)': 1.0,
  'Senior (5+ anos)': 1.4,
  'Especialista (8+ anos)': 1.8
};