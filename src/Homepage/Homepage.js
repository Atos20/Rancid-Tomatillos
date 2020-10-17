import React from 'react';
import PropTypes from 'prop-types';
import { WelcomingSection } from '../WelcomingSection/WelcomingSection'
import { Cards }  from '../Cards/Cards'
import './Homepage.scss';

export const Homepage = (props) => {
  // console.log(props.ratedMovies)

  return(
    <>
    {/* props.name should be changed to props.userData */}
      <WelcomingSection name={props.name}/>
      <Cards 
        movies={props.movies}
        getMovieDetails={props.getMovieDetails}
        sortMovies={props.sortMovies}
        ratedMovies={props.ratedMovies}
        retrieveComments={props.retrieveComments}
        toggleFavorite={props.toggleFavorite}
        favorites={props.favorites}
        // we should change the naming of props.name to be props.userData as this is what's being passed in
        status={props.name}
      />
    </>
  )
}

Homepage.propTypes = {
  //once again name should be changed to userData
  name: PropTypes.object,
  movies: PropTypes.array,
  getMovieDetails: PropTypes.func,
  sortMovies: PropTypes.func,
  ratedMovies: PropTypes.array,
  favorites: PropTypes.array,
  retrieveComment: PropTypes.func,
  toggleFavorite: PropTypes.func
}

