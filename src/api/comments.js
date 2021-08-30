/* eslint-disable no-tabs */
import apiUrl from '../apiConfig'
import axios from 'axios'

export const createComment = (comment, user, logId) => {
  return axios({
    method: 'POST',
    url: apiUrl + `/logs/${logId}/comments/`,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: {
      comment: {
        ownerName: comment.ownerName,
        owner: comment.owner,
        content: comment.content,
        _id: comment._id,
        createdAt: comment.createdAt
      }
    }
  })
}

export const updateComment = (comment, user, logId) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + `/logs/${logId}/comments/`,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: {
      comment: {
        ownerName: comment.ownerName,
        owner: comment.owner,
        content: comment.content,
        _id: comment._id
      }
    }
  })
}

export const deleteComment = (user, logId, commentId) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + `/logs/${logId}/comments/`,
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: {
      commentId: commentId,
      userId: user._id
    }
  })
}
