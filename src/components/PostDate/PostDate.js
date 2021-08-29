import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './PostDate.scss'

class PostDate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dateText: ''
    }
  }

  componentDidMount = () => {
    const { createdAt } = this.props
    const date = new Date(createdAt)

    const seconds = ((Date.now() - date) / 1000)
    const minutes = seconds / 60
    const hours = minutes / 60
    const days = hours / 24
    const weeks = days / 7
    const months = weeks / 4
    const years = months / 12

    const dateDiff =
        seconds < 60
          ? { value: seconds, unit: 'second' }
          : minutes < 60
            ? { value: minutes, unit: 'minute' }
            : hours < 24
              ? { value: hours, unit: 'hour' }
              : days < 7
                ? { value: days, unit: 'day' }
                : weeks < 4
                  ? { value: weeks, unit: 'week' }
                  : months < 12
                    ? { value: months, unit: 'month' }
                    : { value: years, unit: 'year' }

    dateDiff.value = dateDiff.value.toFixed(0)

    const s = (dateDiff.value === '1')
      ? ''
      : 's'

    const dateText = isNaN(dateDiff.value)
      ? 'Just now'
      : `${dateDiff.value} ${dateDiff.unit}${s} ago`

    this.setState({ dateText })
  }

  render () {
    return (
      <div className="date">
        {this.state.dateText}
      </div>
    )
  }
}

export default withRouter(PostDate)
