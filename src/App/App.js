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
      ratedMovies: '',
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
      console.log('this.state', this.state)
    } else {
      alert(userData.error)
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
                  // usersRating={}
                />
              )
            }}
          />

          <Route 
            exact path={`/movies/${this.state.movieID}`}
            render={ () => {
              return <MoviePage 
                movieDetails={this.state.movieDetails}
                movieVideo={this.state.movieVideo}
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
