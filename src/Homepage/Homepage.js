import React, { Component } from 'react';
import { WelcomingSection } from '../WelcomingSection/WelcomingSection'
import Cards  from '../Cards/Cards'
import { NavBar } from '../NavBar/NavBar'
import './Homepage.scss';

export class Homepage extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
        <>
          <NavBar 
            isLoggedIn={this.props.isLoggedIn} 
            logOut={this.props.logOut} 
          />
          
          <WelcomingSection name={this.props.name}/>
          <Cards />
        </>
    )
  }
}
