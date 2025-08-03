import React from 'react';
import { css } from '@emotion/react';
import { ButtonProps } from '../../types';
import { handleFontStyle } from '../../styles/font';
import { defaultTheme } from '../../all';

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  disabled,
  onClick,
  startIcon,
  endIcon,
  ...props
}) => {
  const handleClick = () => {
    if (disabled) return;
    onClick?.();
  };

  return (
    <button
      css={[defaultStyle, handleVariantStyles(variant), handleSizeStyles(size)]}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      {startIcon && startIcon}
      {label}
      {endIcon && endIcon}
    </button>
  );
};

const defaultStyle = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
  border: none;
  text-decoration: none;
  position: relative;
  gap: 4px;

  &:disabled {
    cursor: default;
  }
`;

const handleVariantStyles = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'primary':
      return css`
        background-color: ${defaultTheme.colors.primary.main};
        color: ${defaultTheme.colors.white};
        &:disabled {
          background-color: ${defaultTheme.colors.primary.disabled};
          color: ${defaultTheme.colors.white};
        }
        &:hover:not(:disabled) {
          background-color: ${defaultTheme.colors.primary.hover};
        }
        &:active:not(:disabled) {
          background-color: ${defaultTheme.colors.primary.active};
        }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: ${defaultTheme.colors.primary.main};
        border: 1px solid ${defaultTheme.colors.primary.main};
        &:disabled {
          border: 1px solid ${defaultTheme.colors.primary.disabled};
          color: ${defaultTheme.colors.primary.disabled};
        }
        &:hover:not(:disabled) {
          border: 1px solid ${defaultTheme.colors.primary.hover};
          color: ${defaultTheme.colors.primary.hover};
        }
        &:active:not(:disabled) {
          border: 1px solid ${defaultTheme.colors.primary.active};
          color: ${defaultTheme.colors.primary.active};
        }
      `;
    case 'underline':
      return css`
        background-color: transparent;
        color: ${defaultTheme.colors.primary.main};
        text-decoration: underline;
        &:disabled {
          color: ${defaultTheme.colors.primary.disabled};
        }
        &:hover:not(:disabled) {
          color: ${defaultTheme.colors.primary.hover};
        }
        &:active:not(:disabled) {
          color: ${defaultTheme.colors.primary.active};
        }
      `;
    case 'transparent':
      return css`
        background-color: transparent;
        color: ${defaultTheme.colors.primary.main};
        border: none;
        &:disabled {
          color: ${defaultTheme.colors.primary.disabled};
        }
        &:hover:not(:disabled) {
          color: ${defaultTheme.colors.primary.hover};
        }
        &:active:not(:disabled) {
          color: ${defaultTheme.colors.primary.active};
        }
      `;
  }
};

const handleSizeStyles = (size: ButtonProps['size']) => {
  switch (size) {
    case 'small':
      return css`
        padding: 4px 8px;
        border-radius: ${defaultTheme.borderRadius.small};
        ${handleFontStyle('Body_S')}
      `;
    case 'medium':
      return css`
        padding: 6px 12px;
        border-radius: ${defaultTheme.borderRadius.medium};
        ${handleFontStyle('Body_M')}
      `;
    case 'large':
      return css`
        padding: 8px 16px;
        border-radius: ${defaultTheme.borderRadius.large};
        ${handleFontStyle('Body_L')}
      `;
  }
};
