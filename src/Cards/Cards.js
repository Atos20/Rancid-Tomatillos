import React from 'react';
import { Card } from '../Card/Card';
import { SortMovies } from '../SortMovies/SortMovies';
import PropTypes from 'prop-types';
import './Cards.scss';

 export const Cards = (props) => {
  
  const injectMovies = (movies) => {
    return movies.map((movie, i)=> {
      return (
        <Card 
          key={i} 
          movies={movie}
          getMovieDetails={props.getMovieDetails}
          retrieveComments={props.retrieveComments}
          ratedMovies={props.ratedMovies.find(ratedMovie => ratedMovie.movie_id === movie.id) || {}}
          favorites={props.favorites.find(favoritedMovie => favoritedMovie === movie.id) || {}}
          toggleFavorite={props.toggleFavorite}
          status={props.status.id || ''}
        />
      )
    });
  }
    return (
      <>
        <SortMovies sortMovies={props.sortMovies} status={props.status.id || ''}/>
        <section className="card-area">
        {injectMovies(props.movies)}
        </section> 
      </>
    )
}

Cards.propTypes = {
  movies: PropTypes.array,
  sortMovies: PropTypes.func,
  ratedMovies: PropTypes.array,
  getMovieDetails: PropTypes.func,
  retrieveComments: PropTypes.func,
  favorites: PropTypes.array,
  toggleFavorite: PropTypes.func
}




