import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn GitHub Actions', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn Github Actions/i);
  const CItext = getByText(/Continuous Integration/i)
  expect(linkElement).toBeInTheDocument();
});

test('should render continuous integration description', () => {
  const { getByText } = render(<App />);
  const CItext = getByText(/Continuous Integration/i)
  expect(CItext).toBeInTheDocument();
})

test('should render Continuous Delivery description', () => {
  const { getByText } = render(<App />);
  const CItext = getByText(/Continuous Delivery/i)
  expect(CItext).toBeInTheDocument();
})
