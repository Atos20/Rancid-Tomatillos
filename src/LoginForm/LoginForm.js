import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
import './LoginForm.scss';
//name: 'Diana', email: 'diana@turing.io', password: '111111'
export class LoginForm extends Component {
  constructor() {
    super()  
 
    this.state = {
        userName: '',
        email : '',
        password: '',
        display: true
    }
  }

  updateChange = (event) => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  }

  clearInputs = () => {
    this.setState({
        userName: '',
        email : '',
        password: '',
        display: false
    });
}

  verifyCredentials = (e) => {
    e.preventDefault()
    if (!this.state.userName && !this.state.password && !this.state.email) {
      return false
    } else {

      const credentials = {
        email : this.state.email,
        password : this.state.password
      }
      
      this.props.authenticateUser(credentials);
      this.clearInputs();
 
    }
  }
  
  render(){
    const {userName, email, password} = this.state;
    if (this.props.login.name !== '') {
      return (<Redirect to='/' />)
    }
    
    return (

      <form className="form-container">
        <Link to='/' className="close-login">X</Link>

        <h4 className="user-title">User name</h4>
        <label htmlFor="userName">
          <input 
          name="userName"
          type="text" 
          className="title" 
          id="userName" 
          placeholder="User name"
          value={userName}
          onChange={this.updateChange}
          />
        </label>

        <h4 className="user-email">Email</h4>
        <label htmlFor="user-email">
          <input 
          name="email"
          type="text" 
          className="user-email" 
          id="email" 
          placeholder="email"
          value={email}
          onChange={this.updateChange}
          />
        </label>

        <h4 className="password-title">password</h4>
        <label htmlFor="userName">
          <input 
          name="password"
          type="password" 
          className="password" 
          id="password" 
          placeholder="password"
          value={password}
          onChange={this.updateChange}
          />
        </label>

        <button
          className="log-in-button" 
          onClick={(event) => {
            this.verifyCredentials(event)
            }}
        >Submit
        </button>
      </form>
    )
  }
}
