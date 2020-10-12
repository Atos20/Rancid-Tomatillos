import React from 'react';
import { render, screen } from '@testing-library/react';
import Movie from './MoviePage.js';
import '@testing-library/jest-dom';

describe('Movie', () => {
  it('should render the movie page', () => {
    const fakeMovieProps = {
      title: "Army of Darkness", 
      tagline: 'If Chin\'s Could Kill', 
      genres: ['horror', 'comedy']
    };
    const fakeMovieTrailers = {}
    render(<Movie movieDetails={fakeMovieProps} movieVideo={fakeMovieTrailers}/>);
    expect(screen.getByText("Army of Darkness")).toBeInTheDocument();
    expect(screen.getByText("If Chin\'s Could Kill")).toBeInTheDocument();
  })
})