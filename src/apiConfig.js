let apiUrl
const apiUrls = {
  production: 'http://consoleapi.eastus.cloudapp.azure.com/',
  development: 'http://localhost:3081'
}

window.location.hostname === 'localhost'
  ? apiUrl = apiUrls.development
  : apiUrl = apiUrls.production

export default apiUrl
