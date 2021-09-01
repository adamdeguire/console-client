import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Accordion from 'react-bootstrap/Accordion'
import CloseButton from 'react-bootstrap/CloseButton'

import './Chat.scss'

class Chat extends Component {
  constructor (props) {
    super(props)

    this.state = {
      notifications: [1, 2, 3, 4],
      chats: [
        {
          username: 'user1'
        },
        {
          username: 'user2'
        },
        {
          username: 'user3'
        },
        {
          username: 'user4'
        }
      ]
    }
  }

  render () {
    const { notifications, chats } = this.state
    return (
      <>
        <Accordion id="chat">
          <Accordion.Item eventKey="0">
            <Accordion.Header>{
              notifications.length
                ? `Chat (${notifications.length})`
                : 'Chat'
            }</Accordion.Header>
            <Accordion.Body>
              {chats.map((chat, index) => {
                return (
                  <Accordion key={index}>
                    <Accordion.Item eventKey={index + 1}>
                      <Accordion.Header>{chat.username}<CloseButton variant="white"/></Accordion.Header>
                      <Accordion.Body>
                        <div className="message"><div className="sent content">Hello 1</div></div>
                        <div className="message"><div className="received content">Hello 2</div></div>
                      </Accordion.Body>
                      <Accordion.Body>
                        <input></input>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                )
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>
    )
  }
}

export default withRouter(Chat)
