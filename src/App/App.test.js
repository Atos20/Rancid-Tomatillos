import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.js';
import '@testing-library/jest-dom';



describe('App', () => {
  it('should render the homepage', () => {
    render(<App />);
    expect(screen.getByText("Rancid Tomatillos")).toBeInTheDocument();
    expect(screen.getByText("Welcome!")).toBeInTheDocument();
    expect(screen.getByText("Rate your next movie")).toBeInTheDocument();
    expect(screen.getByText("All movies")).toBeInTheDocument();
  })
  // Implement the below code when we get the router running
  // it('should render the login page', () => {
  //   render(<App />)
  //   expect(screen.getByText("User name")).toBeInTheDocument();
  //   expect(screen.getByText("Email")).toBeInTheDocument();
  //   expect(screen.getByText("password")).toBeInTheDocument();
  // })
})
