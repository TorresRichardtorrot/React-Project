import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { useProducts } from '../hook/useProducts'
import ProductDetail from '../components/ProductDetail/ProductDetail'
import ProductSlider from '../components/productSlider/ProductSlider'
import './TiendaStyle.css'

function ProductPage () {
  const [product, setProduct] = useState([])
  const { id } = useParams()
  const { getProduct } = useProducts()

  useEffect(() => {
    async function loadProduct () {
      const product = await getProduct(id)
      if (product) {
        setProduct(product)
      }
    }
    loadProduct()
  }, [id])

  return (
        <section className='product_detail__container'>
            <Navbar/>
              <div className='product_detail__box'>
                <div className='product_detail--link'><Link to={'/tienda'} >Volver a la tienda</Link></div>

                  {product.length === 0
                    ? (
                       <h2>no product</h2>
                      )
                    : (
                      <ProductDetail
                      title={product.title}
                      price={product.price}
                      brand={product.brand}
                      images={product.images}
                      category={product.category}/>
                      )}
              </div>

              <ProductSlider/>
            <Footer/>
        </section>
  )
}

export default ProductPage
