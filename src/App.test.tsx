import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('apresenta o posicionamento profissional de Nicola', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /desenvolvedor c# full stack/i,
    })
  ).toBeInTheDocument();
});
