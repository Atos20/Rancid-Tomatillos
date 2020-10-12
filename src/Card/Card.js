import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Cards/Cards.scss'

export class Card extends Component{

  displayMovie = () => {
    this.props.getMovieDetails(this.props.movies.id)
  }

  render() {
    const {id, title, release_date, average_rating, poster_path} = this.props.movies
    return (
      <>
        <Link className="movie-img" to={`/movies/${id}`}>
          <div key={id} id={id} className="card">
            <h1 className="movie-title">{title}</h1>
            <h2 className="movie-release">{release_date}</h2>
            <div className="rating-container">
              <h2 className="movie-rating">Rating</h2>
              <h2 className="movie-rating">{average_rating}</h2>
            </div>
              <img 
                id={id} 
                className="movie-img" src={poster_path} 
                onClick={this.displayMovie}>
              </img>
          </div> 
        </Link>
      </>
    )
  }
}
