import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    width: {
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: '300px',
          padding: '20px',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic option data
const basicOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

const manyOptions = [
  { label: 'Seoul', value: 'seoul' },
  { label: 'Busan', value: 'busan' },
  { label: 'Daegu', value: 'daegu' },
  { label: 'Incheon', value: 'incheon' },
  { label: 'Gwangju', value: 'gwangju' },
  { label: 'Daejeon', value: 'daejeon' },
  { label: 'Ulsan', value: 'ulsan' },
  { label: 'Sejong', value: 'sejong' },
  { label: 'Gyeonggi-do', value: 'gyeonggi' },
  { label: 'Gangwon-do', value: 'gangwon' },
];

// Size comparison story
export const SizeComparison: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '20px',
        alignItems: 'flex-start',
        minHeight: '280px',
        padding: '20px',
      }}
    >
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Small</h4>
        <Select
          placeholder="Small"
          options={basicOptions}
          size="small"
          width="180px"
        />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Medium</h4>
        <Select
          placeholder="Medium"
          options={basicOptions}
          size="medium"
          width="200px"
        />
      </div>
      <div>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '14px' }}>Large</h4>
        <Select
          placeholder="Large"
          options={basicOptions}
          size="large"
          width="220px"
        />
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

// Disabled state
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled Select',
    options: basicOptions,
    size: 'medium',
    width: '240px',
    disabled: true,
  },
};

// Empty options case
export const EmptyOptions: Story = {
  args: {
    placeholder: 'No options available',
    options: [],
    size: 'medium',
    width: '240px',
  },
};

// Many options case
export const ManyOptions: Story = {
  args: {
    placeholder: 'Please select a region',
    options: manyOptions,
    size: 'medium',
    width: '240px',
  },
  parameters: {
    layout: 'padded',
    viewport: {
      defaultViewport: 'responsive',
    },
  },
};
