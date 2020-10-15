import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary.js';
import '@testing-library/jest-dom';


describe('ErrorBoundary', () => {
  it('should render the error page', () => {
    render(<ErrorBoundary />);
    const errorMessage = screen.getByRole('heading', { name: /something went wrong\./i })
    expect(errorMessage).toBeInTheDocument();
  })
})