import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import ProfilePhoto from '../../profile/ProfilePhoto/ProfilePhoto'
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
    if (!e.target.classList.contains('showLog')) return
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
    document.addEventListener('mousedown', e => this.handleCommentBlur(e))
  }

  componentWillUnmount () {
    document.removeEventListener('mousedown', e => this.handleCommentBlur(e))
  }

  handleCommentBlur = (e) => {
    if (!e.target.classList.contains('log')) {
      this.setState({ showComments: false })
    }
  }

  render () {
    const { msgAlert, user, log } = this.props
    const { showComments, comments } = this.state
    const s = comments.length === 1 ? '' : 's'
    const commentsButton = (
      <Button className="log showComments" size='sm' variant='outline-primary' onClick={() => this.setState({ showComments: true })}>
        {`${comments.length} Comment${s}`}
      </Button>
    )
    const commentsJsx = (
      <>
        <Comments
          className="log"
          updateComments={this.updateComments}
          msgAlert={msgAlert}
          user={user}
          comments={comments}
          logId={log._id}
        />
        <CreateComment
          className="log"
          updateComments={this.updateComments}
          showComments={showComments}
          msgAlert={msgAlert}
          user={user}
          logId={log._id}
          logOwner={log.owner._id}
        />
      </>
    )
    return (
      <div className="log showLog logContainer" onClick={e => this.goToLog(e)}>
        <div className="log showLog logTitle">
          <ProfilePhoto
            user={log.owner}
          />
          <Link
            to={`/profile/${log.owner.username}`}
            className="log logOwner">
            {log.owner.username}
          </Link>
          {log.title}
          <Link
            to={`/home?language=${log.language}`}
            className="languageLink">
            { log.language ? `{ ${log.language} }` : ''}
          </Link>
          <LogDate createdAt={log.createdAt}/>
        </div>
        <Editor className="log border codeEditor logContent"
          placeholder='// your code here'
          value={log.content}
          onValueChange={() => null}
          highlight={content => highlight(content, languages.js)}
          padding={10}
        />
        {showComments ? commentsJsx : commentsButton}
      </div>
    )
  }
}

export default withRouter(LogContainer)
