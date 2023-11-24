import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './hook/auth'

export function ProtectedRoute () {
  const { loading, isAuthenticated, user } = useAuth()
  console.log(isAuthenticated, user)

  if (loading) return <h1>loading...</h1>

  if (!loading && !isAuthenticated) return <Navigate to="/auth" replace />

  return <Outlet />
}

export default ProtectedRoute
