import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import TiendaPage from './pages/TiendaPage'
import NosotrosPage from './pages/NosotrosPage'
import ProductPage from './pages/ProductPage'
import ProductsProvider from './context/ProductsContext'
import CartProvider from './context/CartContext'
import AdminPage from './admin/AdminPage'

function App () {
  return (
    <ProductsProvider>
      <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/tienda' element={<TiendaPage />} />
        <Route path='/tienda/:id' element={<ProductPage />} />
        <Route path='/tienda/brands/:name' element={<TiendaPage />} />
        <Route path='/about' element={<NosotrosPage />} />

        <Route>
          <Route path='/admin' element={<AdminPage />} />
        </Route>

      </Routes>
  </BrowserRouter>
  </CartProvider>
  </ProductsProvider>
  )
}

export default App
