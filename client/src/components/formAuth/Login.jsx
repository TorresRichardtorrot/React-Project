import { useForm } from 'react-hook-form'
import { useAuth } from '../../hook/auth'
import { MdOutlineEmail } from 'react-icons/md'
import { BiLockAlt, BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useId, useState } from 'react'
import './style.css'

export const Login = () => {
  const [isLogin, setIsLogin] = useState(true)
  const emailID = useId()
  const passwordID = useId()
  const userNameID = useId()
  const { signin, signup } = useAuth()
  const {
    register,
    handleSubmit,
    reset
  } = useForm()
  const onSubmit = handleSubmit(data => {
    if (isLogin) {
      signin(data)
      reset()
    } else {
      signup(data)
      reset()
    }
  })
  return (
        <>
          <div className='form__box '>
          <h1>{isLogin ? 'Iniciar Sesión' : 'Registro'}</h1>
            <div className='form__logo'>
              <Link to={'/'}>
              <img src="https://i.imgur.com/BpTXwME.png" alt="logo" />
              </Link>
            </div>

          <form className='form' onSubmit={onSubmit}>

            {
              !isLogin
                ? <div className='input__box'>
                    <input id={userNameID} className='input__control' type='text' required {...register('username')} />
                    <BiUser/>
                    <label htmlFor={userNameID}>Nombre de usuario</label>
                  </div>
                : null
            }

           <div className='input__box'>
              <input id={emailID} className='input__control' type='text' required {...register('email')} />
              <MdOutlineEmail/>
              <label htmlFor={emailID}>Email</label>
           </div>

            <div className='input__box'>
              <input id={passwordID} className='input__control' type='password' required {...register('password')} />
              <BiLockAlt/>
              <label htmlFor={passwordID}>Contraseña</label>
            </div>

            <input className='input__submit' type="submit" />
          </form>
          <div className='paragran__input'>
          <p>{isLogin ? 'No' : ''} tienes cuenta?</p>
          <input type="button"
          onClick={() => {
            setIsLogin(!isLogin)
            reset()
          }}
           value={isLogin ? 'Registrarse' : 'Iniciar Sesión'} />
          </div>

        </div>
        </>
  )
}
