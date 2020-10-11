import React, {Component} from 'react';
import { 
  Switch, 
  Route, 
  Redirect
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {LoginForm} from '../LoginForm/LoginForm'
import { Homepage } from '../Homepage/Homepage'
import { ErrorBoundary } from '../ErrorMessage/ErrorMessage.js';
import MoviePage from '../MoviePage/MoviePage'
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
      hasError: '',
      movieID: null,
      movieDetails: {},
      movieVideo: {}
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: {errorMessage: error, errorInfo: info} });
    console.log(error, info);
  }

  authenticateUser = async (credentials) => {
    const promise = await fetcher.fetchUser(credentials)
      if (promise.user) {
        this.setState({ userData: promise.user })
        // return (<Link to='/'><Link />)
    } else {
      alert(promise.error)
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
            exact path= '/'
            render={() => {
              return (
                <Homepage 
                  name={this.state.userData}
                  getMovieDetails={this.getMovieDetails}
                />
              )
            }}
          />

          <Route 
            path='/login' 
            component={() => {
              return  <LoginForm authenticateUser={this.authenticateUser}/>
            }}
          />

          <Route 
            exact path={`/movies/${this.state.movieID}`}
            component={ () => {
              return <MoviePage 
                movieDetails={this.state.movieDetails}
                movieVideo={this.state.movieVideo}
              /> 
            }}
          />
            <Route path='*' component={() => {
              return  <ErrorBoundary /> //errorMessageData={this.state.hasError}
            }} />
            {/* the above path has a ~50ms 'setTimeout where it will display the error message and then immediately reroute to the correct page */}
        </Switch>
      </>
    );
  }
}


export default App;
