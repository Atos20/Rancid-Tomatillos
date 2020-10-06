import React, {Component} from 'react';
import {LoginForm} from '../LoginForm/LoginForm'
import './App.scss';

class App extends Component{
  constructor() {
    super()
  }

  render(){
    return (
      <section className="App">
        <h1>Rancid Tomatillos</h1>
        {/* <LoginForm /> */}
      </section>
    );
  }
}

export default App;
