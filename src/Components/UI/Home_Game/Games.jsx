import React, { useEffect, useState } from 'react'
import image from '../../../Assets/Images/LORD OF SPACE 01.png'
import image2 from '../../../Assets/Images/FOREST COMING SOON.png'
import image3 from '../../../Assets/Images/orbs collector coming soon.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import { connectWallet, getActiveAccount } from '../../../Utils/wallet';






import './Homegame.css'


function Games() {
  const [game, setGame] = useState(false)
  useEffect(() => {
    const interval = setInterval(async () => {
      const account = await getActiveAccount()

      if (account) {
        setGame(true)
      } else {
        setGame(false)
      }
    }, [])
    return () => clearInterval(interval)
  })





  // AUTOPLAY SLIDER
  const settings = {
    dots: true,
    // autoplay: true,
    // autoplaySpeed: 7000,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
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
    <section className='container'>
      <div className='game_section'>
        <h2 className='game_title'>Play <span>Games</span> </h2>
        <div className=''>
          <div className='App '>
            <Slider {...settings}>
              <div className='w-full'>
                <div className='image-area'>
                  <img className='slider_img' src={image} alt='game' />
                  <div className='img-btn'>
                    {(game) ? (
                      <div className='text-white'>
                        <Link to='/spaceshooter'>  <button className=''>Play</button></Link>
                      </div>
                    ) : (
                      <div className=''> connect wallet to play game</div>
                    )}
                  </div>
                </div>

              </div>
              <div className=''>
                <div className='image-area'>
                  <img className='slider_img' src={image3} alt='game' />
                  <div className='img-btn'>
                    <button className=''>Coming Soon</button>
                  </div>
                </div>

              </div>
              <div className=''>
                <div className='image-area'>
                  <img className='slider_img' src={image2} alt='game' />
                  <div className='img-btn'>
                    <button className=''>Coming Soon</button>
                  </div>
                </div>

              </div>
            </Slider>

          </div>

        </div>
        {/* <div className='text-center'>
<button className='view_btn'>View all</button>
</div>  */}

      </div>

    </section>
  )
}

export default Games