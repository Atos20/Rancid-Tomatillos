import React, {Component} from 'react';
import './ErrorMessage.scss';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  render() {
    return (
      <>
        <section className='error-section'>
          <h1>Something went wrong. {this.props.errorMessageData.errorInfo}, {this.props.errorMessageData.errorMessage}</h1>
          <img alt='Old Man Shruggin' src='https://i.stack.imgur.com/eQ20E.jpg'></img>
        </section>
      </>
    );
  }
}