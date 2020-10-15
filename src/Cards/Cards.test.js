import React from 'react';
import { render, screen } from '@testing-library/react';
import {Cards} from '../Cards/Cards.js';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';



describe('Cards', () => {
  it('should render movie cards', () => {
    const fakeUserRating = [''];
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
        <Cards 
          movies={movies} 
          ratedMovies={fakeUserRating} 
          getMovieDetails={jest.fn()} 
          sortMovies={jest.fn()}
        />
      </Router>
    )

    const movieName1 = screen.getByRole('heading', { name: /Money Plane/i });
    const movieDate1 = screen.getByRole('heading', { name: /september 29, 2020/i });
    const movieRating1 = screen.getByRole('heading', { name: /3/i });
    const movieName2 = screen.getByRole('heading', { name: /Mulan/i });
    const movieDate2 = screen.getByRole('heading', { name: /september 4, 2020/i });
    const movieRating2 = screen.getByRole('heading', { name: /6\.8/i });
    // const ratingTitle = screen.getByRole('heading', { name: /rating/i });
    // const notRated = screen.getByRole('heading', { name: /not rated/i });

    expect(movieName1).toBeInTheDocument();
    expect(movieDate1).toBeInTheDocument();
    expect(movieRating1).toBeInTheDocument();
    expect(movieName2).toBeInTheDocument();
    expect(movieDate2).toBeInTheDocument();
    expect(movieRating2).toBeInTheDocument();
    // expect(ratingTitle).toBeInTheDocument();
    // expect(notRated).toBeInTheDocument();
  })
})