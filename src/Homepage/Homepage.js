import React from 'react';
import PropTypes from 'prop-types';
import { WelcomingSection } from '../WelcomingSection/WelcomingSection'
import { Cards }  from '../Cards/Cards'
import './Homepage.scss';

export const Homepage = (props) => {

  return(
    <>
      <WelcomingSection 
        userData={props.userData}
      />

      <Cards 
        movies={props.movies}
        getMovieDetails={props.getMovieDetails}
        sortMovies={props.sortMovies}
        ratedMovies={props.ratedMovies}
        retrieveComments={props.retrieveComments}
        toggleFavorite={props.toggleFavorite}
        favorites={props.favorites}
        userData={props.userData}
      />
    </>
  )
}

Homepage.propTypes = {
  userData: PropTypes.object,
  movies: PropTypes.array,
  getMovieDetails: PropTypes.func,
  sortMovies: PropTypes.func,
  ratedMovies: PropTypes.array,
  favorites: PropTypes.array,
  retrieveComment: PropTypes.func,
  toggleFavorite: PropTypes.func
}

