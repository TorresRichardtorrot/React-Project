import { createContext } from 'react'

export const CartContext = createContext()
function CartProvider ({ children }) {
  return (
        <CartContext.Provider>
          {children}
          </CartContext.Provider>
  )
}

export default CartProvider
