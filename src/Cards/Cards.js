import React, { Component } from 'react'
import fetcher from '../API/APIcalls';
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
    const promise = await fetcher.fetchAllMovies();
    this.setState({movies: promise.movies})
  }

  injectMovies = () => {
    return this.state.movies.map(movie => {
      return (
      <div key={movie.id} className="card">
        <h1 className="movie-title">{movie.title}</h1>
        <h2 className="movie-release">{movie.release_date}</h2>
        <div className="rating-container">
          <h2 className="movie-rating">Rating</h2>
          <h2 className="movie-rating">{movie.average_rating}</h2>
        </div>
        <img className="movie-img"src={movie.poster_path} ></img>
      </div> 
      )
    })
  }

  render() {
    return (
    <>
        <h1 className="cards-title">All movies</h1>
        <section className="card-area">
        {this.injectMovies()}
        </section> 
    </>
  )
  }
}

