import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { createLog } from '../../../api/logs'
import { createLogSuccess, createLogFailure } from '../../AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'

import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import 'prismjs/themes/prism-dark.css'

import './CreateLog.scss'
import '../LogContainer/LogContainer.scss'

import languageOptions from './languageOptions'

class CreateLog extends Component {
  constructor (props) {
    super(props)

    this.state = {
      title: '',
      content: '',
      language: 'javascript',
      buttonValue: 'Language',
      placeholder: '// your code here',
      height: '110px',
      logId: null,
      showCreate: false
    }
  }

  handleChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value
    })

  onCreateLog = (event) => {
    event.preventDefault()

    const { msgAlert, history, user, updateLogs } = this.props

    createLog(this.state, user)
      .then(res => {
        this.setState({ logId: res.data.log._id })
        return res
      })
      .then(res => updateLogs({
        owner: user,
        title: this.state.title,
        content: this.state.content,
        comments: [],
        _id: res.data.log._id
      }))
      .then(() => history.push('/home'))
      .then(() => this.setState({ title: '', content: '' }))
      .then(() => {
        msgAlert({
          heading: 'Log Created',
          message: createLogSuccess,
          variant: 'success'
        })
      })
      .catch((err) => {
        msgAlert({
          heading: 'Couldn\'t Create Log',
          message: createLogFailure + err.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { title, buttonValue, showCreate } = this.state

    return showCreate
      ? (
        <>
          <div>
            <h5 id="createLogHeader">Create Log</h5>
            <Dropdown className="languages">
              <Dropdown.Toggle className="languages">
                {buttonValue}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {languageOptions.map((option, index) => (
                  <Dropdown.Item key={index}
                    onClick={() => this.setState({
                      language: option.language,
                      buttonValue: option.buttonValue,
                      placeholder: option.placeholder,
                      height: option.height
                    })} href="#/javascript">
                    {option.buttonValue}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className='logContainer'>
            <Form onSubmit={this.onCreateLog}>
              <Form.Group controlId='title'>
                <Form.Control
                  required
                  autoComplete="off"
                  className='titleInput'
                  name='title'
                  value={title}
                  placeholder='Log Title'
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId='content'>
                <Editor className="border codeEditor"
                  style={{ minHeight: this.state.height }}
                  placeholder={this.state.placeholder}
                  value={this.state.content}
                  onValueChange={content => this.setState({ content })}
                  highlight={content => highlight(content, languages.js)}
                  padding={10}
                />
              </Form.Group>
              <Button className="logButton" onClick={() => this.setState({ showCreate: false })}>Cancel</Button>
              <Button className="logButton" id='createLogButton' variant='primary' type='submit'>Create</Button>
            </Form>
          </div>
        </>
      )
      : (<Button className="logButton" onClick={() => this.setState({ showCreate: true })}>New Log</Button>)
  }
}

export default withRouter(CreateLog)
