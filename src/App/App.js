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
      ratedMovies: [],
      movieID: null,
      movieDetails: {},
      movieVideo: {},
      error: ''
    }
  }
  
  componentDidCatch(error, info) {
    this.setState({ hasError: {errorMessage: error, errorInfo: info} });
  }
  
  authenticateUser = async (credentials) => {
    const userData = await fetcher.fetchUser(credentials)
    if (userData) {
      const ratedMovies = await fetcher.fetchUserRatings(userData.id)
      this.setState({ userData, ratedMovies })
    } else {
      alert('Those aren\'t the right credentials')
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
    const promiseMovie = await fetcher.fetchMovieVideo(movieID);
    const promiseDetails = await fetcher.fetchSingleMovie(movieID);
    this.setState({ 
      movieID: movieID, 
      movieDetails : promiseDetails.movie,
      movieVideo: promiseMovie.videos
    })
  }

  async loadAllMovies() {
    const promise = await fetcher.fetchAllMovies();
    this.setState({movies: promise.movies})
  }

  async componentDidMount() {
    this.loadAllMovies()
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

   addRating = async (desiredRatingByUser) => {
    const movieToRate = this.state.ratedMovies.find(ratedMovie => ratedMovie.movie_id === this.state.movieID)
    if (!desiredRatingByUser) {
      return alert('You have to select a rating to rate a movie!')
    } else if (!movieToRate) {
      const newRating = {movie_id: this.state.movieID, rating: desiredRatingByUser.value}
      const addNewRating = await fetcher.fetchCreateUserRating(this.state.userData.id, newRating)
      const allUserRatings = await fetcher.fetchUserRatings(this.state.userData.id)
      this.getMovieDetails(this.state.movieID)
      this.loadAllMovies()
      this.setState({ratedMovies: allUserRatings})
      this.loadAllMovies()
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
      const deleteSingleRating = await fetcher.fetchDeleteUserRating(id, ratingID)
      const allUserRatings = await fetcher.fetchUserRatings(this.state.userData.id)
      this.getMovieDetails(this.state.movieID)
      this.loadAllMovies()
      this.setState({ratedMovies: allUserRatings})
      this.loadAllMovies()
    } else {
      alert('There is no rating to delete!')
    }
  }

  postComment = async(comment) => {
    const post = await fetcher.addUserComment(this.state.userData.name, comment);
  }

  render(){
    // console.log(this.state.movies)
    return (
      <>
        <h1 className="login-info">
          <b>
            {this.state.userData.email ? this.state.userData.name + ' is currently ' : 'not '}
          </b>
          logged in
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
                  name={this.state.userData}
                  movies={this.state.movies}
                  getMovieDetails={this.getMovieDetails}
                  sortMovies={this.sortMovies}
                  ratedMovies={this.state.ratedMovies}
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
                name={this.state.userData.name}
                ratedMovies={this.state.ratedMovies}
                postComment={this.postComment}
              /> 
            }}
          />
            <Route 
              exact path='*' 
              render={() => {
              return  <ErrorBoundary /> //errorMessageData={this.state.hasError}
            }} />
        </Switch>
      </>
    );
  }
}
