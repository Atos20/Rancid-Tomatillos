import React, {Component} from 'react';
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
    const { displayLoginForm } = this.state
    return (
     <>
      <h1 className="login-info">User is <b>{displayLoginForm ? 'currently' : 'not'}</b> logged in.</h1>
      <Homepage logIn={this.buttonHandling} name={this.state.userData}/> 
      {displayLoginForm  && <LoginForm authenticateUser={this.authenticateUser}/> }
    </>
    );

  }
}

export default App;
