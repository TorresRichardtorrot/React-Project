import Navbar from '../components/Navbar/Navbar'
import Slider from '../components/Slider/slider'
import Footer from '../components/Footer/Footer'
import './HomeStyle.css'
import { Link } from 'react-router-dom'
import CardProduct from '../components/CardProdut/CardProduct'
import { useProducts } from '../context/ProductsContext'

import { useEffect, useState } from 'react'

function HomePage () {
  const { getNewProduct } = useProducts()
  const [newProduct, setNewProduct] = useState([])

  useEffect(() => {
    async function loadingProduct () {
      const res = await getNewProduct()
      setNewProduct(res)
    }
    loadingProduct()
  }, [])

  return (
    <>
        <Navbar/>
        <Slider />
          <main>
            {/* ==================================! Seccion 1 !=========================== */}
          <section className='info__container'>
                  <h2>Descubre los accesorios perfectos para ti</h2>
              <div className="info__container__text">
                  <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem necessitatibus nulla ipsum eos nihil aliquid, quis dolores. Inventore rem quisquam alias repellat enim iusto necessitatibus corporis? Aliquam dolor dolorem quos.
                  </p>
                <div className='link__box'>
                  <Link to="/tienda" className="link">Tienda</Link>
                  <Link className="link">Leer más</Link>
                </div>
              </div>
            </section>
            <hr />
            {/* ==================================! Seccion 2 !=========================== */}
             <section className='quality__container'>
                  <article className='quality__info'>
                      <h2>Calidad, comodidad y estilo</h2>
                      <p>En nuestra tienda en línea de calzado ofrecemos una amplia gama de calzado que combina una calidad excepcional.</p>
                          <ul className='quality__info__text'>
                              <li>
                                  <h4>Calidad inigualable</h4>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, recusandae?</p>
                              </li>
                              <li>
                                  <h4>Máximo confort</h4>
                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, recusandae.</p>
                              </li>
                          </ul>
                      <nav className='link__box'>
                          <Link to="/tienda" className="link">Visitar la tienda</Link>
                          <Link className="link">Leer más</Link>
                      </nav>
                  </article>

                  <aside className='quality__video'>
                      <video src="/src/assets/img/video.mp4" autoPlay muted loop></video>
                  </aside>
              </section>
            {/* ==================================! Seccion 3 !=========================== */}
              <section className='new__Product__container'>
                <header className='new__product_title'>
                  <h2>Nuesvos Productos</h2>
                  <p>Mejores marcas del mercado</p>
                </header>

                <div className='new__product_box'>
                  {
                    newProduct.length !== 0
                      ? (
                          newProduct.map(product => (
                        <CardProduct

                        brand={product.brand}
                        title={product.title}
                        price={product.price}
                        images={product.images}
                        id={product._id}
                        key={product._id}
                        />
                          ))
                        )
                      : (
                      <h2>No hay productos nuevos</h2>
                        )
                  }
                </div>

              </section>
              {/* ==================================! Seccion 4 !=========================== */}
              <section className='customers__container'>
                  <div>
                    <h2>Clientes felices</h2>
                    <p>Escuche lo que nuestros clientes tienen que decir sobre nosotros</p>
                  </div>
                  <div className='customers__box'>

                  <article className='customers__opinion'>
                        <div className="rating"><img src="/src/assets/icons/star.png" alt="puntacion del cliente" /></div>
                        <h5>Nuestra experiencia con esta empresa ha sido increíble. Sus productos son de primera categoría.</h5>
                        <div className="author-info">
                            <img src="/src/assets/img/perfil.jpg" alt="Foto de perfil de Juan Perez" />
                            <div>
                                <strong>Juan Perez</strong>
                                <p>Director ejecutivo de la empresa ABC</p>
                            </div>
                        </div>
                    </article>

                    <article className='customers__opinion'>
                        <div className="rating"><img src="/src/assets/icons/star.png" alt="puntacion del cliente" /></div>
                        <h5>Nuestra experiencia con esta empresa ha sido increíble. Sus productos son de primera categoría.</h5>

                        <div className="author-info">
                            <img src="/src/assets/img/perfil.jpg" alt="Foto de perfil de Juan Perez" />
                            <div>
                                <strong>Juan Perez</strong>
                                <p>Director ejecutivo de la empresa ABC</p>
                            </div>
                        </div>
                    </article>

                  </div>
              </section>
                {/* ==================================! Seccion 5 !=========================== */}
              <section className='subscription__container'>
                <h2>Obtenga las últimas noticias sobre calzado</h2>
                  <p>Suscríbase a nuestro boletín para recibir las últimas actualizaciones, promociones y tendencias de calzado</p>
                  <form className='subcription__form'>
                    <input type="text" />
                    <button>Inscribirse</button>
                  </form>
                  <p className='conditions'>al hacer click, acepta nuestros <Link>Terminos y condiciones.</Link></p>
              </section>

          </main>
          <Footer/>
    </>
  )
};
export default HomePage
