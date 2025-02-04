import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

test('renders My React App! heading', () => {
  act(() => {
    ReactDOM.render(<App />, container);
  });
  const headingElement = container.querySelector('h1');
  expect(headingElement.textContent).toBe('My React App!');
});