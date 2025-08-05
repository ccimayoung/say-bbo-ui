import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Icon, ICON_COMPONENTS, iconNameType } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    iconName: {
      control: 'select',
      options: Object.keys(ICON_COMPONENTS),
    },
    width: {
      control: { type: 'range', min: 12, max: 128, step: 2 },
    },
    height: {
      control: { type: 'range', min: 12, max: 128, step: 2 },
    },
    rotate: {
      control: { type: 'range', min: 0, max: 360, step: 15 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Size variations
export const SizeVariations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          12px
        </div>
        <Icon iconName="DownArrowIcon" width={12} height={12} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          16px
        </div>
        <Icon iconName="DownArrowIcon" width={16} height={16} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          24px (default)
        </div>
        <Icon iconName="DownArrowIcon" width={24} height={24} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          32px
        </div>
        <Icon iconName="DownArrowIcon" width={32} height={32} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          48px
        </div>
        <Icon iconName="DownArrowIcon" width={48} height={48} />
      </div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ marginBottom: '8px', fontSize: '12px', color: '#666' }}>
          64px
        </div>
        <Icon iconName="DownArrowIcon" width={64} height={64} />
      </div>
    </div>
  ),
};

// Icon gallery - shows all available icons
export const IconGallery: Story = {
  render: () => {
    const iconNames = Object.keys(ICON_COMPONENTS) as iconNameType[];

    return (
      <div style={{ maxWidth: '600px' }}>
        <div
          style={{
            marginBottom: '20px',
            padding: '16px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            fontSize: '14px',
          }}
        >
          <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>
            Available Icons ({iconNames.length})
          </h3>
          <p style={{ margin: 0, color: '#666' }}>
            Click on any icon to copy its name. All icons are 32px size for
            consistency.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: '16px',
          }}
        >
          {iconNames.map((iconName) => (
            <div
              key={iconName}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backgroundColor: '#fff',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f5f5f5';
                e.currentTarget.style.borderColor = '#007bff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.borderColor = '#e0e0e0';
              }}
              onClick={() => {
                navigator.clipboard.writeText(iconName);
                alert(`Copied: ${iconName}`);
              }}
              title={`Click to copy: ${iconName}`}
            >
              <Icon iconName={iconName} width={32} height={32} />
              <div
                style={{
                  marginTop: '8px',
                  fontSize: '11px',
                  textAlign: 'center',
                  wordBreak: 'break-word',
                  color: '#333',
                }}
              >
                {iconName}
              </div>
            </div>
          ))}
        </div>

        {iconNames.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: '32px',
              color: '#666',
              fontSize: '14px',
            }}
          >
            No icons registered yet. Add icons to ICON_COMPONENTS in Icon.tsx
          </div>
        )}
      </div>
    );
  },
};

// Interactive playground
export const InteractivePlayground: Story = {
  render: () => {
    const [selectedIcon, setSelectedIcon] =
      React.useState<iconNameType>('DownArrowIcon');
    const [size, setSize] = React.useState(32);
    const [rotation, setRotation] = React.useState(0);

    const iconNames = Object.keys(ICON_COMPONENTS) as iconNameType[];

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          maxWidth: '500px',
        }}
      >
        {/* Icon Display */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '120px',
            border: '2px dashed #e0e0e0',
            borderRadius: '8px',
            backgroundColor: '#fafafa',
          }}
        >
          <Icon
            iconName={selectedIcon}
            width={size}
            height={size}
            rotate={rotation}
          />
        </div>

        {/* Controls */}
        <div
          style={{
            padding: '20px',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
              }}
            >
              Icon:
            </label>
            <select
              value={selectedIcon}
              onChange={(e) => setSelectedIcon(e.target.value as iconNameType)}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ddd',
              }}
            >
              {iconNames.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
              }}
            >
              Size: {size}px
            </label>
            <input
              type="range"
              min="12"
              max="96"
              step="2"
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>

          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
              }}
            >
              Rotation: {rotation}°
            </label>
            <input
              type="range"
              min="0"
              max="360"
              step="15"
              value={rotation}
              onChange={(e) => setRotation(Number(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>

          {/* Code Output */}
          <div>
            <label
              style={{
                display: 'block',
                marginBottom: '8px',
                fontWeight: '500',
              }}
            >
              Generated Code:
            </label>
            <code
              style={{
                display: 'block',
                padding: '12px',
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '4px',
                fontSize: '12px',
                fontFamily: 'Monaco, Consolas, monospace',
                wordBreak: 'break-all',
              }}
            >
              {`<Icon iconName="${selectedIcon}" width={${size}} height={${size}} rotate={${rotation}} />`}
            </code>
          </div>
        </div>
      </div>
    );
  },
};

// Usage examples
export const UsageExamples: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        maxWidth: '600px',
      }}
    >
      <div>
        <h4 style={{ margin: '0 0 16px 0', fontSize: '16px' }}>
          Common Use Cases
        </h4>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Button with icon */}
          <div
            style={{
              padding: '16px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
            }}
          >
            <h5
              style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}
            >
              Button with Icon
            </h5>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  border: '1px solid #007bff',
                  borderRadius: '4px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                <Icon iconName="PlusIcon" width={16} height={16} />
                Add Item
              </button>
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  border: '1px solid #dc3545',
                  borderRadius: '4px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                <Icon iconName="XIcon" width={16} height={16} />
                Delete
              </button>
            </div>
          </div>

          {/* Navigation arrows */}
          <div
            style={{
              padding: '16px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
            }}
          >
            <h5
              style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}
            >
              Navigation Arrows
            </h5>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <button
                style={{
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                }}
              >
                <Icon
                  iconName="DownArrowIcon"
                  width={16}
                  height={16}
                  rotate={90}
                />
              </button>
              <span>Page Navigation</span>
              <button
                style={{
                  padding: '8px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                }}
              >
                <Icon
                  iconName="DownArrowIcon"
                  width={16}
                  height={16}
                  rotate={270}
                />
              </button>
            </div>
          </div>

          {/* Modal close button */}
          <div
            style={{
              padding: '16px',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
            }}
          >
            <h5
              style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}
            >
              Modal Close Button
            </h5>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px',
                backgroundColor: '#f8f9fa',
                borderRadius: '4px',
                border: '1px solid #ddd',
              }}
            >
              <span>Modal Title</span>
              <button
                style={{
                  padding: '4px',
                  border: 'none',
                  borderRadius: '4px',
                  backgroundColor: 'transparent',
                  cursor: 'pointer',
                }}
              >
                <Icon iconName="XIcon" width={20} height={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          padding: '16px',
          backgroundColor: '#fff3cd',
          border: '1px solid #ffeaa7',
          borderRadius: '8px',
          fontSize: '14px',
        }}
      >
        <strong>💡 Pro Tips:</strong>
        <ul style={{ margin: '8px 0 0 16px', paddingLeft: 0 }}>
          <li>Use consistent sizes across your application</li>
          <li>Rotate icons for different directions (0°, 90°, 180°, 270°)</li>
          <li>Consider accessibility when using icons without text</li>
          <li>Test icons at different sizes to ensure clarity</li>
        </ul>
      </div>
    </div>
  ),
};
