import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Comment.scss'

export class Comment extends Component  {
    constructor(props) {
        super(props)
        
        this.state = {
            commentValue : ''
        }
    }


    render() {


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
                onChange=""
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
}

Comment.propTypes = {
    commentValue : PropTypes.string,
    updateValue : PropTypes.func,
    getValue : PropTypes.func
}