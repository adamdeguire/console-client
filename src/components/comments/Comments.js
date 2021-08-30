import React, { Component } from 'react'
import Comment from './Comment/Comment'

class Comments extends Component {
  constructor (props) {
    super(props)

    this.state = {
      comments: [],
      loading: false
    }
  }

  render () {
    const { comments, msgAlert, user, logId, logOwner, updateComments } = this.props
    return (
      <div>
        {comments.map((comment) => (
          <div key={comment._id}>
            <Comment
              updateComments={updateComments}
              logOwner={logOwner}
              msgAlert={msgAlert}
              comment={comment}
              logId={logId}
              user={user}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default Comments
