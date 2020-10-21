import React from 'react';
import { render, screen } from '@testing-library/react';
import { MoviePage } from './MoviePage.js';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import userEvent from  '@testing-library/user-event';



describe('MoviePage', () => {
  it('should render the movie page', () => {
    const fakeMove = {
      average_rating: 6.75,
      backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
      id: 694919,
      poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
      release_date: "2020-09-29",
      title: "Money Plane",
      genres: ['scary', 'hairy']
    };
    const fakeMovieTrailer = ['http/fakemovies.com'];
    const fakeUser = {
      email: "diana@turing.io",
      id: 82,
      name: "Diana"
    };
    const fakeRating = [8];
    const fakeUserRatings = [111111, 694919];
    const fakeCommets = [
      {
        author: "Orlando",
        comment: "mockComment",
        id: 1603238388485,
        likeStatus: false,
        movieId: 694919,
        replies: [],
        replyCount: 0,
        time: "2020-10-20T23:59:44.480Z",
    },
    {
      author: "Orlando",
      comment: "mockComment2",
      id: 1603238388486,
      likeStatus: false,
      movieId: 694919,
      replies: [],
      replyCount: 0,
      time: "2020-10-20T23:59:44.480Z",
     }
    ];
    const fakeAddRating = jest.fn();
    const fakeDeleteRating = jest.fn();
    const fakeToggleFavorite = jest.fn();
    const fakeNewComment = jest.fn();
    const fakeRetrieveComment = jest.fn();
    const fakeLikeMovieComment = jest.fn();
    render(
      <BrowserRouter>
        <MoviePage 
          addRating={fakeAddRating}
          deleteRating={fakeDeleteRating}
          movieDetails={fakeMove}
          movieVideo={fakeMovieTrailer}
          name={fakeUser}
          ratedMovies={fakeRating}
          favorites={fakeUserRatings}
          toggleFavorite={fakeToggleFavorite}
          newComment={fakeNewComment}
          retrieveComments={fakeRetrieveComment}
          movieComments={fakeCommets}
          likeMovieComment={fakeLikeMovieComment}
        />
      </BrowserRouter>
      );

      
      userEvent.click(screen.getByText("❤️"))
      expect(fakeToggleFavorite).toHaveBeenCalled();
      
      const fakeMovieName = screen.getByText("Money Plane");
      const fakeDeleteTitle = screen.getByText("Delete Rating");
      const fakeRateMovieTitle = screen.getByText("Rate Movie");
      const fakeRevenueTitle = screen.getByText("revenue");
      const fakeMockComment1 = screen.getByText("mockComment");
      const fakeMockComment2 = screen.getByText("mockComment2");
      const fakeHairyGenre = screen.getByText("-hairy");
      const fakeCommentsTitle = screen.getByText("Comments");
      const fakeReleaseDate = screen.getByText("Sep 29th 20");
      const fakeReleaseDateTitle = screen.getByText("release date");
      const fakeHeart = screen.getByText("❤️");
      expect(fakeHeart).toBeInTheDocument();
    expect(fakeMovieName).toBeInTheDocument();
    expect(fakeDeleteTitle).toBeInTheDocument();
    expect(fakeRevenueTitle).toBeInTheDocument();
    expect(fakeMockComment1).toBeInTheDocument();
    expect(fakeMockComment2).toBeInTheDocument();
    expect(fakeHairyGenre).toBeInTheDocument();
    expect(fakeRateMovieTitle).toBeInTheDocument();
    expect(fakeCommentsTitle).toBeInTheDocument();
    expect(fakeReleaseDate).toBeInTheDocument();
    expect(fakeReleaseDateTitle).toBeInTheDocument();
  })
})