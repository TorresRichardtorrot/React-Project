import { Link } from 'react-router-dom'
import { GoSearch } from 'react-icons/go'
import './style.css'
const rutaIcons = '/src/assets/icons/'

function Navbar () {
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
                <ul>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/tienda'>Tienda</Link></li>
                    <li><Link to='/about'>Nosotros</Link></li>
                    <li><Link to='/'>Contactos</Link></li>
                    <li className='link__icon'>
                      <img src={`${rutaIcons}cart.svg`} />
                    </li>
                    <li className='link__icon'>
                    <img src={`${rutaIcons}user.svg`} />
                    </li>

                </ul>
            </nav>
          </header>
  )
};
export default Navbar
