import React from 'react'
import './footer.css'

import discord from '../../Assets/Images/discord 1.png'
import twitter from '../../Assets/Images/twitter-line (1).png'
import medium from '../../Assets/Images/medium-fill.png'
import linkedIn from '../../Assets/Images/linkedin-box-line.png'
import telegram from '../../Assets/Images/telegram-line.png'

function Footer() {
  return (
    <section className='container'>
      <div className='d-flex align-items-center justify-content-center footer'>
        <div className='d-flex footer_wrapper align-items-center'>
            <img src={discord} width='100px'  alt='discord'/>
            <p className='text-center'>Join Our  <span>Discord</span></p>
        </div>
        </div>
        <div className='d-flex justify-content-center mx-auto mt-5 socials'>
        <div className='socials_wrapper'>
          <span className='mx-2'><img src={twitter} alt='twitter' /></span>
          <span className='mx-2'><img src={linkedIn} alt='linkedIn' /></span>
          <span className='mx-2'><img src={telegram} alt='telegram' /></span>
          <span className='mx-2'><img src={medium} alt='medium' /></span>
        </div>
        </div>
    </section>
  )
}

export default Footer