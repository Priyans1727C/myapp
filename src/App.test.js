// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My React App! heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/My React App!/i);
  expect(headingElement).toBeInTheDocument();
});