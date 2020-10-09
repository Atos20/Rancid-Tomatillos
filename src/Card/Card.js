import React, { Component } from 'react'
import fetcher from '../API/APIcalls';
import '../Cards/Cards.scss'

export default function Card(props) {
    const {id, title, release_date, average_rating, poster_path} = props.movies
    return (
      <React.Fragment>
        <div key={id} className="card">
          <h1 className="movie-title">{title}</h1>
          <h2 className="movie-release">{release_date}</h2>
          <div className="rating-container">
            <h2 className="movie-rating">Rating</h2>
            <h2 className="movie-rating">{average_rating}</h2>
          </div>
          <img className="movie-img"src={poster_path} ></img>
        </div> 
      </React.Fragment>
    )
}
