import { useForm } from 'react-hook-form'
import { useProducts } from '../hook/useProducts'
import { IoImagesOutline } from 'react-icons/io5'

function Create () {
  const { setError, setMessage } = useProducts()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }
  const createError = (message) => {
    setError(true)
    setMessage(message)
  }
  const handleChangeFiles = (event) => {
    console.log(event.target.files)
  }
  return (
        <div className='form__product__contenedor'>

            <form className='form__product__box' onSubmit={handleSubmit(onSubmit)}>
            <div className='form__product--logo'>
              <img src="/src/assets/img/Torres-Richard.svg" />
              <h2>Crear Producto</h2>
            </div>

             <section className='from__section'>
              <div className='from__input--control'>
                  <label htmlFor="title">Título</label>
                  <input type="text" id="title" autoFocus placeholder='AirForce ...' {...register('title', { required: true })}/>
                  {errors.title?.type === 'required' && createError('El título es requerido')}
                </div>

                <div className='from__input--control'>
                  <label htmlFor="brand">Marca</label>
                  <input type="text" id="brand" placeholder='Nike' {...register('brand', { required: true })}/>
                  {errors.brand?.type === 'required' && createError('La marca es requerida')}
                </div>
             </section>

             <section className='from__section'>
              <div className='from__input--control'>
                <label htmlFor="category">Categoría</label>
                <input type="text" id="category" placeholder='Zapatos' {...register('category', { required: true })}/>
                {errors.category?.type === 'required' && createError('La categoría es requerida')}
              </div>

              <div className='from__input--control'>
                <label htmlFor="type">Tipo</label>
                <input type="text" id="type" placeholder='Deportivo' {...register('type', { required: true })}/>
                {errors.type?.type === 'required' && createError('El tipo es requerido')}
              </div>

             </section>
              <div className='from__input--control'>
                <label htmlFor="genre">Género</label>
                <select id="genre" {...register('genre', { required: true })}>
                  {errors.genre?.type === 'required' && createError('Elige el género')}
                  <option value="">Select</option>
                  <option value="hombre">Hombre</option>
                  <option value="mujer">Mujer</option>
                  <option value="Unisex">Unisex</option>
                </select>
              </div>
             <section className='from__section'>
              <div className='from__input--control'>
                <label htmlFor="price">Precio</label>
                <input type="number" id="price" min={1} {...register('price', { required: true })}/>
                {errors.price?.type === 'required' && createError('El precio es requerido')}
              </div>

              <div className='from__input--control'>
                <label htmlFor="quantity">Cantidad</label>
                <input type="number" id="quantity" min={1} {...register('quantity', { required: true })}/>
                {errors.quantity?.type === 'required' && createError('Necesitamos la cantidad')}
              </div>
             </section>

              <section className='from__input--files'>
              <label htmlFor="images"> <IoImagesOutline /> Imágenes</label>
              <input type="file" id="images" onChange={handleChangeFiles} multiple />

              </section>

              <input type="submit" value="Enviar" />

</form>

        </div>
  )
}

export default Create
