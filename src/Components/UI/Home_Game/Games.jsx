import React from 'react'
import image from '../../../Assets/Images/img1.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
import { Link } from "react-router-dom";





import './Homegame.css'


function Games() {

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
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
   <section className='container mt-52'>
    <div className='pb-[150px] overflow-hidden'>
    <h2 className='game_title heading'>Play <span>Games</span> </h2>
    </div>
    <div className=''>
        <div className='App '>
        <Slider {...settings}>
    <div className='w-full'>
        <div className='image-area'>
        <img  className='slider_img' src={image}  alt='game'/>
            <div className='img-btn'>
            <Link to="/spaceshooter"><button className=''>Play</button></Link>
            </div>
        </div>
          
    </div>
    <div className='w-full'>
        <div className='image-area'>
        <img  className='slider_img' src={image}  alt='game'/>
            <div className='img-btn'>
            <Link to="/spaceshooter"><button className=''>Play</button></Link>
            </div>
        </div>
          
    </div>
    <div className='w-full'>
        <div className='image-area'>
        <img  className='slider_img' src={image}  alt='game'/>
            <div className='img-btn'>
              <Link to="/spaceshooter"><button className=''>Play</button></Link>
            </div>
        </div>
          
    </div>
    <div className='w-full'>
        <div className='image-area'>
        <img  className='slider_img' src={image}  alt='game'/>
            <div className='img-btn'>
            <Link to="/spaceshooter"><button className=''>Play</button></Link>
            </div>
        </div>
          
    </div>
    </Slider>

        </div>
 
    </div>
<div className='text-center'>
<button className='view_btn'>View all</button>
</div>
   </section>
  )
}

export default Games