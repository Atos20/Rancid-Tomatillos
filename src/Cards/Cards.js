import React, { Component } from 'react'
import fetcher from '../API/APIcalls';
import { Card } from '../Card/Card'
import { SortMovies } from '../SortMovies/SortMovies'
import './Cards.scss'

export default class Cards extends Component {
  constructor(props){
    super(props)
   
  this.state = {
    movies : [],
    error: ''
    }
  }

  async componentDidMount() {
    //make a new request for all  movie details and create an array of all those movies
    const promise = await fetcher.fetchAllMovies();
    this.setState({movies: promise.movies})
  }

  injectMovies = (movies) => {
    return movies.map((movie, i)=> {
      return (
        <Card 
          key={i} 
          movies={movie}
          getMovieDetails={this.props.getMovieDetails}
        />
      )
    });
  }

  sortMovies = (value) => {
    if (!value || value === '--none--') {
      return false
    } else if (value === 'descending'){
      const sortedMovies = this.state.movies.sort((a, b) => a.average_rating - b.average_rating)
      this.setState({ movies: sortedMovies })
    } else if (value === 'ascending'){
      const sortedMovies = this.state.movies.sort((a, b) => b.average_rating - a.average_rating)
      this.setState({ movies: sortedMovies })
    } 
  }
  
  render() {
    return (
      <>
      <SortMovies sortMovies={this.sortMovies}/>
      <section className="card-area">
      {this.injectMovies(this.state.movies)}
      </section> 
    </>
  )
  }
}

/*
average_rating: 9
backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg"
id: 694919
poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg"
release_date: "2020-09-29"
title: "Money Plane"
*/
