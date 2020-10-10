import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {LoginForm} from '../LoginForm/LoginForm'
import { Homepage } from '../Homepage/Homepage'
import { ErrorBoundary } from '../ErrorMessage/ErrorMessage.js';
import Movie from '../Movie/Movie'
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
      hasError: ''
    }
  }

  buttonHandling = (event) => {
    if(event.target.innerHTML === 'Log in') {
      console.log('button')
    } 
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: {errorMessage: error, errorInfo: info} });
    console.log(error, info);
  }

  authenticateUser = async (credentials) => {
    const promise = await fetcher.fetchUser(credentials)
    if (promise.user){
      this.setState({ userData: promise.user })
    } else {
      alert(promise.error)
    }
      // if (this.state.userData !== {}) {this.props.history.push('/') }
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
    console.log(movieID)
    const promise = await fetcher.fetchSingleMovie(movieID);
    console.log(promise)
  }

  render(){
    const { userData } = this.state;
    
//     if (this.state.hasError) {
//       return (
//         <ErrorBoundary errorMessageData={this.state.hasError}/>
//       )
//     } else {
  
    return (
      <Router>
        <h1 className="login-info"><b>{userData.email ? 'currently' : 'not'}</b> logged in</h1>
        <Route 
          exact path= '/'
          render={() => {
            return (
              <Homepage 
                name={this.state.userData} 
                isLoggedIn={this.state.userData.name} 
                logOut={this.logOut}
                getMovieDetails={this.getMovieDetails}
              />
            )
          }}
        />

        <Route 
        path='/login' 
        component={() => {
        return  <LoginForm authenticateUser={this.authenticateUser}/>}}/>

        <Route 
          exact path='/movies/:movieId'
          component={ () => {
            return <Movie />//will pass the movie details 
          }}
        />
      </Router>
    );
  }
}

export default App;
