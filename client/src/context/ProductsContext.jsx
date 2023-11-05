import { createContext, useState } from 'react'
import { getProductRequest, getProductsRequest, getNewproductRequest } from '../api/products'

export const ProductsContext = createContext()

function ProductsProvider ({ children }) {
  const [products, setProducts] = useState([])

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
    }
  }

  return (
      <ProductsContext.Provider value={{ products, getProduct, getProducts, getNewProduct }}>
        {children}
      </ProductsContext.Provider>
  )
}

export default ProductsProvider
