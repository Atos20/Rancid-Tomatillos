import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types'
import { MovieCard } from './MovieCard/MovieCard';
import { MovieHeader } from './MovieHeader/MovieHeader';
import { Comments } from '../Comments/Comments'
import './MoviePage.scss';

export const MoviePage = ( {
  movieDetails, 
  movieVideo, 
  addRating, 
  //we might want to change the "name" of 'name.name' to be 'userData.name'
  name, 
  deleteRating,
  ratedMovies,
  newComment,
  movieComments,
  favorites,
  toggleFavorite
}) => {
  const displayTrailer = () => {
    return movieVideo.map((video, i) => {
      return (
        <div key={i} className="movie-trailer" alt="movie trailer">
          <ReactPlayer
            alt="movie trailer"
            controls={true}
            width={350}
            height={250}
            url={`www.youtube.com/watch?v=${video.key}`}
          />
        </div>
      )
    });
  }


  // console.log(movieDetails.id)
  return (
    <div className="movie-container">

        <div className="movie-wrapper">

          <MovieHeader 
            addRating={addRating} 
            movieDetails={movieDetails} 
            // we would also change it here
            name={name.name}
            deleteRating={deleteRating}
            favorites={favorites.find(favoritedMovie => favoritedMovie === movieDetails.id) || ''}
            toggleFavorite={toggleFavorite}
            movieId={movieDetails.id}
          />

          <div className=" img-container">
            <img 
              className="trailer-image"
              src={movieDetails.backdrop_path}
              alt="movie image" 
              />
          </div>
          <div className=" trailer-container">
          {movieVideo.length > 0 && <div className="trailerList">{displayTrailer()}</div>}
          </div>

          <Comments 
            newComment={newComment}
            movieId={movieDetails.id}
            //and here
            name={name.name}
            movieComments={movieComments}
          />

          <MovieCard 
          //and here
            name={name.name}
            movieDetails={movieDetails}
            ratedMovies={ratedMovies}
          />

        </div>
 
    </div>
  )
}

MoviePage.propTypes = {
  addRating: PropTypes.func,
  deleteRating: PropTypes.func,
  movieDetails: PropTypes.object,
  movieVideo: PropTypes.array,
  name: PropTypes.string,
  ratedMovies: PropTypes.array,
  newComment: PropTypes.func,
  movieComments: PropTypes.array,
  toggleFavorite: PropTypes.func,
  //now that I'm thinking about it, I think we could clean this before it gets passed in so that only one favorite movie is passed in
  favorites: PropTypes.array

}

