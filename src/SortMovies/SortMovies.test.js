import React from 'react';
import { render, screen } from '@testing-library/react';
import { SortMovies } from './SortMovies.js';
import '@testing-library/jest-dom';

describe('SortMovies', () => {
  it('should render the sorted movies', () => {

    render(<SortMovies />);
    expect(screen.getByText("--none--")).toBeInTheDocument();
    expect(screen.getByText("Rating descending")).toBeInTheDocument();
    expect(screen.getByText("Rating ascending")).toBeInTheDocument();
  })
})