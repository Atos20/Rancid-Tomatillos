import React, { Components } from 'react';
import '../Homepage/Homepage.scss'

export function NavBar(props) {
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
          <button onClick={props.logIn} className="Login-button">Log in</button>
        </nav>
    )
}
