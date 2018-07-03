import React from 'react'

class CommentForm extends React.Component {
  constructor() {
    super()
    this.state = {
      comments: [],
      clicked: false,
      value: '',
    }
  }

  toggleCommentForm() {
    this.setState({
      clicked: !this.state.clicked,
    })
  }

  handleSubmit = (event) => {
    const comments = this.state.comments.slice()
    comments.push(this.state.value)
    this.setState({
      comments: comments,
      value: '',
    })
    console.log('Local comments: ' + comments + 'State\'s comments: ' + this.state.comments) 
    event.preventDefault()
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    if(this.state.clicked) {
      return (
        <span>
          <a className="article-link" onClick={() => this.toggleCommentForm()}>
            <i className="fa fa-comments-o"></i>
            <span className="article-link-text">Comments</span>
          </a>

          <form onSubmit={this.handleSubmit}>
            <div>Comment:</div>
            <input 
              type="text" 
              placeholder="Enter your comment..." 
              value={this.state.value}
              onChange={this.handleChange}
              autoFocus
            />

          <input type="submit" value="Submit" />
        </form>

        <ul>
          {this.state.comments.map(comment => <li>{comment}</li>)}
        </ul>
      </span>
      )
    }

    else {
      return (
        <a className="article-link" onClick={() => this.toggleCommentForm()}>
          <i className="fa fa-comments-o"></i>
          <span className="article-link-text">Comments</span>
        </a>
      )
    }
  }
}

export default CommentForm
