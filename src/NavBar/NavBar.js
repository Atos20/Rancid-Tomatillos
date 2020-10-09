import React, { Components } from 'react';
import { Link } from 'react-router-dom';


import '../Homepage/Homepage.scss'

export function NavBar(props) {
  const {logIn, logOut, isLoggedIn} = props;
    return (
        <nav className="nav-bar">
          <h1 className="main-title"><i className="fas fa-seedling"></i>Rancid Tomatillos</h1>

          <div className="search-container">
            <i className="fas fa-search"></i>
            <label htmlFor="search-bar">
            <input
              className="search-bar"
              type="text" 
              className="search-bar" 
              id="searh-bar"/>
            </label>
          </div>
          <Link to={isLoggedIn ? '/' :'/login'}>
          <button onClick={isLoggedIn ? logOut : logIn} className="Login-button">{isLoggedIn ? 'Log out' : 'Log in'}</button>
          </Link>
        </nav>
    )
}

