/* eslint-disable no-tabs */
import apiUrl from '../apiConfig'
import axios from 'axios'

export const createLog = (log, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/logs/',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: {
      log: {
        owner: log.owner,
        title: log.title,
        content: log.content,
        language: log.buttonValue
      }
    }
  })
}

export const indexLogs = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/home/',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const showLog = (user, logId) => {
  return axios({
    method: 'GET',
    url: `${apiUrl}/logs/${logId}`,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteLog = (user, logId) => {
  return axios({
    method: 'DELETE',
    url: `${apiUrl}/logs/${logId}`,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateLog = (log, user, logId) => {
  return axios({
    method: 'PATCH',
    url: `${apiUrl}/logs/${logId}`,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: {
      log: {
        title: log.title,
        content: log.content
      }
    }
  })
}
