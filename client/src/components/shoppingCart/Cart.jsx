import { GoX } from 'react-icons/go'
function Cart () {
  return (
    <aside className='cart__contenedor'>
    <h4>No tienes productos agregados</h4>
    <div className='cart__box'>

      <div className='cart__products'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDzV2xDxDFqsG3d9rAGqOR0-ab2xygp5XIBw&usqp=CAU" alt="" />
        <div className='cart__info'>
          <h4>walkman</h4>
          <p>some description</p>
          <small>$ 249.90</small>
        </div>
        <button><GoX/></button>
      </div>
    </div>
  </aside>
  )
}

export default Cart
