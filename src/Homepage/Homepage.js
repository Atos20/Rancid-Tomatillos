import React, { Component } from './node_modules/react';
import './Homepage.scss';


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

export class Homepage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
      return(
          // <h1 className="main-title">Rancid Tmatillos</h1>
          <>
          <h1 className="main-title">Rancid Tomatillos</h1>
          <button>Login</button>
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
      </>
      )
  }
}
