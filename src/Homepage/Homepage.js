import React, { Component } from 'react';
import { WelcomingSection } from '../WelcomingSection/WelcomingSection'
import  Cards  from '../Cards/Cards'
import fetcher from '../API/APIcalls';
import './Homepage.scss';

export class Homepage extends Component {
    constructor(props){
        super(props)
        // console.log('homepage',this.props)//userINfo
    }

    render(){
      // console.log(this.props.userName)
      // const { userName, logIn } = this.props
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
          <button onClick={this.props.logIn} className="Login-button">Log in</button>
        </nav>
        <WelcomingSection name={this.props.name}/>
        <Cards />
        </>
    )
  }
}
