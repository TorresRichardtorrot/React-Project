/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react'
import { registerRequest, loginRequest, verityTokenRequet, logoutRequet } from '../api/auth'
import Cookies from 'js-cookie'
export const AuthContext = createContext()

export default function AuthProvider ({ children }) {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState([])
  const [loading, setLoading] = useState(true)

  // ?Registro
  const signup = async (userDate) => {
    try {
      const res = await registerRequest(userDate)
      setUser(res.data)
      setIsAuthenticated(true)
    } catch (error) {
      return setError(error.response.data)
    }
  }

  // ?Login
  const signin = async (userDate) => {
    try {
      const res = await loginRequest(userDate)
      setUser(res.data)
      setIsAuthenticated(true)
    } catch (error) {
      return setError(error.response.data)
    }
  }
  // ? Logout
  const logout = async () => {
    try {
      await logoutRequet()
      Cookies.remove('token')
      setUser(null)
      setIsAuthenticated(false)
    } catch (error) {
      console.log(error)
      setError(error.response.data)
    }
  }

  useEffect(() => {
    async function checkLogin () {
      const cookies = Cookies.get()

      if (!cookies.token) {
        setIsAuthenticated(false)
        setLoading(false)
        setUser(null)
        return
      }
      try {
        const res = await verityTokenRequet(cookies.token)

        if (!res.data) {
          setIsAuthenticated(false)
          setLoading(false)
          return
        }
        setIsAuthenticated(true)
        setUser(res.data)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setIsAuthenticated(false)
        setUser(null)
        setLoading(false)
      }
    }
    checkLogin()
  }, [])

  return (
    <AuthContext.Provider value={{ signup, signin, logout, user, loading, error, isAuthenticated, setError }}>
        {children}
    </AuthContext.Provider>

  )
}
