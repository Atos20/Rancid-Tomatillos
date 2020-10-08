import React, {Component} from 'react';
import {LoginForm} from '../LoginForm/LoginForm'
import { Homepage } from '../Homepage/Homepage'
import './App.scss';

class App extends Component{
  constructor() {
    super();
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      handleClick: this.handleClick()
    }
  }

  handleClick() {
    console.log('check click works')
  }

  render(){
    return (
     <>
      <Homepage handleClick={this.handleClick}/>
      {/* <LoginForm />  */}
    </>
    );
  }
}

export default App;
