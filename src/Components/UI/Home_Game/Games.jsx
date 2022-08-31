import React from 'react'
import image from '../../../Assets/Images/img1.png'



import './Homegame.css'


function Games() {
  return (
   <section className='container mt-52'>
    <div className='pb-[150px] '>
    <h2 className='text-white text-5xl md:text-7xl text-center uppercase heading'>Play <span className='text-BtnColor text-5xl md:text-7xl'>Games</span> </h2>
    </div>
    <div className='grid grid-cols-1 gap-9 md:grid-cols-2 lg:flex mx-9'>
    <div className='w-full'>
        <div className='image-area'>
        <img  className='bg-transparent rounded-md border-BtnColor border-[6px]' src={image}  alt='game'/>
            <div className='img-btn'>
                <button className='text-white text-[20px] bg-[#C0013A9E] py-1 w-[202px] h-[61px] border-none'>Play</button>
            </div>
        </div>
          
    </div>
    <div className='w-full'>
        <div className='image-area'>
        <img  className='bg-transparent rounded-md border-BtnColor border-[6px]' src={image}  alt='game'/>
            <div className='img-btn'>
                <button className='text-white text-[20px] bg-[#C0013A9E] py-1 w-[202px] h-[61px] border-none'>Play</button>
            </div>
        </div>
          
    </div>
    <div className='w-full'>
        <div className='image-area'>
        <img  className='bg-transparent rounded-md border-BtnColor border-[6px]' src={image}  alt='game'/>
            <div className='img-btn'>
                <button className='text-white text-[20px] bg-[#C0013A9E] py-1 w-[202px] h-[61px] border-none'>Play</button>
            </div>
        </div>
          
    </div>
    <div className='w-full'>
        <div className='image-area'>
        <img  className='bg-transparent rounded-md border-BtnColor border-[6px]' src={image}  alt='game'/>
            <div className='img-btn'>
                <button className='text-white bg-[#C0013A9E] py-1 w-[202px] h-[61px] border-none'>Play</button>
            </div>
        </div>
          
    </div>
    </div>
<div className='text-center mt-[54px]'>
<button className='py-3 md:py-1 px-[55px] text-[23px] tracking-[2px] bg-transparent border-BtnColor border-2 text-white rounded-[4px]  hover:bg-BtnColor hover:text-white'>View all</button>
</div>
   </section>
  )
}

export default Games