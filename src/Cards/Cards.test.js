import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from './Cards.js';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Cards', () => {
  it('should render cards', () => {
    render(<Cards />)
    expect(screen.getByText('All movies')).toBeInTheDocument();
  })
})