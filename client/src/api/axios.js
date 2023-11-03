import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:9080/api',
  withCredentials: true
})

export default instance
