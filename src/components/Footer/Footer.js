import React, { Component } from 'react'

import Chat from '../Chat/Chat'

import './Footer.scss'

class Footer extends Component {
  constructor (props) {
    super(props)

    this.state = {

    }
  }

  render () {
    const { user } = this.props
    return (
      <div className="footer">
        <Chat user={user} />
      </div>
    )
  }
}

export default Footer
