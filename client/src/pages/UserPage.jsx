import { useAuth } from '../hook/auth'
import { Navigate } from 'react-router-dom'

function UserPage () {
  const { user, logout } = useAuth()
  if (user.role === 'admin') return <Navigate to="/admin" replace />
  return (
        <div>
            <h2>Hola usuario</h2>
            <button onClick={() => {
              logout()
            }}>Chao</button>
        </div>
  )
}

export default UserPage
