/* eslint-disable no-tabs */
import apiUrl from '../apiConfig'
import axios from 'axios'

export const getProfile = (user, username) => {
  return axios({
    method: 'GET',
    url: `${apiUrl}/profile/${username}`,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
