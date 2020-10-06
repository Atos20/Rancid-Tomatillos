import React, {Component} from 'react';
import {LoginForm} from '../LoginForm/LoginForm'
import './App.scss';

let styles = {
  poster: {
    height: 185,
    width: 145
  },
  title: {
    width: 100,
    height: 65,
  },
  rating: {
    width: 100,
    height: 45,
  }
}

class App extends Component{
  constructor() {
    super()
  }

  render(){
    return (
      <section className="App">
        <h1>Rancid Tomatillos</h1>
        {/* <LoginForm /> */}
        <section className="Card-area">
        {/* fetch GET movies
        .map(
        <section className="Card" id="index">
          <section name="title" style={styles.title}>Title</section>
          <section name="rating" style={styles.rating}>Rating</section>
          <img src="" style={styles.poster}></img>
        </section>
        )
         */}
        <section className="Card">
          <div style={styles.title}>Title</div>
          <div style={styles.rating}>Rating</div>
          <img src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg" style={styles.poster}></img>
        </section>
      </section>
    </section>
    );
  }
}

export default App;
