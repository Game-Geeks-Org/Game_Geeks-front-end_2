import React, {useState} from 'react'
import Header from '../Components/Header/Header'
import '../Styles/Game.css'
import pic from '../Assets/Images/pic_1.png'
import menu from '../Assets/Images/filter-3-fill.png'
import GameCards from '../Components/UI/GameCards/GameCards'
import { GAME__DATA } from '../Assets/Data/data'
import { Container, Row, Col } from 'reactstrap'
import Button from '../Components/Filter/Button'
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion"





const  allCategories = ['More', ...new Set(GAME__DATA.map(item =>  item.category))]
console.log(allCategories)











function Games() {
  const [data, setData] = useState(GAME__DATA)
  const [buttons, setButtons] = useState(allCategories)

  
  const filtered = (button) =>{
    if(button === 'More'){
      setData(GAME__DATA)
      return;
    }

  const filteredData = GAME__DATA.filter(item => item.category === button)
  setData(filteredData)
}


  return (
    <section className='pb-52'>
      <Header />
      <div className='Game_banner mt-[100px]'></div>
      <div className='container'>
        <div>
        <img src={pic}  className='banner_pic'  alt='pic'/>
        </div>
        <p className='text-white space_header'>The Lord of the <span className='space_'>Space</span></p>
        <p className='text-white opacity-75'>Description</p>
       <div className='d-flex shooter_desc text-white gap-5'>
        <div>
        10.0K <br />       
        items
        </div>
        <div>
        3.3K <br />
        owners
        </div>
        <div>
        34.0K ꜩ <br />
        total volume
        </div>
        <div>
        1.95 ꜩ <br />
        floor price
        </div>
       </div>

       <div className=' text-white'>
        <p className='space_header'>Items <span className='space_'>Activity</span></p>
        <div style={{ borderTop: "2px solid #494949", marginLeft: 3, marginRight: 3 }}></div>
       </div>

       <div className='_wrapper d-flex justify-content-between'>
        <div className='d-flex select_wrapper mt-4 gap-5'>
          <div><img src={menu} alt="" /></div>
          <div className='filter__right'>
          <select>
                    <option className='text-center'> Sort By</option>
                    <option value='high'>High Rate</option>
                    <option value='mid'>Mid Rate</option>
                    <option value='low'>Low Rate</option>
                  </select>
          </div>
        </div> 
          <Button  filtered={filtered} button={buttons}/>
       </div>
       <Container>
        <Row>
          
          {
          data.map((item) =>{
            return(
              <Col lg='4' md='4' sm='6' className='mt-5'>
                 <motion.div
            layout >
            <AnimatePresence>

                <GameCards item={item} key={item.id} />
                </AnimatePresence>
                    </motion.div>
     
              </Col>

            )
             
          })
        }
          
          
        </Row>
       </Container>
       
       </div>
    </section>
  )
}

export default Games


