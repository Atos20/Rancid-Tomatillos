import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment'

import './Comments.scss';
import moment from 'moment';

export class Comments extends Component  {
  constructor(props) {
    super(props)

    this.state = {
      comment : '',
      likeStatus: false,
      time: moment(),
      replies: []
    }
  }

    updateValue = (event) => {
      event.preventDefault();
      this.setState({[event.target.name]: event.target.value});
    }

    postComment = (event) => {
      event.preventDefault()
      if(!this.state.comment || !this.props.name){
          return false
      }
      this.props.newComment(this.props.movieId, this.state)
      this.props.retrieveComments(this.props.movieId)
      this.clearForm(event)
    }
    
    clearForm = (event) => {
      event.preventDefault()
      this.setState({comment: ''})
    }

    likeComment = (commentId) => {
      const movieComment = this.props.movieComments.find(comment => comment.id === +commentId);
      const  {movieId, id, likeStatus} = movieComment
      movieComment.likeStatus = true
      movieComment.replyCount++
      this.props.likeMovieComment(movieId, id, likeStatus)
  }

  render() {
    
    const { movieComments } = this.props
      return (
        <div className="comment-container">
          
          <div className="inner-comment">
            <h1 className="comment-title">Comments</h1>
            <form className="form-comment">
              <input
                className="input-text"
                type="text"
                name="comment"
                maxLength = "120"
                placeholder="Add your comment here"
                onChange={this.updateValue}
                value={this.state.comment}
              />

              <button 
              type="comment-button"
              onSubmit={this.postComment}
              onClick={this.postComment}
              className="comment-button">
              add comment
              </button>

              <button 
              type="clear-button"
              onClick={this.clearForm}
              name="comment"
              className="clear-button">
              clear
              </button>

            </form>

            {movieComments.map((comment, i) => {
              return <Comment 
                key={i} 
                comment={comment}
                likeComment={this.likeComment}
                name={this.props.name}
              />
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
    movieComments: PropTypes.array,
    likeMovieComment: PropTypes.func
}