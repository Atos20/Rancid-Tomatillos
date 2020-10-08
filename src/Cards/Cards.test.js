import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from './Cards.js';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Cards', () => {
  it('should render cards', () => {
    render(<Cards 
      cards-title = 'All movies'
      card-area =      
      {
      //   // key={1} 
      // // className = "card",
      // movieTitle = "Jurassic Park",
      // movieRelease = 1993,
      // ratingContainer = {
      //   // movieRating = 10,
      //   movieRating: 10
      //     },    
      // src='http//fakemove.path'
    }
    />)
    expect(screen.getByText('Jurassic Park').toBeInTheDocument())
  })
})