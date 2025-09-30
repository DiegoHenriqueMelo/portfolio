import { useContext } from 'react';
import { FunctionPointsContext } from '../context/Context';

export function useFunctionPoints() {
  const context = useContext(FunctionPointsContext);
  if (!context) {
    throw new Error('useFunctionPoints must be used within a FunctionPointsProvider');
  }
  return context;
}