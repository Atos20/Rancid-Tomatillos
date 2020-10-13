import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary.js';
import '@testing-library/jest-dom';


describe('ErrorBoundary', () => {
  it('should render the error page', () => {
    render(<ErrorBoundary />);
    expect(screen.getByText("Something went wrong.")).toBeInTheDocument();
  })
})