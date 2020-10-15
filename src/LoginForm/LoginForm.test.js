import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoginForm } from './LoginForm.js';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//jest.mock('../API/APIcalls');
//import fetcher from '../API/APIcalls';
//import userEvent from  '@testing-library/user-event';


describe('LoginForm', () => {
  it('should render the login form', () => {
    render(
      <Router>
       <LoginForm />
      </Router>
    )
    expect(screen.getByText("User name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("password")).toBeInTheDocument();
  })
})

/* 
Fetcher
    fetcher.fetchUser.mockResolvedValueOnce(
      {
        email: "diana@turing.io",
        id: 82,
        name: "Diana"
    }

Variables


Buttons
const loginButton = screen.getByRole('button', { name: /Submit/i })
const backHomeButton = screen.getByRole('button', { name: /Back to Home/i })

It Blocks
it('should be able to log a user in', () => {

})

*/