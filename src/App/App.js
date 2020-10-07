import React, {Component} from 'react';
import {LoginForm} from '../LoginForm/LoginForm'
import { Homepage } from '../Homepage/Homepage'
import { WelcomingSection } from '../WelcomingSection/WelcomingSection'
import './App.scss';

class App extends Component{
  constructor() {
    super()
  }

  render(){
    return (
     <>
      <Homepage />
      <WelcomingSection />
      {/* <LoginForm />  */}
    </>
    );
  }
}

export default App;
