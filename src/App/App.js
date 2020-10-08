import React, {Component} from 'react';
import {LoginForm} from '../LoginForm/LoginForm'
import { Homepage } from '../Homepage/Homepage'
import './App.scss';

class App extends Component{
  constructor() {
    super();
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      loggedIn: false,
      error: ''
    }
  }

  handleClick = () => {
    this.setState({loggedIn: true})
  }

  render = () => {
    if (this.state.loggedIn) {
      return (
        <LoginForm />
      )
    } else {
      return (
        <Homepage handleClick={this.handleClick}/>
      );
    }
  }
}

export default App;
