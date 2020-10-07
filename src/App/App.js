import React, {Component} from 'react';
import {LoginForm} from '../LoginForm/LoginForm'
import { Homepage } from '../Homepage/Homepage'
import './App.scss';

class App extends Component{
  constructor() {
    super()
  }

  render(){
    return (
     <>
      <Homepage />
      {/* <LoginForm />  */}
    </>
    );
  }
}

export default App;
