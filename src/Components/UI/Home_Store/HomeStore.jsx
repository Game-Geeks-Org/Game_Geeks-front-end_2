import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';

import image from '../../../Assets/Images/img1.png'
import '../../../Styles/HomeStore.css'

function HomeStore() {
 // AUTOPLAY SLIDER
 const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 7000,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        }
      }
    ]
  };

  return (
    <section className='container home_store'>
    <div className='pb-[150px] '>
    <h2 className=' store_title heading'>Buy From <span>Store</span> </h2>
    </div>
    <div className='grid grid-cols-1 gap-9 md:grid-cols-2 lg:flex mx-9'>
        <div className='App overflow-hidden'>
        <Slider {...settings}>
            <div className='w-full'>
        <div className='image-area'>
        <img  className='bg-transparent rounded-md border-BtnColor border-[6px] slider_img' src={image}  alt='game'/>
            <div className='img-btn flex gap-10 items-center justify-center'>
                <button className='text-white bg-[#C0013A9E] text-center ml-5 w-20 h-[50px] px-4 lg:w-[100px] lg:h-[61px] border-none'>Buy</button>
                <button className='text-white bg-[#C0013A9E]  text-center mr-5 w-20 h-[50px] px-4 lg:w-[100px] lg:h-[61px] border-none'>Bid</button>
            </div>
        </div>
        <div className='d-flex justify-content-between'>
                <div className='tex-[23px] text-white'>tz1d4...2ews</div>
                <div className='tex-[23px] text-white'> 500 ꜩ</div>
        </div>
        </div>
        <div className='w-full'>
        <div className='image-area'>
        <img  className='bg-transparent rounded-md border-BtnColor border-[6px] slider_img' src={image}  alt='game'/>
            <div className='img-btn flex gap-10 items-center justify-center'>
            <button className='text-white bg-[#C0013A9E] text-center ml-5 w-20 h-[50px] px-4 lg:w-[100px] lg:h-[61px] border-none'>Buy</button>
            <button className='text-white bg-[#C0013A9E]  text-center mr-5 w-20 h-[50px] px-4 lg:w-[100px] lg:h-[61px] border-none'>Bid</button>
            </div>
        </div>
        <div className='d-flex justify-content-between'>
                <div className='tex-[23px] text-white'>tz1d4...2ews</div>
                <div className='tex-[23px] text-white'> 500 ꜩ</div>
        </div>
        </div>
        <div className='w-full'>
        <div className='image-area'>
        <img  className='bg-transparent rounded-md border-BtnColor border-[6px] slider_img' src={image}  alt='game'/>
            <div className='img-btn flex gap-10 items-center justify-center'>
            <button className='text-white bg-[#C0013A9E] text-center ml-5 w-20 h-[50px] px-4 lg:w-[100px] lg:h-[61px] border-none'>Buy</button>
            <button className='text-white bg-[#C0013A9E]  text-center mr-5 w-20 h-[50px] px-4 lg:w-[100px] lg:h-[61px] border-none'>Bid</button>
            </div>
        </div>
        <div className='d-flex justify-content-between'>
                <div className='tex-[23px] text-white'>tz1d4...2ews</div>
                <div className='tex-[23px] text-white'> 500 ꜩ</div>
        </div>
        </div>
        <div className='w-full'>
        <div className='image-area'>
        <img  className='bg-transparent rounded-md border-BtnColor border-[6px] slider_img' src={image}  alt='game'/>
            <div className='img-btn flex gap-10 items-center justify-center'>
            <button className='text-center ml-5  border-none'>Buy</button>
            <button className='text-white text-center'>Bid</button>
            </div>
        </div>
        <div className='d-flex justify-content-between'>
                <div className='tex-[23px] text-white'>tz1d4...2ews</div>
                <div className='tex-[23px] text-white'> 500 ꜩ</div>
        </div>
        </div>
       

            </Slider>

        </div>
        
    </div>
<div className='text-center mt-[54px]'>
<button className='view_btn'>View all</button>
</div>
   </section>
  )
}

export default HomeStore