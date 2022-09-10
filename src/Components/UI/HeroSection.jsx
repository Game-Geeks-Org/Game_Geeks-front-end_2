import React from 'react'
import img1 from '../../Assets/Images/LORD OF SPACE 01.png'
import { Link } from "react-router-dom";
import './HeroSection.css'
import { Container, Row, Col } from 'reactstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';

// CAROUSEL IMAGES
import  img2 from '../../Assets/Images/first NFT asset collection.png'
import img3 from '../../Assets/Images/gaming asset marketplace.png'
import img4 from '../../Assets/Images/gaming dashboard.png'
import img5 from '../../Assets/Images/geekyhead NFT sale.png'
import img6 from '../../Assets/Images/gaming dashboard.png'
import img7 from '../../Assets/Images/more games.png'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#C0013AE8", marginTop: "50px", padding:"0", borderRadius: "60px", position:"absolute", left:"300px", top:"380px", right:"0" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#C0013AE8", marginTop: "50px", borderRadius: "60px",  position:"absolute", left:"170px", top:"380px", right:"300px"}}
      onClick={onClick}
    />
  );
}




function HeroSection() {
    // AUTOPLAY SLIDER
    const settings = {
      dots: false,
      autoplay: true,
      autoplaySpeed: 7000,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
  
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
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
    <section className='hero__section'>
      <Container>
        <Row>
          <Col lg='6' md='6'>
            <div className='hero__content'>
              <h4 className='hero__title'>PLAY TO <span className='win'>WIN</span></h4>
              <p className='desc'>A Decentralized Gaming Hub built over Tezos <br /> Blockchain. </p>

              <div className="hero__btn d-flex align-items-center gap-4">
                <Link to="/spaceshooter"><button className='hero-btn1 d-flex align-items-center gap-2'>Play Game</button></Link>
                <Link to="/dashboard"><button className='hero-btn2 d-flex align-items-center gap-2'>View Dashboard</button></Link>
              </div>
            </div>
          </Col>
          <Col lg='6' md='6'>
              <div className='App'>
              <Slider {...settings}>
                    <div className='hero-img'> <img src={img2} width='500px'  alt=''/> </div>
                    <div className='hero-img'> <img src={img3} width='500px'  alt=''/> </div>
                    <div className='hero-img'> <img src={img4} width='500px'  alt=''/> </div>
                    <div className='hero-img'> <img src={img5} width='500px'   alt=''/> </div>
                    <div className='hero-img'> <img src={img6} width='500px'   alt=''/> </div>
                    <div className='hero-img'> <img src={img7} width='500px'   alt=''/> </div>
              </Slider>

              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection

{/* <div className="hero-img">

              
<Link to="/spaceshooter"> <img src={img1} alt='hero' /> </Link>
</div> */}