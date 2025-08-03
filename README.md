# Say-Bbo-UI

A modern React UI component library built with TypeScript, Emotion, and Vite.

## Features

- 🎨 **Modern Design**: Clean and accessible components
- 📦 **Tree Shaking**: Import only what you need
- 🎯 **TypeScript**: Full type safety
- 🎭 **Emotion**: CSS-in-JS styling
- 📚 **Storybook**: Interactive component documentation
- ⚡ **Vite**: Fast development and building
- 🔧 **Flexible**: Support for both CJS and ESM

## Installation

### Install all components

```bash
npm install say-bbo-ui
# or
yarn add say-bbo-ui
# or
pnpm add say-bbo-ui
```

### Install individual components

```bash
# Button only
npm install say-bbo-ui/button

# Modal only
npm install say-bbo-ui/modal

# All components
npm install say-bbo-ui/all
```

## Usage

### Import all components

```tsx
import { Button, Modal } from 'say-bbo-ui';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="My Modal">
        <p>Modal content here</p>
      </Modal>
    </div>
  );
}
```

### Import individual components

```tsx
// Button only
import { Button } from 'say-bbo-ui/button';

// Modal only
import { Modal } from 'say-bbo-ui/modal';

// All components
import { Button, Modal } from 'say-bbo-ui/all';
```

## Components

### Button

A versatile button component with multiple variants and sizes.

```tsx
import { Button } from 'say-bbo-ui';

<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>;
```

**Props:**

- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean
- All standard button HTML attributes

### Modal

A modal dialog component with customizable size and behavior.

```tsx
import { Modal } from 'say-bbo-ui';

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="My Modal"
  size="md"
>
  <p>Modal content</p>
</Modal>;
```

**Props:**

- `isOpen`: boolean (required)
- `onClose`: () => void (required)
- `title`: string
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `closeOnOverlayClick`: boolean (default: true)
- `closeOnEscape`: boolean (default: true)

## Development

### Prerequisites

- Node.js 18+
- pnpm

### Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Start Storybook
pnpm storybook

# Build library
pnpm build

# Type check
pnpm type-check

# Lint
pnpm lint
```

### Project Structure

```
say-bbo-ui/
├── src/
│   ├── components/          # React components
│   │   ├── Button/
│   │   └── Modal/
│   ├── types/              # TypeScript type definitions
│   ├── styles/             # Theme and styling utilities
│   ├── all/                # All components export
│   ├── button/             # Button only export
│   ├── modal/              # Modal only export
│   └── styles/             # Styles only export
├── .storybook/             # Storybook configuration
├── dist/                   # Built files
└── package.json
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
