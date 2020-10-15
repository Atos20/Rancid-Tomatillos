import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieCard from '../MovieCard/MovieCard.js';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';


describe('MovieCard', () => {
  it('should render the movie card', () => {
    const fakeMovieDetailProps = {
      average_rating: 1,
      backdrop_path: "https://fakebackdrop.jpg",
      budget: 25,
      genres: ["Action"],
      id: 718444,
      overview: "Battle-hardened O’Hara",
      poster_path: "https://fakeimg.jpg",
      release_date: "2020-08-20",
      revenue: 24,
      runtime: 106,
      tagline: "When the hunter becomes the prey.",
      title: "Rogue"
    };

    const fakeRatedMovies = [
      {id: 2650, user_id: 82, movie_id: 718444, rating: 3},
      {id: 2661, user_id: 82, movie_id: 337401, rating: 8}
    ]

    render(
      <Router>
        <MovieCard movieDetails={fakeMovieDetailProps} ratedMovies={fakeRatedMovies}/>
      </Router>
    );
      const fakeAverage = screen.getByText(/1.0/i);
      const fakeUserRate = screen.getByText(/3.0/i);
      const fakeScreenTime = screen.getByText("106 mins.");
      const fakeBudget = screen.getByText("$ 25");
      const fakeRevenue = screen.getByText("$ 24");
      const fakeRelease = screen.getByText(/aug 20th 20/i);
      const fakeGenre = screen.getByText("-Action");


    expect(fakeAverage).toBeInTheDocument();
    expect(fakeUserRate).toBeInTheDocument();
    expect(fakeScreenTime).toBeInTheDocument();
    expect(fakeBudget).toBeInTheDocument();
    expect(fakeRevenue).toBeInTheDocument();
    expect(fakeRelease).toBeInTheDocument();
    expect(fakeGenre).toBeInTheDocument();
  })
})