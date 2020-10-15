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
        />
      </BrowserRouter> 

    );
    const none = screen.getByText("--none--")
    const sortBy = screen.getByRole('heading', { name: /sort by/i })
    const descending = screen.getByText("Rating descending")
    const ascending = screen.getByText("Rating ascending")
    const selectBox = screen.getByRole('select-sorting');
    const sortButton = screen.getByRole('apple');

    expect(none).toBeInTheDocument();
    expect(sortBy).toBeInTheDocument();
    expect(descending).toBeInTheDocument();
    expect(ascending).toBeInTheDocument();
    expect(selectBox).toBeInTheDocument();
    
    userEvent.selectOptions(selectBox, [descending, ascending]);
    // screen.debug()
    userEvent.click(sortButton)
    expect(fakeSort).toHaveBeenCalled()


  })
})