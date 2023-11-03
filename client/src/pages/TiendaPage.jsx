import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Sidebar from '../components/Sidebar/Sidebar'
import CardProduct from '../components/CardProdut/CardProduct'
import './TiendaStyle.css'
import { useProducts } from '../context/ProductsContext'
import { useEffect } from 'react'

function TiendaPage () {
  const { products, getProducts } = useProducts()

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <>
        <Navbar/>
        <section className='store__container'>
            <aside className='store__sidebar'>
                <Sidebar/>
            </aside>
            <main className='store__product'>
            <h1>Tienda Virtual</h1>
                <div className='products__box'>
                    {
                      products.length === 0
                        ? (
                          <h2>No hay productos</h2>
                          )
                        : (
                            products.map(product => (
                          <CardProduct

                          brand={product.brand}
                          title={product.title}
                          price={product.price}
                          images={product.images}
                          id={product._id}
                          key={product._id}
                          />
                            ))
                          )
                    }
                </div>
                <Footer/>
            </main>

        </section>
    </>
  )
};
export default TiendaPage
