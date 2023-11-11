import { useProducts } from '../../hook/useProducts'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useParams } from 'react-router-dom'
import CardProduct from '../CardProdut/CardProduct'
import { useEffect, useState } from 'react'
import 'swiper/css'
import './style.css'

function ProductSlider () {
  const { products, getProducts } = useProducts()
  const [preView, setPreView] = useState(4)
  const { id } = useParams()
  const productSlider = products.filter(product => product._id !== id)
  useEffect(() => {
    getProducts()
    ScreenSize()
  }, [])

  const ScreenSize = () => {
    window.addEventListener('resize', () => {
      const size = window.innerWidth
      if (size < 615) {
        return setPreView(1)
      } else if (size < 890) {
        return setPreView(2)
      } else if (size < 1120) {
        return setPreView(3)
      } else {
        return setPreView(4)
      }
    })
  }

  return (
  <article className='slider__products--content'>
    <h2>Recomendados</h2>
      <Swiper
      spaceBetween={0}
      slidesPerView={preView}
      navigation={true}

    >
      {
         productSlider.length === 0
           ? (
               <h1>No tenemos productos por los momentos</h1>
             )
           : (
               productSlider.map(product => (
                <SwiperSlide className='slider__product--card' key={product._id}>
                    <CardProduct product={product}/>
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
