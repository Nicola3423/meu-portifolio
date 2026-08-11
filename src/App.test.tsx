import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.localStorage.clear();
  document.documentElement.dataset.theme = 'light';
});

test('apresenta o posicionamento profissional de Nicola', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /desenvolvedor c# full stack/i,
    })
  ).toBeInTheDocument();
});

test('alterna entre os temas claro e escuro', () => {
  render(<App />);

  const themeButton = screen.getByRole('button', { name: /ativar tema escuro/i });
  fireEvent.click(themeButton);

  expect(document.documentElement.dataset.theme).toBe('dark');
  expect(screen.getByRole('button', { name: /ativar tema claro/i })).toBeInTheDocument();
});
