import React, { Component } from 'react';
import { WelcomingSection } from '../WelcomingSection/WelcomingSection'
import  Cards  from '../Cards/Cards'
import fetcher from '../API/APIcalls';
import './Homepage.scss';

export class Homepage extends Component {
    constructor(props){
        super(props)
    }
    render(){
      const { logIn } = this.props
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
          <button onClick={logIn} className="Login-button">Log in</button>
        </nav>
        <WelcomingSection />
        <Cards />
        </>
    )
  }
}
