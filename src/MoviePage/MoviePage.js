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
  // wait, unless this is in reference to the movie's name. Cant tell atm, but regardless we should change it to be more semantic
  name, 
  deleteRating,
  ratedMovies,
  newComment,
  movieComments,
  favorites,
  toggleFavorite,
  retrieveComments,
  likeMovieComment
  // toggleFavorite
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

  return (
    <div className="movie-container">

        <div className="movie-wrapper">

          <MovieHeader 
            addRating={addRating} 
            movieDetails={movieDetails} 
            // we would also change it here
            name={name.name}
            deleteRating={deleteRating}
            favorites={favorites.find(favoritedMovie => favoritedMovie === movieDetails.id) || null}
            toggleFavorite={toggleFavorite}
            movieId={movieDetails.id}
          />

          <div className=" img-container">
            <img 
              className="trailer-image"
              src={movieDetails.backdrop_path}
              alt={`${name.name} backdrop`} 
              />
          </div>
          <div className=" trailer-container">
          {movieVideo.length > 0 && <div className="trailerList">{displayTrailer()}</div>}
          </div>

          <Comments 
            newComment={newComment}
            movieId={movieDetails.id}
            name={name.name}
            movieComments={movieComments}
            retrieveComments={retrieveComments}
            likeMovieComment={likeMovieComment}
          />

          <MovieCard 
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
  name: PropTypes.object,
  ratedMovies: PropTypes.array,
  newComment: PropTypes.func,
  movieComments: PropTypes.array,
  toggleFavorite: PropTypes.func,
  favorites: PropTypes.array,
  retrieveComments: PropTypes.func,
}

