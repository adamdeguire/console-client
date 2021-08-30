import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { getProfile } from '../../api/profile'
import { indexLogsFailure } from '../AutoDismissAlert/messages'

import LogContainer from '../logs/LogContainer/LogContainer'
import CreateLog from '../logs/CreateLog/CreateLog'

class Profile extends Component {
  constructor (props) {
    super(props)

    this._isMounted = false

    this.state = {
      logs: [],
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
        .then(res => this.setState({ logs: res.data.logs }))
        .catch(err => {
          msgAlert({
            heading: 'Couldn\'t Create Log',
            message: indexLogsFailure + err.message,
            variant: 'danger'
          })
        })
    }
  }

  updateLogs = (log) => {
    this.setState(prevState => {
      return { logs: [log, ...prevState.logs] }
    })
  }

  render () {
    const { logs } = this.state
    const { user, msgAlert } = this.props
    return (
      <div>
        <CreateLog updateLogs={this.updateLogs} msgAlert={msgAlert} user={user} />
        {logs.map(log => (
          <div key={log._id}>
            <LogContainer
              msgAlert={msgAlert}
              user={user}
              log={log}
              comments={log.comments}
            />
          </div>
        ))}
      </div>
    )
  }
}

export default withRouter(Profile)
