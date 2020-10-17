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
      console.log(event.target)
    }

    postComment = () => {
        if(!this.state.comment || !this.props.name){
            return false
        }
        this.props.newComment(this.props.movieId, this.state.comment)
    }

    render() {
      // console.log(this.props.movieComments)
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
              
            <div 
              role="comments"
              type="comments"
              className="comments">
              <div className="user-container">
                <h1 className="user">diana</h1> 
                <h1 className="time">3 months ago</h1> 
              </div>
                <p className="comment-text">Battle-hardened O’Hara leads a lively mercenary team of soldiers on a daring mission: rescue hostages from their captors in remote Africa.</p>
            </div>
            
            <div 
              role="comments"
              type="comments"
              className="comments">
              <div className="user-container">
                <h1 className="user">diana</h1> 
                <h1 className="time">3 months ago</h1> 
              </div>
                <p className="comment-text">Battle-hardened O’Hara leads a lively mercenary team of soldiers on a daring mission: rescue hostages from their captors in remote Africa.</p>
            </div>

            </div>

          </div>
        )
    }
}

Comment.propTypes = {
    postComment: PropTypes.func,
    movieId: PropTypes.number,
    name: PropTypes.string,
    movieComments: PropTypes.array
}