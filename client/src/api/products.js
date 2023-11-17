import axios from './axios'

export const getProductsRequest = () => axios.get('/products')

export const getProductRequest = (id) => axios.get(`/products/${id}`)

export const getNewproductRequest = () => axios.get('/new/products')

export const deleteProductRequest = (id) => axios.delete(`/products/${id}`)
