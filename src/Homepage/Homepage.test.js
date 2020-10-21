import React from 'react';
import { render, screen } from '@testing-library/react';
import { Homepage } from '../Homepage/Homepage.js';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import fetcher from '../API/APIcalls';
jest.mock('../API/APIcalls');


describe('Homepage', () => {
  it('should render the Homepage with movies and their ratings', () => {
    const fakeUser = {
      email: "diana@turing.io",
      id: 82,
      name: "Diana"
    };
    const fakeRatedMovies = [
    {id: 2650, user_id: 82, movie_id: 694919, rating: 10},
    {id: 2661, user_id: 82, movie_id: 337401, rating: 8},
    ]
    const movies = [
      {
        average_rating: 6.75, 
        backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        id: 694919,
        poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        release_date: "2020-09-29",
        title: "Money Plane"
      }, 
      {
        average_rating: 3, 
        backdrop_path: "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
        id: 337401,
        poster_path: "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        release_date: "2020-09-04",
        title: "Mulan"
      }
    ];

    render(
      <Router>
        <Homepage 
          userData={fakeUser} 
          movies={movies} 
          ratedMovies={fakeRatedMovies}
          favorites={[694919, 694919]}
        />
      </Router>
    );

    const movieName1 = screen.getByRole('heading', { name: /Money Plane/i });
    const movieDate1 = screen.getByRole('heading', { name: /september 29, 2020/i });
    const movieRating1 = screen.getByRole('heading', { name: /3/i });
    const movieName2 = screen.getByRole('heading', { name: /Mulan/i });
    const movieDate2 = screen.getByRole('heading', { name: /september 4, 2020/i });
    const movieRating2 = screen.getByRole('heading', { name: /6\.8/i });
    const rateMovieHeader = screen.getByRole('heading', { name: /rate your next movie/i })
    const ratedMovie1 = screen.getByRole('heading', { name: /your rate 10\.0/i })
    const ratedMovie2 = screen.getByRole('heading', { name: /your rate 8\.0/i })

    expect(movieName1).toBeInTheDocument();
    expect(movieDate1).toBeInTheDocument();
    expect(movieRating1).toBeInTheDocument();
    expect(movieName2).toBeInTheDocument();
    expect(movieDate2).toBeInTheDocument();
    expect(movieRating2).toBeInTheDocument();
    expect(rateMovieHeader).toBeInTheDocument();
    expect(ratedMovie1).toBeInTheDocument();
    expect(ratedMovie2).toBeInTheDocument();
   
  })
})