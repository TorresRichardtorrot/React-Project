/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'
import { getProductRequest, getProductsRequest, craeteProductRequest, deleteProductRequest, getNewproductRequest } from '../api/products'

export const ProductsContext = createContext()

function ProductsProvider ({ children }) {
  const [products, setProducts] = useState([])
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(null)

  // ? Obtener un producto por su ID
  const getProduct = async (id) => {
    try {
      const res = await getProductRequest(id)
      return res.data
    } catch (error) {
      console.log(error)
    }
  }

  // ? Obtener todos los productos
  const getProducts = async () => {
    try {
      const res = await getProductsRequest()
      setProducts(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  // ? Octener los nuevos productos
  const getNewProduct = async () => {
    try {
      const res = await getNewproductRequest()
      return res.data
    } catch (error) {
      console.log(error)
      return []
    }
  }

  // ? Eliminar producto
  const deleteProduct = async (id) => {
    try {
      const res = await deleteProductRequest(id)
      setProducts(products.filter(product => product._id !== id))
      setError(false)
      return setMessage(res.data)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }
  
  // ? Crear Producto
  const createProduct = async (data) => {
    try {
      const res = await craeteProductRequest(data)
      // console.log(res)
      return setMessage(res.data)
    } catch (error) {
      console.log(error)
      return setMessage(error.data)
    }
  }
  return (
      <ProductsContext.Provider value={{ products, getProduct, getProducts, getNewProduct, deleteProduct, message, setMessage, error, setError, createProduct }}>
        {children}
      </ProductsContext.Provider>
  )
}

export default ProductsProvider
