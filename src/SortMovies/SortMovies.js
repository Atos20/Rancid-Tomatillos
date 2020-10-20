import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './SortMovies.scss';

export class SortMovies extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            favorites: false
        }
    }

    updateSortValue = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    getOptionValue = () => {
        console.log("this.state.favorites in get option value", this.state.favorites)
        this.props.sortMovies(this.state.value)
    }

    toggleFavorites = () => {
        console.log("this.state.favorites in toggle favorites", this.state.favorites)
        if (this.state.favorites) {
            this.setState({ favorites: false })
        } else {
            this.setState({ favorites: true })

        }
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
                <>{!this.state.favorites &&
                    <>
                      <NavLink className="sort-btn" to={`/favorites`}
                        type="apple" 
                        role="apple"
                        className="sort-btn"
                        name="sort"
                        onClick={this.toggleFavorites}
                        >
                        Favorites
                      </NavLink>
                    </>
                    }
                    {this.state.favorites && 
                    <>
                      <NavLink className="sort-btn" to={`/`}
                        type="apple" 
                        role="apple"
                        className="sort-btn"
                        name="sort"
                        onClick={this.toggleFavorites}
                        >
                        All
                      </NavLink>
                    </>
                    }
                </>
                }
              </div>
            </div>
        )
    }
}

SortMovies.propType = {
    sortMovies: PropTypes.func,
    status: PropTypes.string
}
