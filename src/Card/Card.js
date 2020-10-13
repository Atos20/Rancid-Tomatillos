import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Cards/Cards.scss'

export class Card extends Component{
  constructor(props) {
    super(props)
  }

  displayMovie = () => {
    this.props.getMovieDetails(this.props.movies.id)
  }

  render() {
    const {id, title, release_date, average_rating, poster_path} = this.props.movies
    // console.log(this.props.ratedMovies)
    return (
      
      <NavLink className="movie-card" to={`/movies/${id}`}>
        <div key={id} id={id} className="card" onClick={this.displayMovie}>
          <h1 className="movie-title">{title}</h1>
          <h2 className="movie-release">{release_date}</h2>
          <div className="rating-container">
            <h2 className="movie-rating">Rating</h2>
            <h2 className="movie-rating">{average_rating}</h2>
            <h2 className="user-rating">{this.props.ratedMovies.rating}</h2>
          </div>
              <img 
                id={id} 
                className="movie-img" src={poster_path} 
                >
              </img>
        </div> 
      </NavLink>
      
    )
  }
}
