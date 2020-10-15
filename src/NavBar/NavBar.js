import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../Homepage/Homepage.scss'

export const NavBar = (props) => {
  const {logOut, name} = props;
    return (
        <nav className="nav-bar">
          <h1 className="main-title"><i className="fas fa-seedling"></i>Rancid Tomatillos</h1>
          <div className="search-container">
          </div>
          <div className='button-container'>
            <Link to= '/' >
            <button className="Login-button">home</button>
            </Link>
            <Link to={name ? '/' :'/login'}>
            <button onClick={logOut} className="Login-button">{name ? 'Log out' : 'Log in'}</button>
            </Link>
          </div>
        </nav>
    )
}

NavBar.prototype = {
  name: PropTypes.string,
  logOut: PropTypes.func
}
