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
      log: {
        title: '',
        content: ''
      }
    }
  }

  componentDidMount () {
    const { match, user } = this.props

    showLog(user, match.params.id)
      .then(res => this.setState({ log: res.data.log }))
  }

  handleChange = (event) => {
    const userInput = { [event.target.name]: event.target.value }
    this.setState(currState => {
      return { log: { ...currState.log, ...userInput } }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const { user, msgAlert, history, match } = this.props

    updateLog(this.state.log, user, match.params.id)
      .then(res => history.push('/logs/' + match.params.id))
      .catch(err => {
        msgAlert({
          heading: 'Log update failed',
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
            <Button id='updateLogButton' type='submit'>Update</Button>
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
