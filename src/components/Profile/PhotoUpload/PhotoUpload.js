import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import ImageUploader from 'react-images-upload'

class PhotoUpload extends Component {
  constructor (props) {
    super(props)
    this.state = {
      url: '',
      picture: null
    }
    this.onDrop = this.onDrop.bind(this)
  }

  onDrop (picture) {
    console.log(typeof picture)
    console.log(picture)
    const url = URL.createObjectURL(picture[0])
    console.log(url)
    this.setState({ url, picture })
  }

  render () {
    return (
      <>
        <img src={this.state.url} />
        <ImageUploader
          withIcon={true}
          buttonText='Choose images'
          onChange={this.onDrop}
          imgExtension={['.jpg', '.png']}
          maxFileSize={5242880}
          singleImage={true}
        />
      </>
    )
  }
}

export default withRouter(PhotoUpload)
