import React, { Component } from 'react';
import './MovieHeader.scss';
import Select from 'react-select';

export default class MovieHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
          }
          this.ratingValue = [
              { value: 1, label: '1' },
              { value: 2, label: '2' },
              { value: 3, label: '3' },
              { value: 4, label: '4' },
              { value: 5, label: '5' },
              { value: 6, label: '6' },
              { value: 7, label: '7' },
              { value: 8, label: '8' },
              { value: 9, label: '9' },
              { value: 10, label: '10' },
              
            ];
        }

    handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
    }

    addRating = () => {
        this.props.addRating(this.state.selectedOption)
    }

    render() {
        return (
            <div className="movie-header">
            <h1 className="title">{this.props.movieDetails.title}</h1>
            <h2 className="tagline">{this.props.movieDetails.tagline}</h2>
            {/* this will need to be in a conditional of only being able to bee seen if a user is logged in */}
            {this.props.name && <div className="rate-movie">
                <button className="delete-rating">Delete Rating</button>
                    <Select options={this.ratingValue} value={this.state.selectedOption} onChange={this.handleChange} />
                <button className="add-rating" onClick={this.addRating}>Rate Movie</button>
            </div>}
        </div>
    )
    }
}

