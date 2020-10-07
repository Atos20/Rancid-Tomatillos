import React, { Component } from 'react';
import './Homepage.scss';

export class Homepage extends Component {
    constructor(props){
        super(props)
    }

    render(){

        return(
        <> 
        <nav className="nav-bar">
          <h1 className="main-title">Rancid Tomatillos</h1>
          <button className="Login">Login</button>
        </nav>

          <section className="Card-area"></section>
           
          <article className="Card">
          <div >Title</div>
          <div >Rating</div>
          <img src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg" ></img>
          </article> 
      </>
    )
    }
}
