import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Comment.scss'

export class Comment extends Component  {
  constructor(props) {
    super(props)

    this.state = {
      value : ''
    }
  }

    updateValue = (event) => {
      event.preventDefault();
      this.setState({[event.target.name]: event.target.value});
    }

    postComment = () => {
        
    }

    render() {
 

        return (
          <div className="comment-container">
            <div className="inner-comment">
              <input
                type="text"
                name="value"
                role="comment-section"
                type="comment-section"
                maxLength = "120"
                placeholder="add your comment here"
                onChange={this.updateValue}
                value={this.state.commentValue}
              />
              <button 
              role="commnt-button"
              type="commnt-button"
              onClick={this.getComment}
              className="comment-button">
              add comment
              </button>
            </div>
          </div>
        )
    }
}

// Comment.propTypes = {
//     commentValue : PropTypes.string,
//     updateValue : PropTypes.func,
//     getValue : PropTypes.func
// }