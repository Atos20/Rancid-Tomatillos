import React, {Component} from 'react';
import {LoginForm} from '../LoginForm/LoginForm'
import { Homepage } from '../Homepage/Homepage'
import './App.scss';

class App extends Component{
  constructor() {
    super()

    this.state = {
      displayLoginForm : false
    }
  }

  buttonHandling = (event) => {
    if(event.target.innerHTML === 'Log in') {
      this.setState({ displayLoginForm : true })
    } 
}

  authenticateUser = () => {
    
  }

// buttonHandling = (event) => {
//   if(event.target.innerHTML === 'Log in') {
//     this.setState({ displayLoginForm : true })
//     event.target.innerHTML = 'Log out'
//   } else {
//     this.setState({ displayLoginForm : false })
//     event.target.innerHTML = 'Log in'
//   }
// }



  render(){
    const { displayLoginForm } = this.state
    return (
     <>
      <h1 className="login-info">User is <b>{displayLoginForm ? 'currently' : 'not'}</b> logged in.</h1>
      <Homepage logIn={this.buttonHandling}/> 
      {displayLoginForm  && <LoginForm /> }
    </>
    );
  }
}

export default App;
