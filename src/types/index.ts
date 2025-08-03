import {
  ReactNode,
  ButtonHTMLAttributes,
  HTMLAttributes,
  ReactElement,
  ComponentType,
} from 'react';

export interface BaseProps {
  children?: ReactNode;
  className?: string;
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    BaseProps {
  variant?: 'primary' | 'outline' | 'underline' | 'transparent';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  label?: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

export interface ModalProps extends HTMLAttributes<HTMLDivElement>, BaseProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

export interface Theme {
  colors: {
    white: string;
    black: string;
    primary: {
      main: string;
      hover: string;
      active: string;
      disabled: string;
    };
    gray: {
      gray000: string;
      gray100: string;
      gray200: string;
      gray300: string;
    };
    status: {
      success: string;
      warning: string;
      error: string;
    };
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
    circle: string;
  };
}
