import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import CreateComment from '../../comments/CreateComment/CreateComment'
import Comments from '../../comments/Comments'
import LogDate from '../../LogDate/LogDate'

import Editor from 'react-simple-code-editor'
import Button from 'react-bootstrap/Button'

import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import 'prismjs/themes/prism-dark.css'

import './LogContainer.scss'

class LogContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      comments: [],
      showComments: false
    }
  }

  goToLog = (e) => {
    if (!e.target.classList.contains('log')) return
    const { log, history } = this.props
    history.push(`/logs/${log._id}`)
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
    const { log } = this.props
    this.setState({ comments: log.comments })
  }

  toggleComments = () => {
    this.setState(prevState => {
      return { showComments: !prevState.showComments }
    })
  }

  render () {
    const { msgAlert, user, log } = this.props
    const { showComments, comments } = this.state
    const s = comments.length === 1 ? '' : 's'
    const commentsJsx = (
      <>
        <Comments
          updateComments={this.updateComments}
          msgAlert={msgAlert}
          user={user}
          comments={comments}
          logId={log._id}
        />
        <CreateComment
          updateComments={this.updateComments}
          toggleComments={this.toggleComments}
          showComments={showComments}
          msgAlert={msgAlert}
          user={user}
          logId={log._id}
          logOwner={log.owner._id}
        />
      </>
    )
    return (
      <div className="log logContainer" onClick={e => this.goToLog(e)}>
        <div className="log logTitle">
          <Link
            to={`/profile/${log.owner.username}`}
            className="logOwner">{log.owner.username}
          </Link>
          {log.title}
          <LogDate createdAt={log.createdAt}/>
        </div>
        <Editor className="border codeEditor log logContent"
          placeholder='// your code here'
          value={log.content}
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

export default withRouter(LogContainer)
