import React from 'react'
import './footer.css'

import discord from '../../Assets/Images/discord 1.png'
import twitter from '../../Assets/Images/twitter-line (1).png'
import linkedIn from '../../Assets/Images/linkedin-box-line.png'
import instagram from '../../Assets/Images/instagram-line.png'
import telegram from '../../Assets/Images/telegram-line.png'

function Footer() {
  return (
    <section className='container'>
      <div className='d-flex align-items-center justify-content-center footer'>
        <a target='_blank' rel="noreferrer" href='https://discord.gg/ZAy5FnDdVg'>
          <div className='d-flex footer_wrapper align-items-center'>
            <img src={discord} width='100px' alt='discord' />
            <p className='text-center'>Join Our  <span>Discord</span></p>

          </div>
        </a>
      </div>
      <div className='d-flex justify-content-center mx-auto mt-5 socials'>
        <div className='socials_wrapper'>
          <a target='_blank' rel="noreferrer" href='https://twitter.com/GameGeeksOnline'>
            <span className='mx-2'><img src={twitter} alt='twitter' /></span>
          </a>
          <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/company/gamegeeksonline/'>
            <span className='mx-2'><img src={linkedIn} alt='linkedIn' /></span>
          </a>
          <a target='_blank' rel="noreferrer" href='https://t.me/GameGeeksOnline'>
            <span className='mx-2'><img src={telegram} alt='telegram' /></span>
          </a>
          <a target='_blank' rel="noreferrer" href='https://www.instagram.com/gamegeeksonline/'>
            <span className='mx-2'><img src={instagram} alt='telegram' /></span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Footer