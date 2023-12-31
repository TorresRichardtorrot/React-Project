/* eslint-disable react/prop-types */
import './style.css'
import { FiAlertTriangle } from 'react-icons/fi'
import { BsCheckCircle } from 'react-icons/bs'
import { useState, useEffect } from 'react'
import { useAuth } from '../../hook/auth'
import { useProducts } from '../../hook/useProducts'

export const EventsAlert = ({ message, error }) => {
  const { setMessage } = useProducts()
  const [showAlert, setShowAlert] = useState(true)

  const { setError } = useAuth()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowAlert(false)
      setMessage(null)
      setError([])
    }, 5000)

    return () => {
      setShowAlert(true)
      clearTimeout(timeoutId)
    }
  }, [])

  if (!showAlert) {
    return null
  }

  const IconComponent = error ? FiAlertTriangle : BsCheckCircle
  const containerClass = error ? 'red' : 'green'

  return (
    <div className={`alert__container ${containerClass}`}>
      <IconComponent /> <h1>{message}</h1>
    </div>
  )
}
