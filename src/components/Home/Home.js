import React, { Component } from 'react'

import { indexLogs } from '../../api/logs'
import { indexLogsFailure } from '../AutoDismissAlert/messages'

import LogContainer from '../logs/LogContainer/LogContainer'
import CreateLog from '../logs/CreateLog/CreateLog'

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      logs: [],
      loading: false
    }
  }

  componentDidMount () {
    const { user, msgAlert } = this.props

    indexLogs(user)
      .then(res => this.setState({
        logs: res.data.logs.reverse()
      }))
      .catch(err => {
        msgAlert({
          heading: 'Couldn\'t Create Log',
          message: indexLogsFailure + err.message,
          variant: 'danger'
        })
      })
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

export default Home
