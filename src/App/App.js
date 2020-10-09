import React, {Component} from 'react';
import {LoginForm} from '../LoginForm/LoginForm';
import { Homepage } from '../Homepage/Homepage';
import { ErrorBoundary } from '../ErrorMessage/ErrorMessage.js';
import fetcher from '../API/APIcalls';
import './App.scss';

export class App extends Component{
  constructor() {
    super()

    this.state = {
      userData: {},
      displayLoginForm : false,
      hasError: {errorMessage: 'butts', errorInfo: 'nuts'}
    }
  }

  buttonHandling = (event) => {
    if(event.target.innerHTML === 'Log in') {
      this.setState({ displayLoginForm : true })
    } 
}


componentDidCatch(error, info) {
  this.setState({ hasError: {errorMessage: error, errorInfo: info} });
  console.log(error, info);
}

  authenticateUser = async (credentials) => {
    const promise = await fetcher.fetchUser(credentials)
      // console.log('this is the promise', promise)
     this.setState({ userData: promise, displayLoginForm : false})
    //  console.log(this.state.userData.user.name)//this is getting the right info
  }

  render(){
    const { displayLoginForm } = this.state;

    if (this.state.hasError) {
      return (
        <ErrorBoundary errorMessageData={this.state.hasError}/>
      )
    } else {
      return (
        <>
         <h1 className="login-info">User is <b>{displayLoginForm ? 'currently' : 'not'}</b> logged in.</h1>
         <Homepage logIn={this.buttonHandling} name={this.state.userData}/> 
         {displayLoginForm  && <LoginForm authenticateUser={this.authenticateUser}/> }
       </>
       );
    }
  }
}

export default App;
