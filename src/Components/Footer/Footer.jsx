import React from 'react'

import discord from '../../Assets/Images/discord 1.png'
import twitter from '../../Assets/Images/twitter-line (1).png'
import medium from '../../Assets/Images/medium-fill.png'
import linkedIn from '../../Assets/Images/linkedin-box-line.png'
import telegram from '../../Assets/Images/telegram-line.png'

function Footer() {
  return (
    <section className='container'>
      <div className='d-flex align-items-center justify-content-center gap-20'>
        <div className='d-flex  lg:w-[963px] h-[150px] lg:h-[210px] items-center bg-transparent rounded-md border-BtnColor border-[1px]'>
            <img src={discord}  className='ml-10 w-[100px] md:w-auto'  alt='discord'/>
            <p className='text-center'>Join Our  <span className='text-BtnColor'>Discord</span></p>
        </div>
        </div>
        <div className='flex items-center justify-center mx-auto  mt-12'>
        <div className='flex justify-center w-full lg:w-[811px] h-[108px] items-center bg-transparent border-white border-[1px] gap-6'>
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