import { useAuth } from '../hook/auth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Login } from '../components/formAuth/Login'
import { EventsAlert } from '../components/EventsAlert/Events'

function AuthPage () {
  const navigate = useNavigate()
  const { isAuthenticated, error } = useAuth()

  useEffect(() => {
    if (isAuthenticated) navigate('/admin')
  }, [isAuthenticated])

  return (
        <main className='form__container'>
            <EventsAlert message={error[0]} error={true}/>
            <Login/>
        </main>

  )
};
export default AuthPage
