import { useProducts } from '../../hook/useProducts'
import { Swiper, SwiperSlide } from 'swiper/react'
import CardProduct from '../CardProdut/CardProduct'
import { useEffect } from 'react'
import 'swiper/css'
import './style.css'

function ProductSlider () {
  const { products, getProducts } = useProducts()
  useEffect(() => {
    getProducts()
  }, [])
  return (
  <article className='slider__products--content'>
    <h2>Recomendados</h2>
      <Swiper
      spaceBetween={0}
      slidesPerView={4}
    >
      {
         products.length === 0
           ? (
               <h1>hola</h1>
             )
           : (
               products.map(product => (
                <SwiperSlide key={product._id}>
                    <CardProduct
                    id={product._id}
                    price={product.price}
                    title={product.title}
                    brand={product.brand}
                    images={product.images}
                       />
                </SwiperSlide>
               )
               )
             )
      }

    </Swiper>
  </article>
  )
}
export default ProductSlider
