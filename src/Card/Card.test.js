import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card.js';
import '@testing-library/jest-dom';

describe('Card', () => {
  it('should return a card', () => {
    const movieDeets = {id: 1, title: "Jurassic Park", release_date: 1993, average_rating: 10, poster_path: 'http//fakeURLpath'}
    render(<Card movies={movieDeets}/>)
    console.log(<Card movies={movieDeets}/>)
    expect(screen.getByText("Jurassic Park")).toBeInTheDocument();
    expect(screen.getByText("1993")).toBeInTheDocument();
    expect(screen.getByText("10")).toBeInTheDocument();
    expect(screen.getByText("Rating")).toBeInTheDocument();
  })
})