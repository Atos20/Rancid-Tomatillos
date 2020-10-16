import React from 'react'
import PropTypes from 'prop-types';
import './Comment.scss'

export const Comment =() =>{
  return (
    <div className="comment-container">
      <div className="inner-comment">
        <input
          value=""
          type="text"
          placeholder="add your comment here"
          role="comment-section"
          type="comment-section"
          maxlength = "120"
        />
        <button 
        role="commnt-button"
        type="commnt-button"
        onClick=""
        className="comment-button">
        add comment
        </button>
      </div>
    </div>
  )
}
