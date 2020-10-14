import React, {Component} from 'react';
import { 
  Switch, 
  Route, 
  // Redirect
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
    console.log(error, info);
  }
  
  authenticateUser = async (credentials) => {
    const userData = await fetcher.fetchUser(credentials)
    if (userData) {
      const ratedMovies = await fetcher.fetchUserRatings(userData.id)
      this.setState({ userData, ratedMovies })
    } else {
      alert(userData)
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

  async componentDidMount() {
    const promise = await fetcher.fetchAllMovies();
    this.setState({movies: promise.movies})
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

   addRating = (desiredRating) => {
    let usersRating = this.state.ratedMovies.find(ratedMovie => ratedMovie.movie_id === this.state.movieID)
    if (!desiredRating) {
      return alert('You have to select a rating to rate a movie!')
    } else if (!usersRating) {
    let newRating = {movie_id: this.state.movieID, rating: desiredRating.value}
      fetcher.fetchCreateUserRating(this.state.userData.id, newRating)
      .then(() => fetcher.fetchUserRatings(this.state.userData.id)
      // .then(() => fetcher.fetchAllMovies()
      // .then(promise => this.setState({movies: promise.movies}))
      // )
      // .then(() => this.componentDidMount())
      .then(ratedMovies => this.setState({ ratedMovies }))
      )
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
      const promise = await fetcher.fetchDeleteUserRating(id, ratingID)
      .then(() => fetcher.fetchUserRatings(this.state.userData.id)
      // .then(() => fetcher.fetchAllMovies()
      // .then(promise => this.setState({movies: promise.movies}))
      // )
      // .then(() => this.componentDidMount())
      .then(ratedMovies => this.setState({ ratedMovies }))
      )
    } else {
      alert('There is no rating to delete!')
    }
  }

  render(){
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
              return  <LoginForm authenticateUser={this.authenticateUser} login={this.state.userData}/>
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
                name={this.state.userData.name}
                movieDetails={this.state.movieDetails}
                movieVideo={this.state.movieVideo}
                addRating={this.addRating}
                deleteRating={this.deleteRating}
              /> 
            }}
          />
            <Route 
              exact path='*' 
              render={() => {
              return  <ErrorBoundary /> //errorMessageData={this.state.hasError}
            }} />
            {/* the above path has a ~50ms 'setTimeout where it will display the error message and then immediately reroute to the correct page */}
        </Switch>
      </>
    );
  }
}


export default App;
