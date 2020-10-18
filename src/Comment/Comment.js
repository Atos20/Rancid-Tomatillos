import React from 'react';
import './Comment.scss';
import PropTypes from 'prop-types';

export const Comment = (props) => {
  return (
    <div 
      role="comments"
      type="comments"
      className="comments">
      <div className="user-container">
        <h1 className="user">{props.comment.author}</h1> 
        <h1 className="time">3 months ago</h1> 
      </div>
     <p className="comment-text">{props.comment.comment}</p>
     <div className="buttons-container">
       <i className="far fa-thumbs-up"></i>
       <h3 className="like-count">1</h3>
       <i className="far fa-thumbs-down"></i>
       <i className="far fa-trash-alt"></i>
     </div>
    </div>

  )
}

Comment.propTypes = {
    comment: PropTypes.object
}