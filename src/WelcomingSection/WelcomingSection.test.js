import React from 'react';
import { render, screen } from '@testing-library/react';
import { WelcomingSection } from './WelcomingSection.js';
import '@testing-library/jest-dom';

describe('WelcomingSection', () => {
  it('should render the welcome section', () => {
    const fakeProps = {user: {name: "Orlando"}}
    render(<WelcomingSection name={fakeProps}/>);
    expect(screen.getByText("Welcome!")).toBeInTheDocument();
    expect(screen.getByText("Rate your next movie")).toBeInTheDocument();
  })
})