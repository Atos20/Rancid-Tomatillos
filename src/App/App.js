import React from 'react';
import './App.css';

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

function App() {
  return (
    <div className="App">
      <h1>Rancid Tomatillos</h1>
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
        <section className="Card">
          <div style={styles.title}>Title</div>
          <div style={styles.rating}>Rating</div>
          <img src="https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg" style={styles.poster}></img>
        </section>
        <section className="Card">
          <div style={styles.title}>Title</div>
          <div style={styles.rating}>Rating</div>
          <img src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg" style={styles.poster}></img>
        </section>
        <section className="Card">
          <div style={styles.title}>Title</div>
          <div style={styles.rating}>Rating</div>
          <img src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg" style={styles.poster}></img>
        </section>
      </section>
    </div>
  );
}

export default App;
