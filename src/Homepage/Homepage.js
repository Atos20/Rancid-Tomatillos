import React, { Component } from 'react';
import { WelcomingSection } from '../WelcomingSection/WelcomingSection'
import  Cards  from '../Cards/Cards'
import './Homepage.scss';

export class Homepage extends Component {
    constructor(props){
        super(props)
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

         /* <section className="Card-area">
          <article className="Card">
            <div >Title</div>
            <div >Rating</div>
            <img src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg" ></img>
          </article> 
        </section> */
    )
  }
}
