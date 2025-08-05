import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { defaultTheme } from '../styles';
import { fontHandleType, handleFontStyle } from '../styles/font';
import { OptionType, SelectProps } from './selectTypes';
import { Icon } from '../Icon/Icon';
import { columnStyle, rowStyle } from '../styles/layout';
import { useSwitch } from '../hooks/useSwitch';
import { useClickOutside } from '../hooks/useClickOutside';

export const Select: React.FC<SelectProps> = ({
  size = 'medium',
  placeholder,
  options,
  width,
  disabled,
  ...props
}) => {
  const [isOpened, , onClose, onToggle] = useSwitch();
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  useClickOutside(wrapperRef, onClose);

  const handleBoxClick = () => {
    if (disabled) return;
    onToggle();
  };

  const handleOptionClick = (option: OptionType) => {
    setSelectedOption(option);
    onClose();
  };

  return (
    <div
      ref={wrapperRef}
      css={[defaultWrapperStyle(width, disabled)]}
      {...props}
    >
      <section
        css={[
          selectBoxStyle(size, isOpened, selectedOption === null, disabled),
        ]}
        onClick={handleBoxClick}
      >
        {selectedOption?.label || placeholder}
        <Icon iconName="DownArrowIcon" rotate={isOpened ? 180 : 0} />
      </section>

      {isOpened && (
        <section css={optionListStyle(size, disabled)}>
          {options.length === 0 ? (
            <div css={noOptionsStyle(size)}>No Options</div>
          ) : (
            options.map((option) => (
              <section
                key={option.value}
                css={optionItemStyle(size)}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </section>
            ))
          )}
        </section>
      )}
    </div>
  );
};

const defaultWrapperStyle = (width?: string, disabled?: boolean) => css`
  ${columnStyle}
  background-color: ${defaultTheme.colors.white};
  width: ${width || '100%'};
  cursor: ${disabled ? 'default' : 'pointer'};
  opacity: ${disabled ? 0.6 : 1};
  transition: all 0.2s ease-in-out;
  gap: 2px;
`;

const selectBoxStyle = (
  size: SelectProps['size'] = 'medium',
  isOpened: boolean,
  isPlaceholder: boolean,
  disabled?: boolean
) => css`
  ${rowStyle}
  ${handleFontStyle(defaultTheme.bodyFontSize[size] as fontHandleType)}
  color: ${isPlaceholder
    ? defaultTheme.colors.gray.gray200
    : defaultTheme.colors.black};
  border-radius: ${defaultTheme.borderRadius[size]};
  border: 1px solid
    ${disabled
      ? defaultTheme.colors.gray.gray400
      : isOpened
      ? defaultTheme.colors.primary.main
      : defaultTheme.colors.gray.gray200};
  justify-content: space-between;
  padding: ${defaultTheme.padding[size]};
`;

const optionListStyle = (
  size: SelectProps['size'] = 'medium',
  disabled?: boolean
) => css`
  ${columnStyle}
  width: 100%;
  border-radius: ${defaultTheme.borderRadius[size]};
  border: 1px solid
    ${disabled
      ? defaultTheme.colors.gray.gray400
      : defaultTheme.colors.gray.gray200};
`;

const optionItemStyle = (size: SelectProps['size'] = 'medium') => css`
  width: 100%;
  padding: ${defaultTheme.padding[size]};
  transition: background 0.1s;
  ${handleFontStyle(defaultTheme.bodyFontSize[size] as fontHandleType)}
  &:hover {
    background: ${defaultTheme.colors.primary.hover};
    color: ${defaultTheme.colors.white};
  }
  &:active {
    background: ${defaultTheme.colors.primary.active};
    color: ${defaultTheme.colors.white};
  }
`;

const noOptionsStyle = (size: SelectProps['size'] = 'medium') => css`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${handleFontStyle(defaultTheme.bodyFontSize[size] as fontHandleType)}
  color: ${defaultTheme.colors.gray.gray200};
`;
