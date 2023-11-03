import { useEffect, useRef, useState } from 'react'
import './style.css'
import { data } from './data.js'

function Slider () {
  const listRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)
  const dataLength = data.length

  useEffect(() => {
    const listNode = listRef.current
    const imgNode = listNode.querySelectorAll('li > img')[currentIndex]

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }, [currentIndex])

  const scrollToImage = (direction) => {
    console.log(dataLength)
    if (direction === 'prev') {
      setCurrentIndex(curr => {
        const isFirstSlide = currentIndex === 0
        return isFirstSlide ? setCurrentIndex(dataLength - 1) : curr - 1
      })
    } else {
      const isLastSlider = currentIndex === dataLength - 1
      return isLastSlider ? setCurrentIndex(0) : setCurrentIndex(curr => curr + 1)
    }
  }

  const goToSlider = (sliderIndex) => {
    setCurrentIndex(sliderIndex)
  }
  return (
        <div className="main-container">
            <div className="slider-container">
                <span className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</span>
                <span className='rightArrow'onClick={() => scrollToImage('next')}>&#10093;</span>
                <div className="container-images">
                    <ul ref={listRef}>
                        {
                            data.map((item) => {
                              return <li key={item.id}>
                                <img className='images-slider' src={item.imgUrl} alt="" />
                                </li>
                            })
                        }

                    </ul>
                </div>
                <div className='dots-container'>
                        {
                            data.map((_, idx) => (
                                <span key={idx}
                                className={`dot-container-item ${idx === currentIndex ? 'active' : ''}`}
                                onClick={() => goToSlider(idx)}>
                                </span>
                            ))
                        }
                </div>
            </div>
        </div>
  )
}

export default Slider
