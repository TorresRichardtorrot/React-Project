import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { data } from './data.js'
import './style.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules'

export default function App () {
  return (
    <div className='slider__contenedor'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          data.map(item => <SwiperSlide key={item.id} >
            <img src={item.imgUrl} />
            </SwiperSlide>)
        }

      </Swiper>
    </div>
  )
}
