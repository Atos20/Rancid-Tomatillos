import React, { Component } from 'react'
import fetcher from '../API/APIcalls';
import '../Cards/Cards.scss'

export class Card extends Component{
  constructor(props) {
    super(props)
  }

  displayMovie = () => {
    this.props.getMovieDetails(this.props.movies.id)//returns the ide of the movie that we need to make the APi request
    
  }

  render() {
    const {id, title, release_date, average_rating, poster_path} = this.props.movies
    return (
      <React.Fragment>
        <div key={id} id={id} className="card">
          <h1 className="movie-title">{title}</h1>
          <h2 className="movie-release">{release_date}</h2>
          <div className="rating-container">
            <h2 className="movie-rating">Rating</h2>
            <h2 className="movie-rating">{average_rating}</h2>
          </div>
          <img 
            id={id} 
            className="movie-img"src={poster_path} 
            onClick={this.displayMovie}>
          </img>
        </div> 
      </React.Fragment>
    )
  }
}
