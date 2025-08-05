import './App.css';
import { useState } from 'react';

import { Button } from './components/Button';
import { Modal } from './components/Modal';
import { Select } from './components/Select';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
    { label: 'Option 5', value: 'option5' },
    { label: 'Option 6', value: 'option6' },
    { label: 'Option 7', value: 'option7' },
    { label: 'Option 8', value: 'option8' },
    { label: 'Option 9', value: 'option9' },
    { label: 'Option 10', value: 'option10' },
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Say-Bbo-UI Demo</h1>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Button Variants</h2>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '1rem',
          }}
        >
          <Button variant="primary" label="Primary" startIcon={<XIcon />} />
          <Button variant="outline" label="Outline" />
          <Button variant="underline" label="Underline" />
          <Button variant="transparent" label="Transparent" />
        </div>

        <h3>Button Sizes</h3>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            marginBottom: '1rem',
          }}
        >
          <Button size="small" label="Small" />
          <Button size="medium" label="Medium" />
          <Button size="large" label="Large" />
        </div>

        <h3>Disabled</h3>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <Button disabled variant="primary" label="primary" />
          <Button disabled variant="outline" label="outline" />
          <Button disabled variant="underline" label="underline" />
          <Button disabled variant="transparent" label="transparent" />
        </div>
      </section>

      <Select
        size="small"
        options={options}
        placeholder="Select an option"
        width="200px"
      />
      <Select
        size="medium"
        options={[]}
        placeholder="Select an option"
        width="200px"
      />
      <Select
        size="large"
        options={options}
        placeholder="Select an option"
        width="200px"
        disabled
      />

      <section>
        <h2>Modal Demo</h2>
        <Button onClick={() => setIsModalOpen(true)} label="Open Modal" />

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Demo Modal"
          size="md"
        >
          <p>This is a demo modal from Say-Bbo-UI!</p>
          <p>You can close it by:</p>
          <ul>
            <li>Clicking the X button</li>
            <li>Clicking outside the modal</li>
            <li>Pressing the Escape key</li>
          </ul>
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              justifyContent: 'flex-end',
              marginTop: '1rem',
            }}
          >
            <Button
              variant="outline"
              onClick={() => setIsModalOpen(false)}
              label="Cancel"
            />
            <Button onClick={() => setIsModalOpen(false)} label="Confirm" />
          </div>
        </Modal>
      </section>
    </div>
  );
}

export default App;

const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M10.828 11.771c.26.26.682.26.942 0 .26-.26.26-.682 0-.942L8.942 8l2.828-2.828c.26-.26.26-.682 0-.942-.26-.26-.682-.26-.942 0L8 7.058 5.171 4.229c-.26-.26-.682-.26-.942 0-.26.26-.26.682 0 .942L7.058 8l-2.829 2.828c-.26.26-.26.682 0 .942.26.26.682.26.942 0L8 8.943l2.828 2.828z" />
  </svg>
);
