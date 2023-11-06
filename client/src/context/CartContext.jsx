/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

export const CartContext = createContext()

function CartProvider ({ children }) {
  const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []
  const [cart, setCart] = useState(cartInitialState)

  const upadateLocalStorage = (cart) => {
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }

  const addToCart = (product) => {
    const { _id } = product
    const productInCartIndex = cart.findIndex(item => item._id === _id)

    if (productInCartIndex >= 0) {
      //! Usando structuredClone
      const { quantity } = product
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += quantity
      upadateLocalStorage(newCart)
      return setCart(newCart)
    }

    const newCart = [
      ...cart,
      {
        ...product
      }
    ]
    upadateLocalStorage(newCart)
    return setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
    upadateLocalStorage([])
  }

  const removeToCart = (id) => {
    const newCart = cart.filter(item => item._id !== id)
    upadateLocalStorage(newCart)
    return setCart(newCart)
  }

  return (
        <CartContext.Provider value={{ addToCart, clearCart, removeToCart, cart }}>
          {children}
          </CartContext.Provider>
  )
}

export default CartProvider
