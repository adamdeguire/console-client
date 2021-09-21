import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { updateProfilePhoto } from '../../../api/profile'

class PhotoUpload extends Component {
  constructor (props) {
    super(props)
    this.state = {
      url: '',
      photo: null
    }
    this.updatePhoto = this.updatePhoto.bind(this)
  }

  updatePhoto (e) {
    e.preventDefault()
    const { user } = this.props
    const input = document.getElementById('photoUpload')

    updateProfilePhoto(user, input.files[0].name)
      .then(() => document.getElementById('photoUploadForm').submit())
      .then(() => window.close())
  }

  render () {
    return (
      <form
        id="photoUploadForm"
        method='post'
        action='https://consolephotoupload.azurewebsites.net/api/UploadPhoto'
        encType='multipart/form-data'
        target="_blank"
      >
        <label htmlFor='photoUpload'>Select a photo:</label>
        <input type='file' id='photoUpload' name='filename' /><br />
        <button onClick={this.updatePhoto}>Submit</button>
      </form>
    )
  }
}

export default withRouter(PhotoUpload)
