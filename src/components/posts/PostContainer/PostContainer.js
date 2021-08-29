import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import CreateComment from '../../comments/CreateComment/CreateComment'
import Comments from '../../comments/Comments'
import PostDate from '../../PostDate/PostDate'

import Editor from 'react-simple-code-editor'
import Button from 'react-bootstrap/Button'

import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import 'prismjs/themes/prism-dark.css'

import './PostContainer.scss'

class PostContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      comments: [],
      showComments: false
    }
  }

  goToPost = (e) => {
    if (!e.target.classList.contains('post')) return
    const { post, history } = this.props
    history.push(`/posts/${post._id}`)
  }

  updateComments = (comment) => {
    const { comments } = this.state
    const newComments = [...comments]
    if (typeof comment === 'string') {
      const index = comments.findIndex(el => el._id === comment)
      newComments.splice(index, 1)
      this.setState({ comments: newComments })
    } else {
      const index = comments.findIndex(el => el._id === comment._id)
      if (index >= 0) {
        newComments.splice(index, 1, comment)

        this.setState({ comments: newComments })
      } else {
        this.setState(prevState => {
          return { comments: [...prevState.comments, comment] }
        })
      }
    }
  }

  componentDidMount () {
    const { post } = this.props
    this.setState({ comments: post.comments })
  }

  toggleComments = () => {
    this.setState(prevState => {
      return { showComments: !prevState.showComments }
    })
  }

  render () {
    const { msgAlert, user, post } = this.props
    const { showComments, comments } = this.state
    const s = comments.length === 1 ? '' : 's'
    const commentsJsx = (
      <>
        <Comments
          updateComments={this.updateComments}
          msgAlert={msgAlert}
          user={user}
          comments={comments}
          postId={post._id}
        />
        <CreateComment
          updateComments={this.updateComments}
          toggleComments={this.toggleComments}
          showComments={showComments}
          msgAlert={msgAlert}
          user={user}
          postId={post._id}
          postOwner={post.owner._id}
        />
      </>
    )
    return (
      <div className="post postContainer" onClick={e => this.goToPost(e)}>
        <div className="post postTitle">
          <Link
            to={`/profile/${post.owner.username}`}
            className="postOwner">{post.owner.username}
          </Link>
          {post.title}
          <PostDate createdAt={post.createdAt}/>
        </div>
        <Editor className="border codeEditor post postContent"
          placeholder='// your code here'
          value={post.content}
          onValueChange={() => null}
          highlight={content => highlight(content, languages.js)}
          padding={10}
        />
        <Button className="showComments" size='sm' variant='outline-primary' onClick={this.toggleComments}>
          {showComments ? 'Hide Comments' : `${comments.length} Comment${s}`}
        </Button>
        {showComments ? commentsJsx : ''}
      </div>
    )
  }
}

export default withRouter(PostContainer)
