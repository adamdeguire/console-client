let apiUrl
const apiUrls = {
  production: 'https://console-app-api.herokuapp.com',
  development: 'http://localhost:4741'
}

window.location.hostname === 'localhost'
  ? apiUrl = apiUrls.development
  : apiUrl = apiUrls.production

export default apiUrl
