import React from 'react';
import { render, screen } from '@testing-library/react';
import { LoginForm } from './LoginForm.js';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';

describe('LoginForm', () => {
  it('should render the login form', () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    )
    expect(screen.getByText("User name")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("password")).toBeInTheDocument();
  })
})
