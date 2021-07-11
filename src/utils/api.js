import axios from 'axios'

const api = axios.create({
  baseURL: 'http://www.omdbapi.com/?i=tt3896198&apikey=5968f00f',
  timeout: 10000,

  headers: {
    Authorization: 'Some key',
  },
})

api.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const makeRequest = () => {
  return api.get()
}
