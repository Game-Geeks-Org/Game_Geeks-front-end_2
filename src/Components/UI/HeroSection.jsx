import React from 'react'
import img1 from '../../Assets/Images/img1.png'

function HeroSection() {
  return (
  <section className='container mt-[100px]'>
    <div className='sm:grid pt-20 grid-cols-1 md:grid-cols-1 grid lg:flex container justify-between items-center md:pt-40'>
      <div>
        <span className=' text-5xl md:text-7xl font-extrabold text-white'>PLAY TO </span><span className='text-BtnColor text-5xl md:text-7xl'>WIN</span>
        <p className=' text-[17px] md:text-[29px] mt-[23px] text-white tracking-[2px] my-7'>A Decentralized Gaming Hub built over Tezos <br/> Blockchain.</p>
      </div>
      <div className='my-10'>
        <img  src={img1} alt='hero'/>
      </div>
    </div>
    <div className='container text-left md:my-5 flex lg:mt-[60px] pb-6 gap-8'>
        <button className='py-2 text-[7px] md:text-[20px] md:py-4 text-white bg-BtnColor rounded-[4px] px-[45px] hover:bg-transparent border-BtnColor border-2 hover:text-white'>Enter App</button>
         <button className='py-2  text-[7px] md:text-[20px] md:py-4 px-[45px] tracking-[2px] bg-transparent border-BtnColor border-2 text-white rounded-[4px]  hover:bg-BtnColor hover:text-white'>Open Store</button>
         </div>
  </section>
  )
}

export default HeroSection