import React from 'react';
import { cleanup, render } from '@testing-library/react';
import App from '../App';

  afterEach(cleanup);

test('page loads with title', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/address book/i);
  expect(titleElement).toBeInTheDocument();
})
