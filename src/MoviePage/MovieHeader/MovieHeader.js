import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './MovieHeader.scss';
import Select from 'react-select';

export class MovieHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
          }
          this.ratingValue = [
              { value: 1, label: '1💩' },
              { value: 2, label: '2🤮' },
              { value: 3, label: '3🤢' },
              { value: 4, label: '4👎' },
              { value: 5, label: '5🤝' },
              { value: 6, label: '6👏' },
              { value: 7, label: '7👌' },
              { value: 8, label: '8👍' },
              { value: 9, label: '9🤘' },
              { value: 10, label: '10💯' },
              
            ];
        }

    handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    }

    updateRating = () => {
        this.props.addRating(this.state.selectedOption)
    }

    removeRating = () => {
        this.props.deleteRating()
    }

    toggleFavorite(event) {
        event.preventDefault();
        this.props.toggleFavorite(this.props.movieId)
    }

    render() {

        const {title, tagline} = this.props.movieDetails;

        return (
            <div className="movie-header">
            <h1 className="title">{title}</h1>
            <h2 className="tagline">{tagline}</h2>          
            {this.props.favorites && this.props.name &&
            <button className="favorite-movie" onClick={(event) => this.toggleFavorite(event)}>❤️</button>
            }
            
            {!this.props.favorites && this.props.name &&
            <button className="favorite-movie" onClick={(event) => this.toggleFavorite(event)}>♡</button>
            }
            {this.props.name && <div className="rate-movie">
                
                <button className="delete-rating" onClick={this.removeRating}>Delete Rating</button>
                
                    <Select 
                      role="select-rating"
                      placeholder="Rating" 
                      className="selector" 
                      options={this.ratingValue} 
                      value={this.state.selectedOption} 
                      onChange={this.handleChange}
                    />  

                <button className="add-rating" onClick={this.updateRating}>Rate Movie</button>
            </div>}
        </div>
    )
    }
}

MovieHeader.propTypes = {
    name: PropTypes.string,
    movieDetails: PropTypes.object,
    deleteRating: PropTypes.func,
    addRating: PropTypes.func
}
