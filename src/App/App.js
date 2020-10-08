import React, {Component} from 'react';
import {LoginForm} from '../LoginForm/LoginForm'
import { Homepage } from '../Homepage/Homepage'
import './App.scss';

class App extends Component{
  constructor() {
    super()

    this.state = {
      isLoggedIn : false
    }
  }

  render(){
    const { isLoggedIn } = this.state
    return (
     <>
     <h1 className="login-info">The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</h1>
      <Homepage />
      {/* <LoginForm />  */}
    </>
    );
  }
}

export default App;
