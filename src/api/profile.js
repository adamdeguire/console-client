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
