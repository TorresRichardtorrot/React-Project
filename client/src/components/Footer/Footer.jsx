import { Link } from 'react-router-dom'
import './style.css'
import { FaInstagram, FaFacebookSquare, FaTiktok } from 'react-icons/fa'
function Footer () {
  return (
       <footer>
        <div className='contact__container'>
        <Link className='contact__logo' to='/'>
                <img className='logo_footer_image-1' src='https://i.imgur.com/AZXdIP8.png' alt="logo" />
                <img className='logo_footer_image-2' src='https://i.imgur.com/eIVB5AQ.png' alt="logo" />
            </Link>
            <h4>Contactos</h4>
            <ul className='contact__box'>
                <li><strong>Direccion: </strong>Caracas</li>
                <li><strong>Telefono: </strong>04125899106</li>
                <li><strong>Horario: </strong>De lunes a viernes</li>
            </ul>
            <h4>Siguenos</h4>
            <ul className='contact__social'>
                <li><Link><FaInstagram /></Link></li>
                <li><Link><FaFacebookSquare /></Link></li>
                <li><Link><FaTiktok /></Link></li>
            </ul>
        </div>
        <div className='footer__more_link'>
        <div>
            <h4>About</h4>
            <ul>
                <li><Link>Sobre Nosotros</Link></li>
                <li><Link>Contactanos</Link></li>
                <li><Link></Link></li>
            </ul>
        </div>
        <div>
            <h4>About</h4>
            <ul>
                <li><Link>Sobre Nosotros</Link></li>
                <li><Link>Contactanos</Link></li>
                <li><Link></Link></li>
            </ul>
        </div>
        <div>
            <h4>About</h4>
            <ul>
                <li><Link>Sobre Nosotros</Link></li>
                <li><Link>Contactanos</Link></li>
                <li><Link></Link></li>
            </ul>
        </div>
        </div>

       </footer>
  )
}

export default Footer
