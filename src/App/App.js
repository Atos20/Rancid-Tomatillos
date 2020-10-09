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
      displayLoginForm : false
    }
  }

  buttonHandling = (event) => {
    if(event.target.innerHTML === 'Log in') {
      this.setState({ displayLoginForm : true })
    } 
}

  authenticateUser = async (credentials) => {
    const promise = await fetcher.fetchUser(credentials)
      // console.log('this is the promise', promise)
     this.setState({ userData: promise, displayLoginForm : false})
    //  console.log(this.state.userData.user.name)//this is getting the right info
  }

  render(){
    const { displayLoginForm } = this.state;
    return (
      <Router>
        <h1 className="login-info">User is <b>{displayLoginForm ? 'currently' : 'not'}</b> logged in.</h1>
        <Route 
        path= '/' exact
        component={() => <Homepage  logIn={this.buttonHandling} name={this.state.userData}/>}
        />
        <Route 
        path='/login' 
        component={() => <LoginForm authenticateUser={this.authenticateUser}/> }/>
      </Router>
    );

  }
}

export default App;
