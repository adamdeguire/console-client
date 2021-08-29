import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { getProfile } from '../../api/profile'
import { indexPostsFailure } from '../AutoDismissAlert/messages'

import PostContainer from '../posts/PostContainer/PostContainer'
import CreatePost from '../posts/CreatePost/CreatePost'

class Profile extends Component {
  constructor (props) {
    super(props)

    this._isMounted = false

    this.state = {
      posts: [],
      path: ''
    }
  }

  componentDidMount () {
    this._isMounted = true
    const { history } = this.props
    const { path } = this.state
    this.getUserProfile(history.location.pathname)
    this.setState({ path: history.location.pathname })
    this.unlisten = history.listen(location => {
      const pathStart = location.pathname.split('/')[1]
      if (location.pathname !== path && pathStart === 'profile') {
        this.getUserProfile(location.pathname)
      }
    })
  }

  componentWillUnmount () {
    this._isMounted = false
    this.unlisten()
  }

  getUserProfile = (path) => {
    if (this._isMounted) {
      const { user, msgAlert } = this.props
      getProfile(user, path)
        .then(res => this.setState({ posts: res.data.posts }))
        .catch(err => {
          msgAlert({
            heading: 'Couldn\'t Create Post',
            message: indexPostsFailure + err.message,
            variant: 'danger'
          })
        })
    }
  }

  updatePosts = (post) => {
    this.setState(prevState => {
      return { posts: [post, ...prevState.posts] }
    })
  }

  render () {
    const { posts } = this.state
    const { user, msgAlert } = this.props
    return (
      <div>
        <CreatePost updatePosts={this.updatePosts} msgAlert={msgAlert} user={user} />
        {posts.map(post => (
          <div key={post._id}>
            <PostContainer
              msgAlert={msgAlert}
              user={user}
              post={post}
              comments={post.comments}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default withRouter(Profile)