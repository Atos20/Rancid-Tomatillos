import React, { Component, useState } from 'react';
import moment from 'moment';
import './SortMovies.scss';

export class SortMovies extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    }
    
    updateSortValue = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    getOptionValue = () => {
        this.props.sortMovies(this.state.value)
    }

    
    render() {

        return (
            <div className="sort-container">
              <h1 className="cards-title">All movies</h1>
              <h4 className="sort-title">sort by</h4>
              <select
                name="value" 
                value={this.state.value} 
                onChange={this.updateSortValue} 
                id="sort-select"
              >
                <option name="none" value="none">--Pick option--</option>
                {/* <option name="release_date" value="release_date">Date</option> */}
                <option name="average_rating" value="average_rating_descending">Rating descending </option>
                <option name="average_rating" value="average_rating_ascending">Rating ascending </option>
                {/* <option name="title" value="title">Title</option> */}
                {/* <option name="budget" value="budget">Budget</option>
                <option name="revenue" value="revenue">Revenue</option>
                <option name="genre" value="genre">Genre</option> */}
              </select>

              <button 
              className="sort-btn"
              onClick={this.getOptionValue}
              >find
              </button>

            </div>
        )
    }
}
