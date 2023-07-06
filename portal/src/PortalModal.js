import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import Modal from './Modal'

const PortalModal = () => {
    const [show,setShow]=useState(false)
  return (
    <div>
      <button onClick={()=>setShow(true)}>Show modal using portal</button>
      {show && createPortal(<Modal onClose={()=>setShow(false)}/>,document.body)}
    </div>
  )
}

export default PortalModal
