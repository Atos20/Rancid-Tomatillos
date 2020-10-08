import React, { Component } from 'react';
import './WelcomingSection.scss';

export function WelcomingSection(props) {
// console.log(props)
  return(
    <div className="movie-section">
      <h1 className="user-welcome">Welcome!</h1>
      {props.name.user && <h2 className="user-name">{props.name.user.name}</h2>}
      <h3 className="movie-day">Rate your next movie</h3>
    </div>
  )
}