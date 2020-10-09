import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {LoginForm} from '../LoginForm/LoginForm'
import { Homepage } from '../Homepage/Homepage'
import { ErrorBoundary } from '../ErrorMessage/ErrorMessage.js';

import fetcher from '../API/APIcalls';
import './App.scss';

export class App extends Component{
  constructor() {
    super()

    this.state = {
      userData:  {
        id: null,
        name: '',
        email: ''
      },
      hasError: ''
    }
  }

  buttonHandling = (event) => {
    if(event.target.innerHTML === 'Log in') {
      console.log('button')
    } 
}


componentDidCatch(error, info) {
  this.setState({ hasError: {errorMessage: error, errorInfo: info} });
  console.log(error, info);
}

  authenticateUser = async (credentials) => {
    const promise = await fetcher.fetchUser(credentials)
      this.setState({ userData: promise.user })
      this.showHomepage()
      // if (this.state.userData !== {}) {
      // //  this.props.history.push('/')
      // }
  }

  showHomepage = () => {
    console.log(this.props.history)
  }

  logOut = () => {
    this.setState ( {
      userData:  {
        id: null,
        name: '',
        email: ''
      }
    })
  }
  

  render(){
    const { userData } = this.state;
    
//     if (this.state.hasError) {
//       return (
//         <ErrorBoundary errorMessageData={this.state.hasError}/>
//       )
//     } else {
  
    return (
      <Router>
        <h1 className="login-info"><b>{userData.name ? 'currently' : 'not'}</b> logged in</h1>
        <Route 
          exact path= '/'
          render={() => {
            return (
              <Homepage 
                logIn={this.buttonHandling} 
                name={this.state.userData} 
                isLoggedIn={this.state.userData.name} 
                logOut={this.logOut}
              />
            )
          }}
        />

        <Route 
        path='/login' 
        component={() => {
        return  <LoginForm authenticateUser={this.authenticateUser}/>}}/>
      </Router>
    );
  }
}

export default App;
