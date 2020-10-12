import React from 'react';
import { NavBar } from './NavBar';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';


describe("NavBar", () => {
  it('should render a Navigation bar', () => {
    const fakeLogout = jest.fn();
    render(
      <Router>
        <NavBar  name={"Ian"} logOut={fakeLogout}/>
      </Router>
    )
    // userEvent.click(screen.getByText('Log out'))
    // screen.debug()
    // expect(fakeLogout).toHaveBeenCalled(1)
    // expect(fakeLogout).toHaveBeenCalledWith("Ian")
  })
})