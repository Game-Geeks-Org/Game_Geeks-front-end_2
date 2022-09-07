import React from 'react'
import img1 from '../../Assets/Images/LORD OF SPACE 01.png'
import { Link } from "react-router-dom";
import './HeroSection.css'
import { Container, Row, Col } from 'reactstrap'

function HeroSection() {
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
            <div className="hero-img">
              <Link to="/spaceshooter"> <img src={img1} alt='hero' className='w-100' /> </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection