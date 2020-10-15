import React from 'react';
import { render, screen } from '@testing-library/react';
import { MovieHeader }  from '../MovieHeader/MovieHeader.js';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';


describe('MovieHeader', () => {
  it('should render the movie header', () => {
    const fakeMovieProps = {title: "Evil Dead", tagline: 'Groovey'}
    render(
      <Router>
        <MovieHeader movieDetails={fakeMovieProps} />
      </Router>
    );
    expect(screen.getByText("Evil Dead")).toBeInTheDocument();
    expect(screen.getByText("Groovey")).toBeInTheDocument();
    expect(screen.queryByText("Delete Rating")).not.toBeInTheDocument();

  })

  it('should show the rating buttons when a user is loggen in', () => {
    const fakeMovieProps = {title: "Evil Dead", tagline: 'Groovey'}
    const fakeName = 'Bruce Cambell'
    render(
      <Router>
        <MovieHeader movieDetails={fakeMovieProps} name={fakeName}/>
      </Router>
    );
    expect(screen.getByText("Delete Rating")).toBeInTheDocument();
    expect(screen.getByText("Rating")).toBeInTheDocument();
    expect(screen.getByText("Rate Movie")).toBeInTheDocument();

  })


    // expect(screen.getByText("Groovey")).toBeInTheDocument();
    // expect(screen.getByText("Groovey")).toBeInTheDocument();
    // expect(screen.getByText("Groovey")).toBeInTheDocument();
    // expect(screen.getByText("Groovey")).toBeInTheDocument();
    // expect(screen.getByText("Groovey")).toBeInTheDocument();
    // expect(screen.getByText("Groovey")).toBeInTheDocument();
    // expect(screen.getByText("Groovey")).toBeInTheDocument();
    // expect(screen.getByText("Groovey")).toBeInTheDocument();
    // expect(screen.getByText("Groovey")).toBeInTheDocument();
})