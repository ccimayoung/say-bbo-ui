import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    closeOnOverlayClick: {
      control: { type: 'boolean' },
    },
    closeOnEscape: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const ModalWrapper = ({ children, ...props }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} {...props}>
        {children}
      </Modal>
    </>
  );
};

export const Default: Story = {
  render: (args) => (
    <ModalWrapper {...args}>
      <p>This is a default modal with some content.</p>
      <p>You can close it by clicking the X button or clicking outside.</p>
    </ModalWrapper>
  ),
};

export const WithTitle: Story = {
  render: (args) => (
    <ModalWrapper title="Modal Title" {...args}>
      <p>This modal has a title.</p>
      <p>The title appears in the header along with the close button.</p>
    </ModalWrapper>
  ),
};

export const Small: Story = {
  render: (args) => (
    <ModalWrapper size="sm" title="Small Modal" {...args}>
      <p>This is a small modal.</p>
    </ModalWrapper>
  ),
};

export const Large: Story = {
  render: (args) => (
    <ModalWrapper size="lg" title="Large Modal" {...args}>
      <p>This is a large modal with more space.</p>
      <p>It's useful for displaying more content or forms.</p>
      <div
        style={{
          height: '200px',
          background: '#f3f4f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p>Scrollable content area</p>
      </div>
    </ModalWrapper>
  ),
};

export const ExtraLarge: Story = {
  render: (args) => (
    <ModalWrapper size="xl" title="Extra Large Modal" {...args}>
      <p>This is an extra large modal.</p>
      <p>Perfect for dashboards or complex forms.</p>
      <div
        style={{
          height: '400px',
          background: '#f3f4f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p>Large content area</p>
      </div>
    </ModalWrapper>
  ),
};

export const NoOverlayClick: Story = {
  render: (args) => (
    <ModalWrapper
      closeOnOverlayClick={false}
      title="No Overlay Click"
      {...args}
    >
      <p>This modal cannot be closed by clicking outside.</p>
      <p>You must use the X button or press Escape to close it.</p>
    </ModalWrapper>
  ),
};

export const NoEscape: Story = {
  render: (args) => (
    <ModalWrapper closeOnEscape={false} title="No Escape" {...args}>
      <p>This modal cannot be closed by pressing Escape.</p>
      <p>You must use the X button or click outside to close it.</p>
    </ModalWrapper>
  ),
};

export const ComplexContent: Story = {
  render: (args) => (
    <ModalWrapper size="lg" title="Complex Content" {...args}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h3>Form Example</h3>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              marginTop: '0.25rem',
            }}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              marginTop: '0.25rem',
            }}
          />
        </div>
        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            justifyContent: 'flex-end',
            marginTop: '1rem',
          }}
        >
          <Button variant="outline" size="small">
            Cancel
          </Button>
          <Button size="small">Submit</Button>
        </div>
      </div>
    </ModalWrapper>
  ),
};
