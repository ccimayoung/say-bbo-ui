import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { createPortal } from 'react-dom';
import { ModalProps } from '../../types';

const getSizeStyles = (size: ModalProps['size']) => {
  switch (size) {
    case 'sm':
      return css`
        max-width: 400px;
        width: 90%;
      `;
    case 'lg':
      return css`
        max-width: 800px;
        width: 90%;
      `;
    case 'xl':
      return css`
        max-width: 1200px;
        width: 95%;
      `;
    default:
      return css`
        max-width: 600px;
        width: 90%;
      `;
  }
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContainer = styled.div<{ size: ModalProps['size'] }>`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  max-height: 90vh;
  overflow: hidden;
  animation: slideIn 0.2s ease-out;

  ${({ size }) => getSizeStyles(size)}

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(-10px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 0 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #6b7280;
  padding: 0.25rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f3f4f6;
    color: #374151;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const Content = styled.div`
  padding: 0 1.5rem 1.5rem 1.5rem;
  overflow-y: auto;
  max-height: calc(90vh - 120px);
`;

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className,
  ...props
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && closeOnEscape) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, closeOnEscape]);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget && closeOnOverlayClick) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const modalContent = (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer
        ref={modalRef}
        size={size}
        className={className}
        {...props}
      >
        {(title || closeOnOverlayClick) && (
          <Header>
            {title && <Title>{title}</Title>}
            <CloseButton onClick={onClose} aria-label="Close modal">
              ×
            </CloseButton>
          </Header>
        )}
        <Content>{children}</Content>
      </ModalContainer>
    </Overlay>
  );

  return createPortal(modalContent, document.body);
};
