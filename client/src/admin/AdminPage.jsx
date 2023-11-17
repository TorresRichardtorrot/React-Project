// import { useAuth } from '../hook/auth'
import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import AdminProduct from './AdminProduct'
import Create from './Create'
import AdminInventary from './AdminInventary'
import Panel from './Panel'
import './style.css'
import AdminDashboard from './AdminDashboard'
import { useProducts } from '../hook/useProducts'
import { EventsAlert } from '../components/EventsAlert/Events'
function AdminPage () {
  const { getProducts, message, error } = useProducts()
  const [page, setPage] = useState('dashboard')
  useEffect(() => {
    getProducts()
  }, [])
  const renderPage = () => {
    switch (page) {
      case 'dashboard':
        return <AdminDashboard/>
      case 'product':
        return <AdminProduct />
      case 'create':
        return <Create />
      case 'web':
        return <Navigate to="/" replace />
      case 'inventory':
        return <AdminInventary/>
      default:
        return <AdminDashboard/>
    }
  }
  return (
    <div className='admin__container'>
    <aside className='admin__sidebar'>
      <Panel setPage={setPage} page={page}/>
    </aside>
    <main className='pages__contenedor'>

      {message && <EventsAlert message={message} error={error}/>}

    {renderPage()}
    </main>

  </div>
  )
}

export default AdminPage
