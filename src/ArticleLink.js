import React from 'react'

import CommentForm from './CommentForm'

const ArticleLink = (props) => {
  return (
    <div className="article-links">
      <CommentForm />
      <a className="article-link" href="#">
        <i className="fa fa-share"></i>
        <span className="article-link-text">Share Post</span>
      </a>
    </div>
  )
}

export default ArticleLink
