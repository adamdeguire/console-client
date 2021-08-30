import React, { Component, Fragment } from 'react'

import { Link, Redirect, withRouter } from 'react-router-dom'

import EditComment from '../EditComment'
import { deleteComment } from '../../../api/comments'
import LogDate from '../../LogDate/LogDate'

import Button from 'react-bootstrap/Button'
import './Comment.scss'

class Comment extends Component {
  constructor (props) {
    super(props)

    this.state = {
      comment: null,
      showEdit: false,
      showButtons: false,
      deleted: false
    }
  }

  toggle = (property) => {
    this.setState((prevState) => ({ [property]: !prevState[property] }))
  }

  onDestroyComment = (event) => {
    event.preventDefault()
    const { comment, user, logId, updateComments } = this.props
    deleteComment(user, logId, comment._id)
    updateComments(comment._id)
  }

  //

  render () {
    const { deleted, showEdit, showButtons } = this.state
    const { comment, user, msgAlert, logId, updateComments } = this.props
    const renderButtons = (comment.owner === user._id && showButtons && !showEdit)

    const modifyButtonsJsx = (
      <>
        <Button
          size='sm'
          variant='secondary'
          className="log commentButton edit"
          onClick={() => this.toggle('showEdit')}>
          Edit
        </Button>
        <Button
          size='sm'
          variant='danger'
          className="log commentButton delete"
          onClick={this.onDestroyComment}>
          Delete
        </Button>
      </>
    )

    const editCommentJsx = (
      <>
        <EditComment
          className="log"
          toggle={this.toggle}
          updateComments={updateComments}
          msgAlert={msgAlert}
          comment={comment}
          logId={logId}
          user={user}
        />
        <Button
          className="log"
          size='sm'
          variant='danger'
          onClick={() => this.toggle('showEdit')}>
            Cancel
        </Button>
      </>
    )

    if (deleted) {
      return <Redirect to={
        { pathname: '/home' }
      } />
    }

    return (
      <>
        <div onClick={() => this.toggle('showButtons')}>
          <div className="log comment">
            <Link
              to={`/profile/${comment.ownerName}`}
              className="log commentOwner">{comment.ownerName}
            </Link>
            {showEdit ? editCommentJsx : comment.content}
            <LogDate createdAt={comment.createdAt}/>
            {renderButtons ? modifyButtonsJsx : ''}
          </div>
        </div>
      </>
    )
  }
}

export default withRouter(Comment)
