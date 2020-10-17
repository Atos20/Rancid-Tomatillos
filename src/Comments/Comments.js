import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Comments.scss'

export class Comments extends Component  {
  constructor(props) {
    super(props)

    this.state = {
      comment : ''
    }
  }

    updateValue = (event) => {
      event.preventDefault();
      this.setState({[event.target.name]: event.target.value});
    }

    postComment = () => {
        if(!this.state.comment || !this.props.name){
            return false
        }
        this.props.newComment(this.props.movieId, this.state.comment)
    }

    render() {
        return (
          <div className="comment-container">
            <div className="inner-comment">
              <input
                type="text"
                name="comment"
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
              onClick={this.postComment}
              className="comment-button">
              add comment
              </button>
            </div>
          </div>
        )
    }
}

Comment.propTypes = {
    postComment: PropTypes.func,
    movieId: PropTypes.number,
    name: PropTypes.string
}