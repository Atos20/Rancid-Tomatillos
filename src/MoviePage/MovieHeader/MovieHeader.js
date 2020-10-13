import React, { Component } from 'react';
import './MovieHeader.scss';

export default class MovieHeader extends Component {
    constructor(props) {
        super(props);
        this.ratingValue = document.querySelector('.rating-select')
    }

    addRating = () => {
        this.props.addRating('placeholder value')
    }

    render() {
        return (
            <div className="movie-header">
            <h1 className="title">{this.props.movieDetails.title}</h1>
            <h2 className="tagline">{this.props.movieDetails.tagline}</h2>
            {/* this will need to be in a conditional of only being able to bee seen if a user is logged in */}
            <div className="rate-movie">
                <button className="delete-rating">Delete Rating</button>
                <select className="rating-select" id="rating-select">
                    <option className="value" value="1">option 1</option>
                    <option value="2">option 2</option>
                    <option value="3">option 3</option>
                    <option value="4">option 4</option>
                    <option value="5">option 5</option>
                    <option value="6">option 6</option>
                    <option value="7">option 7</option>
                    <option value="8">option 8</option>
                    <option value="9">option 9</option>
                    <option value="10">option 10</option>
                </select>
                <button className="add-rating" onClick={this.addRating}>Rate Movie</button>
            </div>
        </div>
    )
    }
}

// export default function MovieHeader(props) {
//     return (
//         <div className="movie-header">
//             <h1 className="title">{props.movieDetails.title}</h1>
//             <h2 className="tagline">{props.movieDetails.tagline}</h2>
//             {/* this will need to be in a conditional of only being able to bee seen if a user is logged in */}
//             <div className="rate-movie">
//                 <button className="delete-rating">Delete Rating</button>
//                 <select className="ratingSelect" id="ratingSelect">
//                     <option value="1">option 1</option>
//                     <option value="2">option 2</option>
//                     <option value="3">option 3</option>
//                     <option value="4">option 4</option>
//                     <option value="5">option 5</option>
//                     <option value="6">option 6</option>
//                     <option value="7">option 7</option>
//                     <option value="8">option 8</option>
//                     <option value="9">option 9</option>
//                     <option value="10">option 10</option>
//                 </select>
//                 <button className="add-rating" onClick={props.addRating(400)}>Rate Movie</button>
//             </div>
//         </div>
//     )
// }
