import React from 'react';
import { css } from '@emotion/react';
import { fontHandleType, handleFontStyle } from '../../styles/font';
import { defaultTheme } from '../../styles';
import { ButtonProps } from './buttonTypes';

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
      css={[defaultStyle, handleVariantStyles(variant), sizeStyle(size)]}
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

const sizeStyle = (size: ButtonProps['size'] = 'small') => css`
  padding: ${defaultTheme.padding[size]};
  border-radius: ${defaultTheme.borderRadius[size]};
  ${handleFontStyle(defaultTheme.bodyFontSize[size] as fontHandleType)}
`;
