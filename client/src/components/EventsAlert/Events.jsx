/* eslint-disable react/prop-types */
import './style.css'
import { FiAlertTriangle } from 'react-icons/fi'
import { BsCheckCircle } from 'react-icons/bs'
import { useState, useEffect } from 'react'

export const EventsAlert = ({ message, error }) => {
  const [showAlert, setShowAlert] = useState(true)
  if (!message) return

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowAlert(false)
    }, 5000)

    return () => clearTimeout(timeoutId)
  }, [])
  return (

    error
      ? <div className={'alert__container red'}>
            <FiAlertTriangle/> <h1>{message}</h1>
         </div>
      : <div className='alert__container green'>
           <BsCheckCircle/> <h1>{message}</h1>
        </div>
  )
}
