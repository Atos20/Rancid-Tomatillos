import React, { Component } from 'react'
import fetcher from '../API/APIcalls';
import { Card } from '../Card/Card'
import { SortMovies } from '../SortMovies/SortMovies'
import './Cards.scss'

export const Cards = (props) => {

  const injectMovies = (movies) => {
    return movies.map((movie, i)=> {
      return (
        <Card 
          key={i} 
          movies={movie}
          getMovieDetails={props.getMovieDetails}
          ratedMovies={props.ratedMovies.find(ratedMovie => ratedMovie.movie_id === movie.id) || ''}
        />
      )
    });
  }
    return (
      <>
        <SortMovies sortMovies={props.sortMovies}/>
        <section className="card-area">
        {injectMovies(props.movies)}
        </section> 
      </>
    )
  
}

