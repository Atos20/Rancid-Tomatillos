import React from 'react';
import './MovieHeader.scss';

export default function MovieHeader(props) {
    return (
        <div className="movie-header">
            <h1 className="title">{props.movieDetails.title}</h1>
            <h2 className="tagline">{props.movieDetails.tagline}</h2>
        </div>
    )
}
