// import { useAuth } from '../hook/auth'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import AdminProduct from './AdminProduct'
import AdminEdit from './AdminEdit'
import AdminInventary from './AdminInventary'
import Panel from './Panel'
import './style.css'
import AdminDashboard from './AdminDashboard'

function AdminPage () {
  const [page, setPage] = useState('dashboard') // 'admin' es el nombre del componente

  const renderPage = () => {
    switch (page) {
      case 'dashboard':
        return <AdminDashboard/>
      case 'product':
        return <AdminProduct />
      case 'edit':
        return <AdminEdit />
      case 'web':
        return <Navigate to="/" replace />
      case 'inventory':
        return <AdminInventary/>
      default:
        return null
    }
  }
  return (
    <div className='admin__container'>
    <aside className='admin__sidebar'>
      <Panel setPage={setPage} page={page}/>
    </aside>
    <main className='pages__contenedor'>

    {renderPage()}
    </main>

  </div>
  )
}

export default AdminPage
