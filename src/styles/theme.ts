import { Theme } from '../types';

export const defaultTheme: Theme = {
  colors: {
    white: '#ffffff',
    black: '#292929',
    primary: {
      main: '#227BFF',
      hover: '#8FBBFC',
      active: '#0A44BF',
      disabled: '#D8D8D8',
    },
    gray: {
      gray000: '#222222',
      gray100: '#707070',
      gray200: '#AAAAAA',
      gray300: '#BEBEBE',
      gray400: '#E3E3E3',
    },
    status: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
    },
  },
  borderRadius: {
    small: '0.25rem',
    medium: '0.375rem',
    large: '0.5rem',
    circle: '9999px',
  },
  padding: {
    small: '4px 8px',
    medium: '6px 12px',
    large: '8px 16px',
  },
  bodyFontSize: {
    small: 'Body_S',
    medium: 'Body_M',
    large: 'Body_L',
  },
};
