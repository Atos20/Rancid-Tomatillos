import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card.js';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';


describe('Card', () => {
  it('should return a card', () => {
    const movieDeets = {
      id: 1, 
      title: "Jurassic Park", 
      release_date: '1993-08-29', 
      average_rating: 10, 
      poster_path: 'http//fakeURLpath'
    }
    const fakeUserRating = {};
    render(
      <Router>
        <Card movies={movieDeets} ratedMovies={fakeUserRating}/>
      </Router>
    )
    const movieName = screen.getByRole('heading', { name: /Jurassic Park/i });
    const movieDate = screen.getByRole('heading', { name: /august 29, 1993/i });
    const movieRating = screen.getByRole('heading', { name: /10/i });
    const ratingTitle = screen.getByRole('heading', { name: /rating/i });
    const notRated = screen.getByRole('heading', { name: /not rated/i });
    expect(movieName).toBeInTheDocument();
    expect(movieDate).toBeInTheDocument();
    expect(movieRating).toBeInTheDocument();
    expect(ratingTitle).toBeInTheDocument();
    expect(notRated).toBeInTheDocument();
  })
  
  it('Should show a user\'s rating, if there is one', () => {
    const movieDeets = {id: 1, title: "Jurassic Park", release_date: '1993-08-29', average_rating: 10, poster_path: 'http//fakeURLpath'}
    const fakeUserRating = {rating: 9};
    render(
      <Router>
        <Card movies={movieDeets} ratedMovies={fakeUserRating}/>
      </Router>
    )
    
    const usersRating = screen.getByRole('heading', { name: /your rate 9\.0/i })
    expect(usersRating).toBeInTheDocument();
  })
})