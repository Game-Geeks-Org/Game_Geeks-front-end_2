import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import './team.css'

import TEAM_DATA from '../../../Assets/Data/data'

function Team() {
  return (
  <section className='live__team'>
    <Container>
       
      <Row>
        <Col lg='12' className='mb-4'>
          <h3 className='Team__title'>Our  <span>Team</span></h3>

          </Col>

          {
            TEAM_DATA.map((item, index) =>{
              const {firstName,  SecondName,  title, img} = item
              return(
                <Col lg='4' md='4' sm='6' key={index}>
                  <div className='team_wrapper' >
                    <div className='single__img'>
                    <span><img src={img} width='250px'  alt=''/></span>
                    </div>
                    <div className='team_content'>
                      <h3 className='team_name'>{firstName} <span>{SecondName}</span></h3>
                      <p className='text-light'>{title}</p>

                    </div>

                  </div>
                
                </Col>
              )

            })
          }
       
      </Row>
    </Container>
  </section>
  )
}

export default Team




        // <div className='pb-[100px] '
//     <h2 className='text-white text-7xl text-center heading'>
//         OUR <span className='text-BtnColor text-7xl'>TEAM</span> </h2>
//     </div>

//     <div className='sm:grid grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 xl:grid-cols-3 justify-between items-center mt-32 gap-12'>


//   return(
//     <div key={id}>
//         <img className='bg-transparent rounded-md border-BtnColor border-[6px]' src={img}  alt=''/>
//         <p className='text-white text-[30px] lg:text-[51px] text-center tracking-[2px] pt-5'>{firstName} <span className='text-BtnColor'>{SecondName}</span></p>
//         <p className='text-white text-center text-[20px] lg:text-[32px] tracking-[2px] pt-[5px]'>{title}</p>
//     </div>
//   )
// })}
// </div>