import React, {Component} from 'react';
import './Comment.scss';
import PropTypes from 'prop-types';
import moment from 'moment';

export class Comment extends  Component {
  constructor(props){
    super(props)

  getCommentId = (event) => {
    if (!this.props.name){
      return false
    }
    this.props.likeComment(event.target.id)
    event.target.style.color = "#3d7ea6"
  }
  
  render() {
    const {author, time, comment, id, replyCount} = this.props.comment

    return (
      <div 
        id={id}
        role="comments"
        type="comments"
        className="comments">
  
        <div className="user-container">
          <h1 className="user">{author}</h1> 
          <h1 className="time">{moment(time).from()}</h1> 
        </div>
  
       <p className="comment-text">{comment}</p>
       
       <div className="buttons-container">

        <i 
          id={id} 
          className={replyCount > 0 ? "fas blue fa-thumbs-up": "fas fa-thumbs-up"} 
          onClick={this.getCommentId} 
          name="like">
        </i>
        
         <h3 className="like-count">{replyCount}</h3>

        <i 
          id={id} 
          className="far fa-thumbs-down">
        </i>

        <i 
          id={id} 
          className="far fa-trash-alt">
        </i>
       </div>

      </div>
  
    )
  }
}

Comment.propTypes = {
    comment: PropTypes.object,
    name: PropTypes.string,
    likeComment: PropTypes.func
}