import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '🚧 **Work in Progress**: This Modal component is currently under development. More features and variants will be added soon.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: { type: 'boolean' },
      description: 'Whether the modal is open',
    },
    title: {
      control: { type: 'text' },
      description: 'Modal title in header',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Modal size',
    },
    closeOnOverlayClick: {
      control: { type: 'boolean' },
      description: 'Close modal when clicking overlay',
    },
    closeOnEscape: {
      control: { type: 'boolean' },
      description: 'Close modal when pressing Escape key',
    },
    onClose: {
      action: 'closed',
      description: 'Close event handler',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 모달
export const Default: Story = {
  args: {
    closeOnOverlayClick: true,
    closeOnEscape: true,
    isOpen: false, // 기본적으로 열려있게 설정
    title: '기본 모달',
  },
  render: (args) => {
    // 스토리북에서 직접 상태 관리
    const [isOpen, setIsOpen] = useState(args.isOpen || false);

    const handleClose = () => {
      console.log('Modal is closing');
      setIsOpen(false);
      if (args.onClose) {
        args.onClose();
      }
    };

    return (
      <div style={{ padding: '2rem' }}>
        <Button
          label={isOpen ? '모달 열려있음' : '모달 열기'}
          variant="primary"
          onClick={() => setIsOpen(true)}
          disabled={isOpen}
        />
        <Modal {...args} isOpen={isOpen} onClose={handleClose}>
          <p>이것은 기본 모달입니다.</p>
          <p>X 버튼을 클릭하거나 바깥 영역을 클릭하여 닫을 수 있습니다.</p>
          <p
            style={{
              marginTop: '2rem',
              padding: '1rem',
              backgroundColor: '#f0f9ff',
              border: '1px solid #0ea5e9',
              borderRadius: '0.375rem',
              color: '#0c4a6e',
            }}
          >
            🚧 This component is under active development. More features coming
            soon!
          </p>
        </Modal>
      </div>
    );
  },
};
