import { useEffect, useState } from 'react'
import { useProducts } from '../hook/useProducts'
import TableProduct from '../components/TableProduct/TableProduct'

function AdminProduct () {
  const { products, getProducts } = useProducts()
  const [filter, setFilter] = useState(products)
  const header = ['imagen', 'nombre', 'marca', 'precio', 'cantidad', 'acción']
  const [productDeleted, setProductDeleted] = useState(null)

  useEffect(() => {
    if (productDeleted === null) return
    setFilter(products)
    setProductDeleted(null)
  }, [products])

  useEffect(() => {
    getProducts()
  }, [])

  const filterProducts = (filtro) => {
    return products.filter(product => {
      return (
        product.title.toLowerCase().includes(filtro) ||
        product.brand.toLowerCase().includes(filtro)
      )
    })
  }
  const handleChangeSearch = (event) => {
    const palabra = event.target.value.toLowerCase()
    setFilter(filterProducts(palabra))
  }

  return (

    products.length > 0
      ? (
            <div>
              <form className='search__products'>
                <div className='search__products__content'>
                  <input type="text" onChange={handleChangeSearch} placeholder='Buscar...' autoFocus/>
                </div>
              </form>
            {filter && products.length > 0 && <TableProduct setProductDeleted={ setProductDeleted} header={header} data={filter}/>}
        </div>
        )
      : (
            <h1>No tienes productos Agregados</h1>
        )

  )
}

export default AdminProduct
