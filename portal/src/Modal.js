import React from 'react'
import './App.css'

const Modal = ({onClose}) => {
  return (
    <div className='modal'>
      I m a modal dialog
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default Modal
