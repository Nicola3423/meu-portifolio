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
  expect(screen.getByText(/aplicações corporativas de ponta a ponta/i)).toBeInTheDocument();
});

test('apresenta competências técnicas com contexto para recrutadores', () => {
  render(<App />);

  expect(screen.getByRole('heading', { name: '.NET 8' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Angular' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'SQL Server' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Arquitetura' })).toBeInTheDocument();
  expect(screen.getByText(/testes em pipelines, com familiaridade em Azure/i)).toBeInTheDocument();
});

test('usa um visual leve em CSS no hero, sem SVG inline', () => {
  const { container } = render(<App />);
  expect(container.querySelector('.hero-visual-wrapper svg')).not.toBeInTheDocument();
  expect(container.querySelector('.hero-orbit-system')).toBeInTheDocument();
});

test('direciona Conheça meu trabalho para Stack e competências', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /ir para stack e competências/i })).toHaveAttribute(
    'href',
    '#stack'
  );
});

test('alterna entre os temas claro e escuro', () => {
  render(<App />);

  const themeButton = screen.getByRole('button', { name: /ativar tema escuro/i });
  fireEvent.click(themeButton);

  expect(document.documentElement.dataset.theme).toBe('dark');
  expect(screen.getByRole('button', { name: /ativar tema claro/i })).toBeInTheDocument();
});
