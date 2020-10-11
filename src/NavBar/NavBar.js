import React from 'react';
import { Link } from 'react-router-dom';


import '../Homepage/Homepage.scss'

export const NavBar = (props) => {
  const {logOut, name} = props;
    return (
        <nav className="nav-bar">
          <h1 className="main-title"><i className="fas fa-seedling"></i>Rancid Tomatillos</h1>
          <div className="search-container">
            <i className="fas fa-search"></i>
            <label htmlFor="search-bar">
            <input
              className="search-bar"
              type="text" 
              id="searh-bar"/>
            </label>
          </div>
          <Link to={name ? '/' :'/login'}>
          <button onClick={logOut} className="Login-button">{name ? 'Log out' : 'Log in'}</button>
          </Link>
        </nav>
    )
}

