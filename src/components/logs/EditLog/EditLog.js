import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
// API request
import { updateLog, showLog } from '../../../api/logs'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'

import './EditLog.scss'

class UpdateLog extends Component {
  constructor (props) {
    super(props)

    this.state = {
      // using null as a starting value will help us manage the "loading state" of our UpdateLog component
      log: { // this should not be null
        title: '', // must provide starting values for the form inputs
        content: ''
      }
    }
  }

  componentDidMount () {
    // one of the automatic router props we get is the match object - that has data about the params in our front-end route url
    const { match, user, msgAlert } = this.props

    showLog(user, match.params.id)
      .then(res => this.setState({ log: res.data.log }))
      .then(() => msgAlert({
        heading: 'Show log success',
        message: 'Check out the log',
        variant: 'success'
      }))
      .catch(err => msgAlert({
        heading: 'Show log failed :(',
        message: 'Something went wrong: ' + err.message,
        variant: 'danger'
      }))
  }

  handleChange = (event) => {
    // because `this.state.log` is an object with multiple keys, we have to do some fancy updating
    const userInput = { [event.target.name]: event.target.value }
    this.setState(currState => {
      // "Spread" out current log state key/value pairs, then add the new one at the end
      // this will override the old key/value pair in the state but leave the others untouched
      return { log: { ...currState.log, ...userInput } }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { user, msgAlert, history, match } = this.props

    updateLog(this.state.log, user, match.params.id)
      .then(res => history.push('/logs/' + match.params.id))
      .then(() => msgAlert({ heading: 'Log Updated!', message: 'Nice work, go check out your log.', variant: 'success' }))
      .catch(err => {
        msgAlert({
          heading: 'Log update failed :(',
          message: 'Something went wrong: ' + err.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { log } = this.state
    const { match } = this.props

    return (
      <>
        <h5 id="updateLogHeader">Edit Log</h5>
        <div className='logContainer'>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId='title'>
              <Form.Control
                required
                className='titleInput'
                name='title'
                value={log.title}
                placeholder='Log Title'
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId='content'>
              <Editor className="border codeEditor"
                value={log.content}
                onValueChange={content => this.setState({ content })}
                highlight={content => highlight(content, languages.js)}
                padding={10}
              />
            </Form.Group>
            <Button id='updateLogButton' variant='primary' type='submit'>Update</Button>
          </Form>
        </div>
        <Link to={`/logs/${match.params.id}`}>
          <Button size='sm' className='btn'>Go back</Button>
        </Link>
      </>
    )
  }
}

export default withRouter(UpdateLog)
