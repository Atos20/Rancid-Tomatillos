import React, {Component} from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import {LoginForm} from '../LoginForm/LoginForm'
import { Homepage } from '../Homepage/Homepage'
import { ErrorBoundary }  from '../ErrorBoundary/ErrorBoundary';
import { MoviePage } from '../MoviePage/MoviePage'
import { NavBar } from '../NavBar/NavBar'
import fetcher from '../API/APIcalls';
import './App.scss';

export class App extends Component{
  constructor() {
    super()

    this.state = {
      userData:  {
        id: null,
        name: '',
        email: ''
      },
      movies: [],
      movieComments: [],
      ratedMovies: [],
      movieID: null,
      movieDetails: {},
      movieVideo: {},
      favorites: [],
      searchDirections: '',
      error: ''
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: {errorMessage: error, errorInfo: info} });
  }

  authenticateUser = async (credentials) => {
    try {
      const userData = await fetcher.fetchUser(credentials);
      if(userData) {
        this.setState({ userData });
        this.getUserRatings(this.state.userData);
        this.setState({ error: '' })
      } else {
        alert('Those aren\'t the right credentials')
      }
      } catch(error) {
      this.setState({ error: `Those aren\'t the right credentials Error${error.status}` })
    }
  }

  getUserRatings = async (userData) => {
    try {
      const ratedMovies = await fetcher.fetchUserRatings(userData.id)
      this.setState({ ratedMovies });
      this.retrieveFavorites();
    } catch(error) {
      this.setState({ error: `You've got a ${error.status} Error` })
    }
  }

  logOut = () => {
    this.setState ( {
      userData:  {
        id: null,
        name: '',
        email: ''
      }
    })
  }

  getMovieDetails = async(movieID) => {
    try {
      const promiseMovie = await fetcher.fetchMovieVideo(movieID);
      const promiseDetails = await fetcher.fetchSingleMovie(movieID);
      this.setState({
        movieID: movieID,
        movieDetails : promiseDetails.movie,
        movieVideo: promiseMovie.videos
      })
    } catch(error) {
      this.setState({ error: `You've got a ${error.status} Error` })
    }
  }

  async loadAllMovies() {
    try {
      const promise = await fetcher.fetchAllMovies();
      this.setState({movies: promise.movies})
    } catch(error) {
      this.setState({ error: `You've got a ${error.status} Error` })
    }
  }

  async componentDidMount() {
    this.loadAllMovies()
  }

  sortMovies = (value) => {
    if (!value || value === '--none--') {
      this.setState({ searchDirections: this.state.movies })
    } else if (value === 'descending'){
      const sortedMovies = this.state.movies.sort((a, b) => a.average_rating - b.average_rating)
      this.setState({ searchDirections: sortedMovies })
    } else if (value === 'ascending'){
      const sortedMovies = this.state.movies.sort((a, b) => b.average_rating - a.average_rating)
      this.setState({ searchDirections: sortedMovies })
    }
  }

   addRating = async (desiredRatingByUser) => {
    const movieToRate = this.state.ratedMovies.find(ratedMovie => ratedMovie.movie_id === this.state.movieID)
    if (!desiredRatingByUser) {
      return alert('You have to select a rating to rate a movie!')
    } else if (!movieToRate) {
      try {
        const newRating = {movie_id: this.state.movieID, rating: desiredRatingByUser.value}
        await fetcher.fetchCreateUserRating(this.state.userData.id, newRating)
        const allUserRatings = await fetcher.fetchUserRatings(this.state.userData.id)
        this.getMovieDetails(this.state.movieID)
        this.loadAllMovies()
        this.setState({ratedMovies: allUserRatings})
      } catch(error) {
        this.setState({ error: `You've got a ${error.status} Error` })
      }
    } else {
      alert("you already rated this movie! Delete it first to rate again!")
    }
  }

deleteRating = async () => {
  const { id } =  this.state.userData
  let ratingID;
  if (this.state.ratedMovies.find(ratedMovie => ratedMovie.movie_id === this.state.movieID)) {
    ratingID = this.state.ratedMovies.find(ratedMovie => ratedMovie.movie_id === this.state.movieID).id
  } else {
    ratingID = ''
  }
  if(this.state.userData.id && ratingID) {
    await fetcher.fetchDeleteUserRating(id, ratingID)
    const allUserRatings = await fetcher.fetchUserRatings(this.state.userData.id)
    this.getMovieDetails(this.state.movieID)
    this.loadAllMovies()
    this.setState({ratedMovies: allUserRatings})
  } else {
    alert('There is no rating to delete!')
  }
}

  retrieveFavorites = async() => {
    try {
      const favoriteMovies = await fetcher.getUserFavorites();
      this.setState({ favorites: favoriteMovies })
    } catch(error) {
      this.setState({ error: `You've got a ${error.status} Error` })
    }
  }

  toggleFavorite = async(movieID) => {
    try {
      await fetcher.addUserFavorites({ id: movieID });
      await this.retrieveFavorites();
    } catch(error) {
      this.setState({ error: `You've got a ${error.status} Error` })
    }
  }

  newComment = async(movieId, userComment) => {
    const { name } = this.state.userData
    const data = {
      comment: userComment.comment,
      author: name,
      time: userComment.time,
      likeStatus: userComment.likeStatus,
      replyCount: 0,
      replies: []
    }
    if (!name) {
      return false
    }
    try {
      await fetcher.addMovieComment(movieId, data);
    } catch(error) {
      this.setState({ error: `You've got a ${error.status} Error` })
    }
  }

  retrieveComments = async (movieId) => {
    try {
      const promise = await fetcher.getMovieComments(movieId)
        this.setState({movieComments: promise.comments})
      } catch(error) {
        this.setState({ error: `You've got a ${error.status} Error` })
      }
    }

  likeMovieComment = async (movieID, commentID, commentStatus) => {
    const { name } = this.state.userData
    if (!name){
      return false;
    }
    try {
      const status = { likeStatus: commentStatus }
      await fetcher.likeMovieComment(movieID, commentID, status);
      this.retrieveComments(movieID)
    } catch(error) {
      this.setState({ error: `You've got a ${error.status} Error` })
    }
  }

  render() {
    return (
      <>
        <h1 className="login-info">
          <b>
            {this.state.userData.email ? this.state.userData.name + ' is currently ' : 'not '}
          </b>
          logged in
          {this.state.error && <p>{this.state.error}</p>}
        </h1>
        <NavBar
            name={this.state.userData.name}
            logOut={this.logOut}
          />
        <Switch>
          <Route
            path='/login'
            render={() => {
            return  <LoginForm
              authenticateUser={this.authenticateUser}
              login={this.state.userData}/>
            }}
          />

          <Route
            exact path= '/'
            render={() => {
              return (
                <Homepage
                  userData={this.state.userData}
                  movies={this.state.searchDirections || this.state.movies}
                  movieComments={this.state.movieComments}
                  getMovieDetails={this.getMovieDetails}
                  sortMovies={this.sortMovies}
                  ratedMovies={this.state.ratedMovies}
                  retrieveComments={this.retrieveComments}
                  favorites={this.state.favorites}
                  toggleFavorite={this.toggleFavorite}
                />
              )
            }}
          />

          <Route
            exact path={`/movies/${this.state.movieID}`}
            render={ () => {
              return <MoviePage
                addRating={this.addRating}
                deleteRating={this.deleteRating}
                movieDetails={this.state.movieDetails}
                movieVideo={this.state.movieVideo}
                name={this.state.userData}
                ratedMovies={this.state.ratedMovies}
                favorites={this.state.favorites}
                toggleFavorite={this.toggleFavorite}
                newComment={this.newComment}
                retrieveComments={this.retrieveComments}
                movieComments={this.state.movieComments}
                likeMovieComment={this.likeMovieComment}
              />
            }}
          />
          <Route
            exact path='/favorites'
            render={ () => {
              return <Homepage
              userData={this.state.userData}
              movies={this.state.movies.filter(movie => this.state.favorites.includes(movie.id))}
              getMovieDetails={this.getMovieDetails}
              movieComments={this.state.movieComments}
              sortMovies={this.sortMovies}
              ratedMovies={this.state.ratedMovies}
              retrieveComments={this.retrieveComments}
              favorites={this.state.favorites}
              toggleFavorite={this.toggleFavorite}
              />
            }}
          />

          <Route
            exact path='*'
            render={() => {
            return  <ErrorBoundary />
          }} />
        </Switch>
      </>
    );
  }
}
