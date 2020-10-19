import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './SortMovies.scss';

export class SortMovies extends Component {
    constructor(props) {
        super(props)
        //console.log(" SortMovies props", props) for proptypes

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
                    role="select-sorting"
                    className="sort-select"
                    name="value" 
                    value={this.state.value} 
                    onChange={this.updateSortValue} 
                    id="sort-select"
                    >
                    <option 
                    data-testid='none'
                    name="none" 
                    value="none"
                    >--none--</option>
                    <option 
                    data-testid='descending-one'
                    name="average_rating" 
                    value="descending"
                    >Rating descending </option>
                    <option 
                    data-testid='ascending'
                    name="average_rating" 
                    value="ascending"
                    >Rating ascending </option>
                    {/* {this.props.status && <option 
                    data-testid='favorites'
                    name="favorites" 
                    value="favorites"
                    >Favorites </option>} */}
                </select>
                <button 
                  type="apple" 
                  role="apple"
                  className="sort-btn"
                  name="sort"
                  onClick={this.getOptionValue}
                  ><i type="apple-icon" role='apple-icon' className="fas fa-apple-alt"></i>
                </button>
                {this.props.status && 
                <>
                    <NavLink className="sort-btn" to={`/favorites`}>
                        <button 
                            type="apple" 
                            role="apple"
                            className="sort-btn"
                            name="sort"
                            onClick={this.getOptionValue}
                            >Favorites
                        </button>
                    </NavLink>
                    <NavLink className="sort-btn" to={`/`}>
                        <button 
                            type="apple" 
                            role="apple"
                            className="sort-btn"
                            name="sort"
                            onClick={this.getOptionValue}
                            >
                            All
                        </button>
                    </NavLink>
                </>}
                  {/* </select> */}
              </div>          
            </div>
        )
    }
}

SortMovies.propType = {
    sortMovies: PropTypes.func
}
