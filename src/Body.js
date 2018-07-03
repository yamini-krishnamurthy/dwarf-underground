import React from 'react'

import Article from './Article'
import Author from './Author'
import ArticleLink from './ArticleLink'

const Body = () => {
  return (
    <div className="large-8 medium-12 columns article">
      <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
      <Author />
      <Article />
      <div className="article-links">
        <ArticleLink iClass="fa fa-comments-o" text="Comments" />
        <ArticleLink iClass="fa fa-share" text="Share Post" />
      </div>
    </div>
  )
}

export default Body
