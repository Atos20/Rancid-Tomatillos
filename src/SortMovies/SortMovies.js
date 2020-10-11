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
              <div className="sort-control">
                <h4 className="sort-title">sort by</h4>

                <select
                    className="sort-select"
                    name="value" 
                    value={this.state.value} 
                    onChange={this.updateSortValue} 
                    id="sort-select"
                    >
                    <option name="none" value="none">--none--</option>
                    <option name="average_rating" value="descending">Rating descending </option>
                    <option name="average_rating" value="ascending">Rating ascending </option>
                </select>
                <button 
                className="sort-btn"
                onClick={this.getOptionValue}
                ><i class="fas fa-apple-alt"></i>
                </button>
              </div>          
            </div>
        )
    }
}
