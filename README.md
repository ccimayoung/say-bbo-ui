# say-bbo-ui

A modern React UI component library built with TypeScript, Emotion, and Vite.

**✨ Supports React 18 & 19**

### Available Components

- **Button** ✅ Complete (Primary, Outline, Underline, Transparent variants)
- **Icon** ✅ Complete (SVG icon system, customizable)
- **Select** 🔺 Limited (Single select Finish. multi-select coming soon)
- **Modal** 🚧 In progress
- **Input** 📅 Coming soon

## 📚 [View Components in Storybook →](https://ccimayoung.github.io/say-bbo-ui)

## 📚 [Github →](https://github.com/ccimayoung/say-bbo-ui)

## Features

- 🎨 **Modern Design**: Clean and accessible components
- ⚛️ **React 18 & 19**: Full compatibility with latest React versions
- 📦 **Tree Shaking**: Import only what you need
- 🎯 **TypeScript**: Full type safety
- 🎭 **Emotion**: CSS-in-JS styling
- 📚 **Storybook**: Interactive component documentation
- ⚡ **Vite**: Fast development and building
- 🔧 **Flexible**: Support for both CJS and ESM

## Installation

```bash
npm install say-bbo-ui
# or
yarn add say-bbo-ui
# or
pnpm add say-bbo-ui
```

### Peer Dependencies

Make sure you have these installed:

```bash
npm install react react-dom @emotion/react @emotion/styled
```

## Usage

### Import all components

```tsx
import React, { useState } from 'react';
import { Button, Modal, Select, Icon } from 'say-bbo-ui';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="My Modal">
        <p>Modal content here</p>
      </Modal>
      <Select placeholder="Select an option" options={options} />
      <Icon iconName="PlusIcon" width={20} height={20} />
    </div>
  );
}
```

### Import individual components

```tsx
// Recommended: Import from main entry (tree-shaking supported)
import { Button, Modal, Select, Icon } from 'say-bbo-ui';
```

## Components

### Button

A versatile button component with multiple variants and sizes.

<img src="./src/assets/images/buttonExample.png" alt="Button Components" width="480">

```tsx
import { Button } from 'say-bbo-ui';

// Basic usage
<Button label="Click me" onClick={handleClick} />

// With variants
<Button variant="primary" label="Primary Button" />
<Button variant="outline" label="Outline Button" />
<Button variant="underline" label="Underline Button" />
<Button variant="transparent" label="Transparent Button" />

// With sizes
<Button size="small" label="Small" />
<Button size="medium" label="Medium" />
<Button size="large" label="Large" />

// With icons
<Button startIcon={<Icon iconName="PlusIcon" />} label="Start Icon" />
<Button endIcon={<Icon iconName="ArrowIcon" />} label="End Icon" />
<Button startIcon={<Icon iconName="PlusIcon" />} endIcon={<Icon iconName="ArrowIcon" />} label="Both" />

// Disabled state
<Button disabled label="Disabled Button" />
```

**Props:**

- `label`: string - Button text content
- `variant`: 'primary' | 'outline' | 'underline' | 'transparent' (default: 'primary')
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `disabled`: boolean
- `onClick`: () => void
- `startIcon`: ReactNode - Icon to display before text
- `endIcon`: ReactNode - Icon to display after text
- All standard button HTML attributes

### Select 🔺

A dropdown select component. (Currently single-select, multi-select is planned)

```tsx
import { Select } from 'say-bbo-ui';

const options = [
  { label: 'Seoul', value: 'seoul' },
  { label: 'Busan', value: 'busan' },
  { label: 'Incheon', value: 'incheon' },
];

<Select
  placeholder="Select a region"
  options={options}
  size="medium"
  width="240px"
/>;
```

**Props:**

- `placeholder`: string - Placeholder text
- `options`: { label: string; value: string }[] - Option list
- `size`: 'small' | 'medium' | 'large' (default: 'medium')
- `width`: string (optional)
- `disabled`: boolean (optional)
- All standard select HTML attributes (except `size`)

> ⚠️ **Note:** Multi-select, search, and async options are planned for future releases.

### Icon

A flexible SVG icon component. All icons are registered in the library and can be used by name.

```tsx
import { Icon } from 'say-bbo-ui';

<Icon iconName="PlusIcon" width={24} height={24} />
<Icon iconName="XIcon" width={20} height={20} />
<Icon iconName="DownArrowIcon" width={16} height={16} rotate={90} />
```

**Props:**

- `iconName`: string - Name of the icon (see Storybook for available icons)
- `width`: number (default: 16)
- `height`: number (default: 16)
- `rotate`: number (default: 0)

---

## Styling

### Theme

The library uses Emotion for styling with a built-in theme system:

```tsx
import { defaultTheme } from 'say-bbo-ui';

// Access theme colors, fonts, etc.
console.log(defaultTheme.colors.primary.main);
```

### Custom Styling

Components accept standard HTML attributes and can be styled with:

- CSS classes
- Emotion's `css` prop
- Styled components

## Changelog

### v1.0.18

- ✨ Added Select component (Beta; supports single selection, multi-select coming soon)
- ✨ Added Icon component (SVG-based icon system using name-based access)
- 🧹 Improved Storybook structure and usability for Button, Select, and Icon components
- ♻️ Refactored props and types for Button, Select, and Icon components
- 🐛 Fixed various style and layout bugs

### v1.0.12

- ✨ Added React 19 support
- 🔧 Improved TypeScript auto-import with `typesVersions`
- 📦 Better tree shaking support

### v1.0.11

- 🐛 Fixed peerDependencies for React compatibility
- 📝 Updated documentation
