import './App.css';
import { useState } from 'react';

import XSvg from './assets/icons/X.svg?react';
import { Button } from './components/Button';
import { Modal } from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <Button variant="primary" label="Primary" startIcon={<XSvg />} />
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
