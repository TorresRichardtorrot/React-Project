import axios from './axios'

const API = import.meta.env.VITE_ROUTER_BACKEND

export const registerRequest = (user) => axios.post(`${API}/register`, user)

export const loginRequest = (user) => axios.post(`${API}/login`, user)

export const logoutRequet = () => axios.post(`${API}/logout`)

export const verityTokenRequet = () => axios.get('/verify')
