import React from 'react';
import { render, screen } from '@testing-library/react';
import { SortMovies } from './SortMovies.js';
import '@testing-library/jest-dom';

describe('SortMovies', () => {
  it('should render the sorted movies', () => {
    // const fakeSortedMovies = {[
    //     {average_rating: 9,
    //     backdrop_path: "fake/backdrop/path",
    //     id: 694919,
    //     poster_path: "fake/poster/path",
    //     release_date: "2020-09-29",
    //     title: "Money Plane"},
    //     {average_rating: 2,
    //     backdrop_path: "fake/backdrop/path",
    //     id: 444444,
    //     poster_path: "fake/poster/path",
    //     release_date: "2019-08-20",
    //     title: "Currency Aircraft"}
    //   ]};
    render(<SortMovies />);
    // render(<SortMovies sortMovies={fakeSortedMovies}/>);
    expect(screen.getByText("--none--")).toBeInTheDocument();
    expect(screen.getByText("Rating descending")).toBeInTheDocument();
    expect(screen.getByText("Rating ascending")).toBeInTheDocument();
  })
})