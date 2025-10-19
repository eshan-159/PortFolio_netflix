import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the intro experience without crashing', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  const introVideo = document.querySelector('video');
  expect(introVideo).toBeInTheDocument();
});
