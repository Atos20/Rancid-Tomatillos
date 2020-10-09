import React, {Component} from 'react';
import './ErrorMessage.scss';

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    console.log(props)
  }

  // componentDidCatch(error, info) {
  //   this.setState({ hasError: true });
  //   console.log(error, info);
  // }

  render() {
      return (
      <h1>Something went wrong.{this.props.errorMessageData.errorInfo}, {this.props.errorMessageData.errorMessage}</h1>
      );
    // return this.props.children;
  }
}