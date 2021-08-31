import React, { Component } from 'react'
import { Link, Redirect, withRouter } from 'react-router-dom'

import { deleteLog, showLog } from '../../../api/logs'
import { showLogFailure, deleteLogSuccess, deleteLogFailure } from '../../AutoDismissAlert/messages'

import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import LogContainer from '../LogContainer/LogContainer'

class Log extends Component {
  constructor (props) {
    super(props)

    this.state = {
      log: null,
      deleted: false
    }
  }

  componentDidMount () {
    const { user, match, msgAlert } = this.props

    showLog(user, match.params.id)
      .then(res => this.setState({ log: res.data.log }))
      .catch(err => {
        msgAlert({
          heading: 'Couldn\'t Create Log',
          message: showLogFailure + err.message,
          variant: 'danger'
        })
      })
  }

  destroy = () => {
    const { user, match, msgAlert } = this.props
    deleteLog(user, match.params.id)
      .then(() => {
        msgAlert({
          heading: 'Log Deleted',
          message: deleteLogSuccess,
          variant: 'success'
        })
      })
      .then(() => this.setState({ deleted: true }))
      .catch(err => {
        msgAlert({
          heading: 'Couldn\'t Delete Log',
          message: deleteLogFailure + err.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { log, deleted } = this.state
    const { user, msgAlert } = this.props

    const modifyButtonsJsx = (
      <>
        <Link to={`/logs/${this.props.match.params.id}/edit`}>
          <Button size='sm' variant='primary'>Edit</Button>
        </Link>
        <Button size='sm' variant='danger' onClick={this.destroy}>Delete log</Button>
      </>
    )

    if (!log) {
      return (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )
    }

    if (deleted) {
      return <Redirect to={
        { pathname: '/home' }
      } />
    }

    return (
      <>
        <LogContainer
          msgAlert={msgAlert}
          user={user}
          log={log}
          comments={log.comments}
        />
        <Link to="/home">
          <Button size='sm' className='btn'>Go back</Button>
        </Link>
        {log.owner._id === user._id ? modifyButtonsJsx : ''}
      </>
    )
  }
}

export default withRouter(Log)
