import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment'

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
      console.log(event.target)
    }

    postComment = () => {
        if(!this.state.comment || !this.props.name){
            return false
        }
        this.props.newComment(this.props.movieId, this.state.comment)
    }

  render() {
    const { movieComments } = this.props
    console.log(movieComments)
      return (
        <div className="comment-container">
          
          <div className="inner-comment">
            <h1 className="comment-title">Comments</h1>
            <input
              className="input-text"
              type="text"
              name="comment"
              role="comment-section"
              type="comment-section"
              maxLength = "120"
              placeholder="Add your comment here"
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

            {movieComments.map((comment, i) => {
              return <Comment key={i} comment={comment}/>
            })}


          </div>

        </div>
      )
  }
}

Comments.propTypes = {
    postComment: PropTypes.func,
    movieId: PropTypes.number,
    name: PropTypes.string,
    movieComments: PropTypes.array
}