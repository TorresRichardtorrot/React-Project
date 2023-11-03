import { createContext, useContext } from 'react'

export const AuthContex = createContext()

export function useAuth () {
  const context = useContext(AuthContex)
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider')
  }
  return context
}

export function AuthaProvider ({ children }) {

}
