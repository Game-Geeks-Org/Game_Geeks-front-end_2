import React from 'react'
import './modal.css'
import close from '../../../Assets/Images/close-line (1).png'
function Modal({setShowModal}) {
  return (
   <>
   <div className='modal_wrapper'>
        <div>
        <span className='closeModal' onClick={()=>setShowModal(false)}><img src={close}  alt=''/></span>
            <p>Game Over! You've scored 20 points.</p>
        </div>
   </div>
   </>
  )
}

export default Modal