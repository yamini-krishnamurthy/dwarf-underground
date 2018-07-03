import React from 'react'

const ArticleLink = (props) => {
  return (
    <a className="article-link" href="#">
      <i className={props.iClass}></i>
      <span className="article-link-text">{props.text}</span>
    </a>
  )
}

export default ArticleLink
