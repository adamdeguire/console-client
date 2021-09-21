/* eslint-disable no-tabs */
import apiUrl from '../apiConfig'
import axios from 'axios'

export const getProfile = (user, location) => {
  return axios({
    method: 'GET',
    url: `${apiUrl}${location}`,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateProfilePhoto = (user, filename) => {
  return axios({
    method: 'PATCH',
    url: `${apiUrl}/profile-photo`,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: {
      filename
    }
  })
}

export const uploadToBlob = (formData) => {
  return axios({
    method: 'POST',
    url: 'https://consolephotoupload.azurewebsites.net/api/UploadPhoto/',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: {
      formData
    }
  })
}
