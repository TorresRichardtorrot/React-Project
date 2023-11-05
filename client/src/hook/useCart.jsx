import { useContext } from 'react'
import { ProductsContext } from '../context/CartContext'

export const useProducts = () => {
  const context = useContext(ProductsContext)
  if (!context) {
    throw new Error('useProducts debe utilizarse dentro de un ProductsProvider')
  }
  return context
}
