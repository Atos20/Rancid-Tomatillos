import React, {Component} from 'react';
import './LoginForm.scss';

export class LoginForm extends Component {
  constructor(props) {
    super(props)  

    this.state = {
        userName: '',
        password: ''
    }
  }

  updateChange = (event) => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value});
  }

  clearInputs = () => {
    this.setState({
        userName: '',
        password: ''
    });
}

  validateCredentials = (e) => {
    e.preventDefault();
    // this.props.verifyUser(this.state);
    console.log(this.state)
    this.clearInputs();
  }

  render(){
    const {userName, password} = this.state
    return (
      <form className="form-container">
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
        onClick={this.validateCredentials} 
        onSubmit={this.validateCredentials} 
        >Submit</button>
      </form>
    )
  }
}