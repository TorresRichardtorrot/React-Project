import { useCart } from '../../hook/useCart'
import { CardProduct } from './CardProduct'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'
function Cart () {
  const { cart, clearCart } = useCart()
  return (
    <aside className='cart__contenedor'>
        {cart.length > 0
          ? <div className='cart__contenedor--btn'>
          <button className='btn__removeCart' onClick={() => clearCart()}><MdOutlineRemoveShoppingCart/></button>
          <button className='btn__pay'>Pagar</button>
         </div>
          : ''

        }
    {cart.length === 0
      ? (
        <div className='cart__no-products'>
          <h2>Sin productos</h2>
          <MdOutlineRemoveShoppingCart/>
        </div>

        )
      : (
        <div className='cart__box'>
    {
       cart.map(product => (
          <CardProduct key={product._id} product={product}/>
       ))
    }

    </div>
        )}

    </aside>

  )
}

export default Cart
