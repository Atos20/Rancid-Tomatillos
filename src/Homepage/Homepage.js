import React, { Component } from 'react';
import { WelcomingSection } from '../WelcomingSection/WelcomingSection'
import  Cards  from '../Cards/Cards'
import fetcher from '../API/APIcalls';
import './Homepage.scss';

export class Homepage extends Component {
    constructor(){
        super()
    }
    render(){

        return(
        <>
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
          <button className="Login-button">Login</button>
        </nav>
        <WelcomingSection />
        <Cards />
        </>
    )
  }
}
