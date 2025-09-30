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

  const getPFNA = () => {
    return state.functions.reduce((total, func) => {
      return total + getFunctionResult(func);
    }, 0);
  };

  const getInfluenceFactorsSum = () => {
    return Object.values(state.influenceFactors).reduce((sum, value) => sum + value, 0);
  };

  const getAdjustmentValue = () => {
    return 0.65 + (0.01 * getInfluenceFactorsSum());
  };

  const getPFA = () => {
    return getPFNA() * getAdjustmentValue();
  };

  const getLinesOfCode = () => {
    const pfa = getPFA();
    const locPerPF = PROGRAMMING_LANGUAGES[state.projectConfig.language] || 20;
    return Math.round(pfa * locPerPF);
  };

  const getKLOC = () => {
    return getLinesOfCode() / 1000;
  };

  const getEffortInMonths = () => {
    const kloc = getKLOC();
    const productivity = SYSTEM_TYPES[state.projectConfig.systemType] || 2500;
    const productivityKLOC = productivity / 1000;
    
    if (productivityKLOC <= 0) return 0;
    return Math.round((kloc / productivityKLOC) * 10) / 10;
  };

  const getEffortInDays = () => {
    const months = getEffortInMonths();
    return Math.round(months * ISO_WORKING_HOURS.DAYS_PER_MONTH);
  };

  const getEffortInHours = () => {
    const days = getEffortInDays();
    return Math.round(days * ISO_WORKING_HOURS.HOURS_PER_DAY);
  };

  const getTotalCost = () => {
    const months = getEffortInMonths();
    const isoHoursPerMonth = ISO_WORKING_HOURS.HOURS_PER_MONTH;
    return Math.round(months * isoHoursPerMonth * state.projectConfig.hourlyRate);
  };

  const getProductivity = () => {
    const pfa = getPFA();
    const months = getEffortInMonths();
    return months > 0 ? Math.round((pfa / months) * 10) / 10 : 0;
  };

  const value = {
    state,
    dispatch,
    actions: ACTIONS,
    getWeight,
    getFunctionResult,
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
  };

  return (
    <FunctionPointsContext.Provider value={value}>
      {children}
    </FunctionPointsContext.Provider>
  );
}