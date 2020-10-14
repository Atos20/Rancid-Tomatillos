import React from 'react';
import './MovieCard.scss'
import moment from 'moment'

export default function MovieCard({name, movieDetails, ratedMovies}) {

  const isMovieIncluded = ratedMovies.find(ratedMovie => ratedMovie.movie_id === movieDetails.id) || '';
  const genreList = movieDetails.genres.map((genre, i) => <p className='single-genre'key={i}>-{genre}</p>)

  return (
    <div  className="movie-card-container">

      <div className="inner-container">

        <div className="overview-container">
          <h1 className="overview-container">Overview</h1>
          <p className="value overview">{movieDetails.overview}</p>
        </div>

        <div className="box rating-container">
          <h1 className="title rating-title">Rating</h1>
          <p className="value average-rating">{movieDetails.average_rating.toFixed(1)}</p>
        </div>

        {isMovieIncluded && <div className="box rating-container">
          <h1 className="title rating-title">Your rating</h1>
          <p className="value average-rating">{isMovieIncluded.rating.toFixed(1)}</p>
        </div>}

        <div className="box runtime-container">
          <h1 className="title runtime-title">Time</h1>
          <p className="value runtime">{movieDetails.runtime === 0 ? 'No runtime found' : `${movieDetails.runtime} mins.`}</p>
        </div>

        <div className="box budget-container">
          <h1 className="title budget-title">budget</h1>
          <p className="value budget">{movieDetails.budget === 0 ? 'No budget found' : `$ ${movieDetails.budget}`}</p>
        </div>

        <div className="box revenue-container">
          <h1 className="title revenue-title">revenue</h1>
          <p className="value revenue">{movieDetails.revenue === 0 ? 'No revenue found' : `$ ${movieDetails.revenue}`}</p>
        </div>

        <div className="box release-container">
          <h1 className="title release-title">release date</h1>
          <p className="value release">{!movieDetails.release_date  ? 'No release date found' : moment(movieDetails.release_date).format("MMM Do YY")}</p>
        </div>

        <div className="box genre-container">
          <h1 className="title genre-title">genres</h1>
          <ul className="genres">{genreList}</ul>
        </div>

        
      </div>
    </div>
 
  )
}

