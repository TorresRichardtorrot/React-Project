/* eslint-disable react/prop-types */
import './style.css'
import { HiMiniPlus, HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import { useEffect, useState } from 'react'
import { useCart } from '../../hook/useCart'

function ProductDetail ({ product }) {
  const { addToCart } = useCart()
  const [sendToCart, setSendToCart] = useState(product)
  const [amount, setAmount] = useState(1)
  const [size, setSize] = useState('')
  const urlImages = 'http://localhost:9080/img/'

  useEffect(() => {
    const newCart = { ...product, quantity: amount, size }
    setSendToCart(newCart)
  }, [amount, size, product])

  const increment = () => {
    setAmount(amount + 1)
  }

  const decrease = () => {
    if (amount === 1) return
    setAmount(amount - 1)
  }

  const handleAmountChange = (event) => {
    const newValue = parseInt(event.target.value, 10)
    if (!isNaN(newValue) && newValue >= 1) {
      setAmount(newValue)
    }
  }

  const handleSizeChange = (event) => {
    setSize(event.target.value)
  }

  const handleCartClick = () => {
    addToCart(sendToCart)
    setSize('')
    setAmount(1)
  }

  return (
    <main className='product_detail--info'>

    <div className='product__img'>
      <img src={`${urlImages + product.images[0]}`} alt={`${product.brand}-${product.title}`} />
    </div>

    <div className='product__info'>
         <h2>{product.brand}-{product.title}</h2>
         <div className='product__info--talla'>
            <label htmlFor="size">Talla</label>
            <select id="size" value={size} onChange={handleSizeChange}>
                <option value="">Escoge una opción</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
            </select>
         </div>
         <div className='product__info--cantidad'>
            <label htmlFor="catidad">Cantidad</label>

            <div className='cantidad--input'>
                <button onClick={decrease}><HiChevronLeft/></button>
                <input type="number" id='catidad' min={1} value={amount} onChange={handleAmountChange}/>
                <button onClick= {increment}><HiChevronRight/></button>
            </div>

            <span>${product.price}</span>
         </div>
         <div className='product__info--btn'>
            <button onClick={handleCartClick} ><HiMiniPlus/> Añadir al carrito</button>
            <button><HiMiniPlus/> Añadir a favoritos</button>
         </div>
         <div>
            <p>compartir</p>
            <p>{product.category}</p>
         </div>
    </div>
    </main>
  )
}

export default ProductDetail
