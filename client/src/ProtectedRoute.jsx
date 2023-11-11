import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './hook/auth'

export function ProtectedRoute () {
  const { loading, isAuthenticated } = useAuth()

  if (loading) return <h1>loading...</h1>

  if (!loading && !isAuthenticated) return <Navigate to="/auth" replace />

  return <Outlet />
}

export default ProtectedRoute
