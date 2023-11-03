import './style.css'
import { HiMiniPlus, HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import { useState } from 'react'

function ProductDetail ({ title, price, brand, category, images }) {
  const [amount, setAmount] = useState(1)

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
  return (
    <main className='product_detail--info'>

    <div className='product__img'>
      <img src={`http://localhost:9080/img/${images[0]}`} alt="" />
    </div>

    <div className='product__info'>
         <h2>{brand}-{title}</h2>
         <div className='product__info--talla'>
            <label htmlFor="talla">Talla</label>
            <select id="talla">
                <option value="40">Escoge una opción</option>
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

            <span>${price}</span>
         </div>
         <div className='product__info--btn'>
            <button><HiMiniPlus/> Añadir al carrito</button>
            <button><HiMiniPlus/> Añadir a favoritos</button>
         </div>
         <div>
            <p>compartir</p>
            <p>{category}</p>
         </div>
    </div>
    </main>
  )
}

export default ProductDetail
