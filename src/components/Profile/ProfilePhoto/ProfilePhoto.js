import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import FileReader from 'filereader'

const { BlobServiceClient } = require('@azure/storage-blob')

let url

const account = 'consolephotos'
const sas = process.env.storageastoken
const containerName = 'profilephotos'

const blobServiceClient = new BlobServiceClient(`https://${account}.blob.core.windows.net?${sas}`)

async function getPhoto (user) {
  const containerClient = blobServiceClient.getContainerClient(containerName)
  const blobClient = containerClient.getBlobClient(user.profilePhoto)
  console.log(user.profilePhoto)

  const downloadBlockBlobResponse = await blobClient.download()
  const downloaded = await blobToString(await downloadBlockBlobResponse.blobBody)
  console.log('Downloaded blob content', downloaded)

  async function blobToString (blob) {
    const fileReader = new FileReader()
    return new Promise((resolve, reject) => {
      fileReader.onloadend = (e) => {
        resolve(e.target.result)
      }
      fileReader.onerror = reject
      url = URL.createObjectURL(blob)
    })
  }
}

class ProfilePhoto extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    const { user } = this.props
    getPhoto(user)
  }

  render () {
    return (
      <img src={url}
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%'
        }}></img>
    )
  }
}

export default withRouter(ProfilePhoto)
