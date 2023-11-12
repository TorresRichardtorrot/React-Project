import { useEffect } from 'react'
import { useProducts } from '../hook/useProducts'
import TableProduct from '../components/TableProduct/TableProduct'

function AdminProduct () {
  const { products, getProducts } = useProducts()
  const header = ['imagen', 'nombre', 'marca', 'precio', 'cantidad', 'acción']
  useEffect(() => {
    getProducts()
  }, [])

  return (
        <div>
              <form className='search__products'>
                <div>
                <input type="search" />
                <button >Buscar</button>
                </div>
              </form>
            {products && products.length > 0 && <TableProduct header={header} data={products}/>}
        </div>
  )
}

export default AdminProduct
