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
      gray100: '#444444',
      gray200: '#666666',
      gray300: '#999999',
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
};
