import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
    />
  </svg>
);

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Button text content',
    },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'outline', 'underline', 'transparent'],
      description: 'Button variant style',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the button',
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button label="Primary" variant="primary" />
      <Button label="Outline" variant="outline" />
      <Button label="Underline" variant="underline" />
      <Button label="Transparent" variant="transparent" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button label="Small" size="small" />
      <Button label="Medium" size="medium" />
      <Button label="Large" size="large" />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button
        label="Click me!"
        variant="primary"
        onClick={() => alert('Primary button clicked!')}
      />
      <Button
        label="With Icon"
        variant="outline"
        startIcon={<PlusIcon />}
        onClick={() => alert('Icon button clicked!')}
      />
      <Button
        label="Disabled"
        variant="primary"
        disabled
        onClick={() => alert('This should not fire')}
      />
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Button label="Start Icon" startIcon={<PlusIcon />} variant="primary" />
      <Button label="End Icon" endIcon={<ArrowIcon />} variant="primary" />
      <Button
        label="Both Icons"
        startIcon={<PlusIcon />}
        endIcon={<ArrowIcon />}
        variant="outline"
      />
    </div>
  ),
};
