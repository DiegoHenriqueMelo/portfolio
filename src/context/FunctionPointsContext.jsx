import { useReducer } from 'react';
import { FUNCTION_TYPES, INFLUENCE_FACTORS, PROGRAMMING_LANGUAGES, SYSTEM_TYPES, ISO_WORKING_HOURS } from '../utils/constants';
import { FunctionPointsContext } from './Context';

const initialState = {
  functions: [],
  influenceFactors: INFLUENCE_FACTORS.reduce((acc, factor) => {
    acc[factor] = 0;
    return acc;
  }, {}),
  projectConfig: {
    name: '',
    description: '',
    language: Object.keys(PROGRAMMING_LANGUAGES)[0],
    languages: [], // Para múltiplas linguagens
    systemType: Object.keys(SYSTEM_TYPES)[0],
    hourlyRate: 50,
    workingHoursPerDay: ISO_WORKING_HOURS.HOURS_PER_DAY,
    workingDaysPerMonth: ISO_WORKING_HOURS.DAYS_PER_MONTH
  }
};

const ACTIONS = {
  ADD_FUNCTION: 'ADD_FUNCTION',
  UPDATE_FUNCTION: 'UPDATE_FUNCTION',
  DELETE_FUNCTION: 'DELETE_FUNCTION',
  UPDATE_INFLUENCE_FACTOR: 'UPDATE_INFLUENCE_FACTOR',
  UPDATE_PROJECT_CONFIG: 'UPDATE_PROJECT_CONFIG',
  RESET_ALL: 'RESET_ALL'
};

function functionsReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_FUNCTION:
      return {
        ...state,
        functions: [...state.functions, { ...action.payload, id: Date.now() }]
      };
    
    case ACTIONS.UPDATE_FUNCTION:
      return {
        ...state,
        functions: state.functions.map(fn => 
          fn.id === action.payload.id ? { ...fn, ...action.payload } : fn
        )
      };
    
    case ACTIONS.DELETE_FUNCTION:
      return {
        ...state,
        functions: state.functions.filter(fn => fn.id !== action.payload)
      };
    
    case ACTIONS.UPDATE_INFLUENCE_FACTOR:
      return {
        ...state,
        influenceFactors: {
          ...state.influenceFactors,
          [action.payload.factor]: action.payload.value
        }
      };
    
    case ACTIONS.UPDATE_PROJECT_CONFIG:
      return {
        ...state,
        projectConfig: {
          ...state.projectConfig,
          ...action.payload
        }
      };
    
    case ACTIONS.RESET_ALL:
      return initialState;
    
    default:
      return state;
  }
}

export function FunctionPointsProvider({ children }) {
  const [state, dispatch] = useReducer(functionsReducer, initialState);

  const getWeight = (type, complexity) => {
    const complexityKey = complexity.toLowerCase() === 'simples' ? 'simple' :
                         complexity.toLowerCase() === 'médio' ? 'medium' : 'complex';
    return FUNCTION_TYPES[type][complexityKey];
  };

  const getFunctionResult = (func) => {
    const weight = getWeight(func.type, func.complexity);
    return func.occurrences * weight;
  };

  const getFPb = () => {
    return state.functions.reduce((total, func) => {
      return total + getFunctionResult(func);
    }, 0);
  };

  const getInfluenceFactorsSum = () => {
    return Object.values(state.influenceFactors).reduce((sum, value) => sum + value, 0);
  };

  const getAdjustmentValue = () => {
    // FÓRMULA EXATA: (soma dos níveis de influencia*0,01)+0,65 - JAMAIS ARREDONDE
    return (getInfluenceFactorsSum() * 0.01) + 0.65;
  };

  const getPFA = () => {
    // FÓRMULA EXATA: FP'b * PFA - JAMAIS ARREDONDE
    return getFPb() * getAdjustmentValue();
  };

  const getLinesOfCode = () => {
    // FÓRMULA EXATA: (valor de linguagem 1 + valor de linguagem 2)/2 - JAMAIS ARREDONDE
    
    // Se não há linguagens selecionadas, usa a linguagem padrão (compatibilidade)
    if (!state.projectConfig.languages || state.projectConfig.languages.length === 0) {
      return PROGRAMMING_LANGUAGES[state.projectConfig.language] || 20;
    }
    
    // Calcula LOC usando múltiplas linguagens: (lang1 + lang2)/2
    const totalLanguages = state.projectConfig.languages.length;
    const sumLocValues = state.projectConfig.languages.reduce((sum, lang) => {
      return sum + (PROGRAMMING_LANGUAGES[lang] || 20);
    }, 0);
    
    return sumLocValues / totalLanguages; // JAMAIS ARREDONDE
  };

  const getKLOC = () => {
    // FÓRMULA EXATA: (FP'b*PFA)*LOC - JAMAIS ARREDONDE
    const fpb = getFPb();
    const pfa = getAdjustmentValue();
    const loc = getLinesOfCode();
    return (fpb * pfa) * loc; // JAMAIS ARREDONDE
  };

  const getEffortInMonths = () => {
    // FÓRMULA EXATA: KLOC/Tipo do Sistema - JAMAIS ARREDONDE
    const kloc = getKLOC();
    const systemProductivity = SYSTEM_TYPES[state.projectConfig.systemType] || 2500;
    
    if (systemProductivity <= 0) return 0;
    return kloc / systemProductivity; // JAMAIS ARREDONDE
  };

  const getEffortInDays = () => {
    // MES É A PARTE INTEIRA - DIAS É A PARTE INTEIRA DE (DECIMAL DOS MESES*22)
    const totalMonths = getEffortInMonths(); // JAMAIS ARREDONDE
    const wholeMonths = Math.floor(totalMonths); // PARTE INTEIRA DOS MESES
    const decimalMonths = totalMonths - wholeMonths; // DECIMAL DOS MESES
    
    const daysFromDecimals = decimalMonths * 22; // DECIMAL DOS MESES*22
    const wholeDays = Math.floor(daysFromDecimals); // PARTE INTEIRA DOS DIAS
    
    return wholeDays; // DIAS É A PARTE INTEIRA - JAMAIS ARREDONDE
  };

  const getEffortInHours = () => {
    // HORAS É A PARTE INTEIRA DE (DECIMAL DOS DIAS*6)
    const totalMonths = getEffortInMonths(); // JAMAIS ARREDONDE
    const wholeMonths = Math.floor(totalMonths); // PARTE INTEIRA DOS MESES
    const decimalMonths = totalMonths - wholeMonths; // DECIMAL DOS MESES
    
    const daysFromDecimals = decimalMonths * 22; // DECIMAL DOS MESES*22
    const wholeDays = Math.floor(daysFromDecimals); // PARTE INTEIRA DOS DIAS
    const decimalDays = daysFromDecimals - wholeDays; // DECIMAL DOS DIAS
    
    const hoursFromDecimals = decimalDays * 6; // DECIMAL DOS DIAS*6
    const wholeHours = Math.floor(hoursFromDecimals); // PARTE INTEIRA DAS HORAS
    
    return wholeHours; // HORAS É A PARTE INTEIRA - JAMAIS ARREDONDE
  };

  const getEffortInMinutes = () => {
    // MINUTOS É A PARTE INTEIRA DE (DECIMAL DAS HORAS*60)
    const totalMonths = getEffortInMonths(); // JAMAIS ARREDONDE
    const wholeMonths = Math.floor(totalMonths); // PARTE INTEIRA DOS MESES
    const decimalMonths = totalMonths - wholeMonths; // DECIMAL DOS MESES
    
    const daysFromDecimals = decimalMonths * 22; // DECIMAL DOS MESES*22
    const wholeDays = Math.floor(daysFromDecimals); // PARTE INTEIRA DOS DIAS
    const decimalDays = daysFromDecimals - wholeDays; // DECIMAL DOS DIAS
    
    const hoursFromDecimals = decimalDays * 6; // DECIMAL DOS DIAS*6
    const wholeHours = Math.floor(hoursFromDecimals); // PARTE INTEIRA DAS HORAS
    const decimalHours = hoursFromDecimals - wholeHours; // DECIMAL DAS HORAS
    
    const minutesFromDecimals = decimalHours * 60; // DECIMAL DAS HORAS*60
    const wholeMinutes = Math.floor(minutesFromDecimals); // PARTE INTEIRA DOS MINUTOS
    
    return wholeMinutes; // MINUTOS É A PARTE INTEIRA - JAMAIS ARREDONDE
  };

  const getTotalCost = () => {
    // FÓRMULA EXATA: (KLOC/TIPO DO SISTEMA) * 132 * VALOR DA HORA - JAMAIS ARREDONDE
    const kloc = getKLOC();
    const systemProductivity = SYSTEM_TYPES[state.projectConfig.systemType] || 2500;
    const hourlyRate = state.projectConfig.hourlyRate;
    
    if (systemProductivity <= 0) return 0;
    
    return (kloc / systemProductivity) * 132 * hourlyRate; // JAMAIS ARREDONDE
  };

  const getProductivity = () => {
    const pfa = getPFA();
    const months = getEffortInMonths();
    return months > 0 ? pfa / months : 0; // Sem arredondamento
  };

  const getDebugValues = () => {
    const fpb = getFPb();
    const influenceSum = getInfluenceFactorsSum();
    const adjustmentValue = getAdjustmentValue();
    const pfa = getPFA();
    const linesOfCode = getLinesOfCode();
    const kloc = getKLOC();
    const systemProductivity = SYSTEM_TYPES[state.projectConfig.systemType] || 2500;
    const klocPerMonth = systemProductivity / 1000;
    const effortMonths = getEffortInMonths(); // VALOR COMPLETO SEM ARREDONDAMENTO
    
    // Cálculo passo a passo - JAMAIS ARREDONDADO
    const wholeMonths = Math.floor(effortMonths);
    const decimalMonths = effortMonths - wholeMonths;
    
    const daysFromDecimals = decimalMonths * 22; // VALOR COMPLETO
    const wholeDays = Math.floor(daysFromDecimals);
    const decimalDays = daysFromDecimals - wholeDays;
    
    const hoursFromDecimals = decimalDays * 6; // VALOR COMPLETO
    const wholeHours = Math.floor(hoursFromDecimals);
    const decimalHours = hoursFromDecimals - wholeHours;
    
    const minutesFromDecimals = decimalHours * 60; // VALOR COMPLETO
    
    return {
      fpb,
      influenceSum,
      adjustmentValue,
      pfa,
      linesOfCode,
      kloc,
      systemProductivity,
      klocPerMonth,
      effortMonths, // SEM ARREDONDAMENTO
      functions: state.functions.length,
      languages: state.projectConfig.languages || [state.projectConfig.language],
      // Cálculo detalhado - VALORES COMPLETOS
      wholeMonths,
      decimalMonths,
      daysFromDecimals, // VALOR COMPLETO (ex: 14.96)
      wholeDays,
      decimalDays,
      hoursFromDecimals, // VALOR COMPLETO (ex: 5.76)
      wholeHours,
      decimalHours,
      minutesFromDecimals // VALOR COMPLETO (ex: 45.6)
    };
  };

  const getEffortInMonthsOnly = () => {
    // RETORNA APENAS A PARTE INTEIRA DOS MESES
    const totalMonths = getEffortInMonths();
    return Math.floor(totalMonths); // PARTE INTEIRA DOS MESES
  };

  const getEffortInDaysOnly = () => {
    const totalDays = getEffortInDays();
    return Math.floor(totalDays); // Apenas a parte inteira dos dias
  };

  const getEffortInHoursOnly = () => {
    const totalHours = getEffortInHours();
    return Math.floor(totalHours); // Apenas a parte inteira das horas
  };

  const value = {
    state,
    dispatch,
    actions: ACTIONS,
    getWeight,
    getFunctionResult,
    getFPb,
    getInfluenceFactorsSum,
    getAdjustmentValue,
    getPFA,
    getLinesOfCode,
    getKLOC,
    getEffortInHours,
    getEffortInDays,
    getEffortInMonths,
    getEffortInMonthsOnly,
    getEffortInDaysOnly,
    getEffortInHoursOnly,
    getEffortInMinutes,
    getTotalCost,
    getProductivity,
    getDebugValues
  };

  return (
    <FunctionPointsContext.Provider value={value}>
      {children}
    </FunctionPointsContext.Provider>
  );
}