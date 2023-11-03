import './style.css'
import { Link } from 'react-router-dom'

function CardProduct ({ brand, price, title, id, images }) {
  return (
   <Link to={`/tienda/${id}`}>
       <article className="product__container">
      <img src={`http://localhost:9080/img/${images[0]}`} alt={title} loading='lazy'/>
      <div className="product__info">
        <span className="product__brand">{brand}</span>
         <h5 className="product__name">{title}</h5>
         <h4 className="product__price">${price}</h4>
       </div>
    </article>
   </Link>
  )
}

export default CardProduct
