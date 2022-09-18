import React,{useState} from 'react'
import '../../Styles/Game.css'

function Button({filtered,button }) {
  return (
    <div className='filter_wrapper text-white'>
      {
        button.map((cat, index) =>{
            return(

                <button className='filter_btn' key={index} type='button' onClick={() => filtered(cat)}>{cat}</button>
                
            )
        })
      }
    </div>
  )
}

export default Button