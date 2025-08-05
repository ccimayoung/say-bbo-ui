import { ButtonHTMLAttributes, ReactElement } from 'react';
import { BaseProps } from '../../types';

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
