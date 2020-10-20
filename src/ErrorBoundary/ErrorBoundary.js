import React from 'react';
import './ErrorBoundary.scss';

export const ErrorBoundary = () => {
// export const ErrorBoundary = (props) => {
  return (
    <>
      <section className='error-section'>
        <h1>Something went wrong.</h1> 
        {/* <h2>{props.error}</h2> */}
        <img alt='Old Man Shruggin' src='https://i.stack.imgur.com/eQ20E.jpg'></img>
      </section>
    </>
  );
}
