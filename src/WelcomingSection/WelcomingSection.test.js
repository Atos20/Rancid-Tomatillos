import React from 'react';
import { render, screen } from '@testing-library/react';
import { WelcomingSection } from './WelcomingSection.js';
import '@testing-library/jest-dom';
import { BrowserRouter} from 'react-router-dom';

describe('WelcomingSection', () => {
  it('should render the welcome section', () => {
    const fakeUser = {
      email: "diana@turing.io",
      id: 82,
      name: "Diana"
    }
    render(
      <BrowserRouter>
        <WelcomingSection 
          userData={fakeUser}/>
      </BrowserRouter>
      );

    expect(screen.getByText("Rate your next movie")).toBeInTheDocument();
  })
})