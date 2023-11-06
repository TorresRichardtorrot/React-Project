/* eslint-disable react/prop-types */
import { GoX } from 'react-icons/go'
import { useCart } from '../../hook/useCart'

export function CardProduct ({ product }) {
  const { removeToCart } = useCart()
  const urlImages = 'http://localhost:9080/img/'

  const handleRemoveToCart = () => {
    removeToCart(product._id)
  }

  return (
        <div className='cart__products'>
            <img src={`${urlImages}${product.images[0]}`} />
            <div className='cart__info'>
                <h4>{product.title}-{product.brand}</h4>
                <p>{product.quantity}</p>
                <small>$ {product.price}</small>
            </div>
            <button onClick={handleRemoveToCart}><GoX/></button>
        </div>
  )
}
