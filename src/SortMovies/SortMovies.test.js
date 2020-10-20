import React from 'react';
import { render, screen } from '@testing-library/react';
import { SortMovies } from './SortMovies.js';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import userEvent from  '@testing-library/user-event';

describe('SortMovies', () => {
  it('should render the sorted movies', () => {
    const fakeSort = jest.fn()

    render(
      <BrowserRouter>
        <SortMovies 
          sortMovies={fakeSort}
          status={''}
        />
      </BrowserRouter> 

    );
    const none = screen.getByText("--none--");
    const sortBy = screen.getByText(/sort by/i);
    const descending = screen.getByText("Rating descending");
    const ascending = screen.getByText("Rating ascending");
    const sortButton = screen.getByRole('button', { name: /sort/i });
    
    expect(none).toBeInTheDocument();
    expect(sortBy).toBeInTheDocument();
    expect(descending).toBeInTheDocument();
    expect(ascending).toBeInTheDocument();
    expect(sortButton).toBeInTheDocument();
    
    userEvent.selectOptions(sortButton, [descending, ascending]);
    screen.debug()
    userEvent.click(sortButton);
    expect(fakeSort).toHaveBeenCalled();


  })
})