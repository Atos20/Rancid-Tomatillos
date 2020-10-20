import React, { Component } from 'react';
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
                <h2 className="sort-title">sort by</h2>

                <select
                    role="menubar"
                    className="sort-select"
                    name="value" 
                    value={this.state.value} 
                    onChange={this.updateSortValue} 
                    id="sort-select"
                    >
                    <option 
                    role='menuitem'
                    data-testid='none'
                    name="none" 
                    value="none"
                    >--none--</option>
                    <option 
                    role='menuitem'
                    data-testid='descending-one'
                    name="average_rating" 
                    value="descending"
                    >Rating descending </option>
                    <option 
                    role='menuitem'
                    data-testid='ascending'
                    name="average_rating" 
                    value="ascending"
                    >Rating ascending </option>
                </select>
                <button 
                  type="apple" 
                  className="sort"
                  name="sort"
                  aria-label="sort"
                  onClick={this.getOptionValue}
                  ><i type="apple-icon" role='img' className="fas fa-apple-alt"></i>
                </button>
                {this.props.status && 
                <>
                    {!this.state.favorites &&
                    <>
                        <NavLink 
                            to={`/favorites`}
                            type="navlink" 
                            role="button"
                            className="view-favorites"
                            name="favorites-button"
                            onClick={this.toggleFavorites}
                            >
                            Favorites
                        </NavLink>
                    </>
                    }
                    {this.state.favorites && 
                    <>
                        <NavLink 
                            to={`/`}
                            type="navlink" 
                            role="button"
                            className="view-all"
                            name="all-button"
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
    sortMovies: PropTypes.func
}
