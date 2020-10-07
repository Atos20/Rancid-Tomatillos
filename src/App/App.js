import React, {Component} from 'react';
import {LoginForm} from '../LoginForm/LoginForm'
import { Homepage } from '../Homepage/Homepage'
import { MovieSection } from '../WelcomingSection/WelcomingSection'
import './App.scss';

class App extends Component{
  constructor() {
    super()
  }

  render(){
    return (
     <>
      <Homepage />
      <MovieSection />
      {/* <LoginForm />  */}
    </>
    );
  }
}

export default App;
