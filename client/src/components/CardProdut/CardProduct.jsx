/* eslint-disable react/prop-types */
import './style.css'
import { Link } from 'react-router-dom'
import { MdOutlineAddShoppingCart } from 'react-icons/md'
import { useCart } from '../../hook/useCart'
function CardProduct ({ product }) {
  const { addToCart } = useCart()
  const UrlImages = import.meta.env.VITE_ROUTER_BACKEND_IMG
  const handleAddToCart = () => {
    const newProduct = { ...product, quantity: 1 }
    addToCart(newProduct)
  }

  return (

       <article className="product__container">
        <button className='product__addCart' onClick={handleAddToCart}><MdOutlineAddShoppingCart/></button>

        <Link to={`/tienda/${product._id}`}>
      <img src={`${UrlImages}${product.images[0]}`} alt={product.title} loading='lazy'/>
      <div className="product__info">
        <span className="product__brand">{product.brand}</span>
         <h5 className="product__name">{product.title}</h5>
         <h4 className="product__price">${product.price}</h4>
       </div>
       </Link>
    </article>

  )
}

export default CardProduct
