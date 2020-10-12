import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieHeader from '../MovieHeader/MovieHeader.js';
import '@testing-library/jest-dom';

describe('MovieHeader', () => {
  it('should render the movie header', () => {
    const fakeMovieProps = {title: "Evil Dead", tagline: 'Groovey'}
    render(<MovieHeader movieDetails={fakeMovieProps} movieVideo={''}/>);
    expect(screen.getByText("Evil Dead")).toBeInTheDocument();
    expect(screen.getByText("Groovey")).toBeInTheDocument();
  })
})