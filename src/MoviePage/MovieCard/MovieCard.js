import React from 'react';
import './MovieCard.scss'
import moment from 'moment'

export default function MovieCard({movieDetails}) {
  console.log(movieDetails)
  const genreList = movieDetails.genres.map((genre,i) => <li key={i}>{genre}</li>)
  return (
    <div  className="d movie-card-container">
      <h1 className="genre-title">Rating</h1>
      <h1 className="average-rating">{movieDetails.average_rating}</h1>
      
      <div className="runtime-container">
        <h1 className="runtime-title">Time</h1>
        <p className="runtime">{movieDetails.runtime === 0 ? 'No runtime found' : `${movieDetails.runtime} mins.`}</p>
      </div>

      <div className="budget-container">
        <h1 className="budget-title">budget</h1>
        <p className="budget">{movieDetails.budget === 0 ? 'No budget found' : `$ ${movieDetails.budget}`}</p>
      </div>

      <div className="revenue-container">
        <h1 className="revenue-title">budget</h1>
        <p className="revenue">{movieDetails.revenue === 0 ? 'No revenue found' : `$ ${movieDetails.revenue}`}</p>
      </div>

      <div className="release-container">
        <h1 className="release-title">release date</h1>
        <p className="release">{movieDetails.release_date === 0 ? 'No release date found' : moment(movieDetails.release_date).format("MMM Do YY")}</p>
      </div>

      <h1 className="genre-title">genres :</h1>
      <ul className="genres">
        {genreList}
      </ul>
      <p className="overview">{movieDetails.overview}</p>
    </div>
  )
}

