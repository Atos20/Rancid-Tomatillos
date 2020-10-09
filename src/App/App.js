import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {LoginForm} from '../LoginForm/LoginForm'
import { Homepage } from '../Homepage/Homepage'
import fetcher from '../API/APIcalls';
import './App.scss';

class App extends Component{
  constructor() {
    super()

    this.state = {
      userData: {},
      isLoggedIn : false,
    }
  }

  buttonHandling = (event) => {
    if(event.target.innerHTML === 'Log in') {
      console.log('button')
    } 
}

  authenticateUser = async (credentials) => {
    const promise = await fetcher.fetchUser(credentials)
     this.setState({ userData: promise, isLoggedIn : true})
  }

  render(){
    const { isLoggedIn, userData } = this.state;
    return (
      <Router>
        <h1 className="login-info"><b>{isLoggedIn? 'currently' : 'not'}</b> logged in</h1>
        <Route 
        path= '/' 
        render={() => <Homepage logIn={this.buttonHandling} name={this.state.userData} isLoggedIn={this.state.isLoggedIn}/>}
        />

        <Route 
        path='/login' 
        component={() => {
        return !isLoggedIn && <LoginForm authenticateUser={this.authenticateUser}/>}}/>
      </Router>
    );

  }
}

export default App;
