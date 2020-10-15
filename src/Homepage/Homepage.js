import React from 'react';
import PropTypes from 'prop-types';
import { WelcomingSection } from '../WelcomingSection/WelcomingSection'
import { Cards }  from '../Cards/Cards'
import './Homepage.scss';

export const Homepage = (props) => {
  console.log(props.ratedMovies)

  return(
    <>
      <WelcomingSection name={props.name}/>
      <Cards 
        movies={props.movies}
        getMovieDetails={props.getMovieDetails}
        sortMovies={props.sortMovies}
        ratedMovies={props.ratedMovies}
      />
    </>
  )
}

Homepage.propTypes = {
  movies: PropTypes.array,
  getMovieDetails: PropTypes.func,
  sortMovies: PropTypes.func,
  ratedMovies: PropTypes.array
}

