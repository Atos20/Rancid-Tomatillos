import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieCard from './MovieCard.js';
import '@testing-library/jest-dom';

describe('MovieCard', () => {
  it('should render the movie card', () => {
    const fakeMovieDetailProps = {
      genres: ['horror', 'comedy'],
      average_rating: 9, 
      runtime: 115, 
      budget: 2000000, 
      revenue: 4000000, 
      release_date: '1987/01/01' 
    };
    render(<MovieCard movieDetails={fakeMovieDetailProps}/>);
    expect(screen.getByText("9")).toBeInTheDocument();
    expect(screen.getByText("115 mins.")).toBeInTheDocument();
    expect(screen.getByText("$ 2000000")).toBeInTheDocument();
    expect(screen.getByText("$ 4000000")).toBeInTheDocument();
    expect(screen.getByText("Jan 1st 87")).toBeInTheDocument();
    expect(screen.getByText("horror")).toBeInTheDocument();
    expect(screen.getByText("comedy")).toBeInTheDocument();
  })
})