import React from 'react';
import PropTypes from 'prop-types';
import './WelcomingSection.scss';

export const WelcomingSection = (props) => {

  return(
    <div className="movie-section">
      {props.name.name &&<h1 className="user-welcome">Welcome!</h1>}
      {props.name && <h2 className="user-name">{props.name.name}</h2>}
      <h3 className="movie-day">Rate your next movie</h3>
    </div>
  )
}

WelcomingSection.propTypes = {
  name: PropTypes.object
}