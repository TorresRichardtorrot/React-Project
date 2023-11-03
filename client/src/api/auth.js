import axios from './axios'
const API = 'http://localhost:9080/api'

export const registerRequest = (user) => axios.post(`${API}/register`, user)

export const loginRequest = (user) => axios.post(`${API}/login`, user)

export const verityTokenRequet = () => axios.get('/verify')
