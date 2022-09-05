import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';

import image from '../../../Assets/Images/img1.png'
import './HomeStore.css'

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
    <section className='container'>
    <div className='home_store'>
    <h2 className='store_title'>Buy From <span>Store</span> </h2>
        <div className='App overflow-hidden'>
        <Slider {...settings}>
            <div className='slider_wrapper'>
        <div className='image-area'>
        <img  className='slider_img' src={image}  alt='game'/>
            <div className='img-btn2'>
                <button className='text-white hover_btn1'>Buy</button>
                <button className='text-white hover_btn2'>Bid</button>
            </div>
        </div>
        <div className='d-flex justify-content-between price_wrapper'>
                <div className='text-white'>tz1d4...2ews</div>
                <div className='text-white'> 500 ꜩ</div>
        </div>
        </div>
            <div className='slider_wrapper'>
        <div className='image-area'>
        <img  className='slider_img' src={image}  alt='game'/>
            <div className='img-btn2'>
                <button className='text-white hover_btn1'>Buy</button>
                <button className='text-white hover_btn2'>Bid</button>
            </div>
        </div>
        <div className='d-flex justify-content-between price_wrapper'>
                <div className='text-white'>tz1d4...2ews</div>
                <div className='text-white'> 500 ꜩ</div>
        </div>
        </div>
            <div className='slider_wrapper'>
        <div className='image-area'>
        <img  className='slider_img' src={image}  alt='game'/>
            <div className='img-btn2'>
                <button className='text-white hover_btn1'>Buy</button>
                <button className='text-white hover_btn2'>Bid</button>
            </div>
        </div>
        <div className='d-flex justify-content-between price_wrapper'>
                <div className='text-white'>tz1d4...2ews</div>
                <div className='text-white'> 500 ꜩ</div>
        </div>
        </div>
            <div className='slider_wrapper'>
        <div className='image-area'>
        <img  className='slider_img' src={image}  alt='game'/>
            <div className='img-btn2'>
                <button className='text-white hover_btn1'>Buy</button>
                <button className='text-white hover_btn2'>Bid</button>
            </div>
        </div>
        <div className='d-flex justify-content-between price_wrapper'>
                <div className='text-white'>tz1d4...2ews</div>
                <div className='text-white'> 500 ꜩ</div>
        </div>
        </div>
            <div className='slider_wrapper'>
        <div className='image-area'>
        <img  className='slider_img' src={image}  alt='game'/>
            <div className='img-btn2'>
                <button className='text-white hover_btn1'>Buy</button>
                <button className='text-white hover_btn2'>Bid</button>
            </div>
        </div>
        <div className='d-flex justify-content-between price_wrapper'>
                <div className='text-white'>tz1d4...2ews</div>
                <div className='text-white'> 500 ꜩ</div>
        </div>
        </div>
            </Slider> 
    </div>
<div className='text-center mt-[54px]'>
<button className='view_btn'>View all</button>
</div>
    </div>
   </section>
  )
}

export default HomeStore