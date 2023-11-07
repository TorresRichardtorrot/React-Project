import { Link } from 'react-router-dom'
import { GoSearch } from 'react-icons/go'
import { TfiMenu } from 'react-icons/tfi'
import { MdShoppingCartCheckout } from 'react-icons/md'
import { TbUserCircle } from 'react-icons/tb'
import './style.css'
import { useId } from 'react'
import Cart from '../shoppingCart/Cart'
import { useCart } from '../../hook/useCart'
const rutaIcons = '/src/assets/icons/'

function Navbar () {
  const { cart } = useCart()
  const quantityProducts = cart.length
  const cartCheckboxId = useId()
  const menuCheckboxId = useId()

  return (
          <header className='navbar__contenedor'>
            <div className='navbar__contenedor--logo'>
            <Link to='/'>
                <img className='logo_image-1' src={`${rutaIcons}logo1.svg`} alt="logo" />
                <img className='logo_image-2' src={`${rutaIcons}logo.svg`} alt="logo" />
            </Link>
            </div>
            <form className='navbar__contenedor--buscador'>
                <input className='navbar__contenedor--buscador--input' type="text" />
                <button className='navbar__contenedor--buscador--btn'>
                <GoSearch/>
                </button>
            </form>
            <nav className='navbar__contenedor--links'>

            <label className='link__navbar' htmlFor={menuCheckboxId}>
                  <TfiMenu/>
                </label>
                    <input type='checkbox' id={menuCheckboxId} hidden />
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/tienda'>Tienda</Link></li>
                    <li><Link to='/about'>Nosotros</Link></li>
                    <li><Link to='/'>Contactos</Link></li>

                   <li className='navbar__contenedor--cart'>
                    <span className='cart__quantity'>{quantityProducts}</span>
                    <label className='link__icon' htmlFor={cartCheckboxId}>
                      <MdShoppingCartCheckout/>
                    </label>
                    <input type='checkbox' id={cartCheckboxId} hidden/>

                    <Cart/>

                   </li>

                    <li className='link__icon'>
                      <TbUserCircle/>
                    </li>

                </ul>

            </nav>

          </header>
  )
};
export default Navbar
