import React from 'react';
import { WelcomingSection } from '../WelcomingSection/WelcomingSection'
import Cards  from '../Cards/Cards'
import './Homepage.scss';


export function Homepage(props) {
  return(
    <>
      <WelcomingSection name={props.name}/>
      <Cards 
        movies={props.movies}
        getMovieDetails={props.getMovieDetails}
        sortMovies={props.sortMovies}
      />
    </>
)
}


