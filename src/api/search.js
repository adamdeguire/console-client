import axios from 'axios'

export const truncStr = (string, limit) => {
  return string.length > limit
    ? string
      .trim()
      .substring(0, limit - 3)
      .trim() + '...'
    : string
}

const resources = {}

const makeRequestCreator = () => {
  let cancel

  return async query => {
    if (cancel) cancel.cancel()
    // Create a new CancelToken
    cancel = axios.CancelToken.source()
    try {
      if (resources[query]) { return resources[query] }
      const res = await axios(query, { cancelToken: cancel.token })
      const result = res.data.results
      // Store response
      resources[query] = result

      return result
    } catch (error) {
      axios.isCancel(error)
        ? console.log('Request canceled', error.message)
        : console.log('Something went wrong: ', error.message)
    }
  }
}

export const search = makeRequestCreator()
