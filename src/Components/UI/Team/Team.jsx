import React from 'react'

import TEAM_DATA from '../../../Assets/Data/data'

function Team() {
  return (
  <section className='container mt-52'>
        <div className='pb-[100px] '>
    <h2 className='text-white text-7xl text-center heading'>
        OUR <span className='text-BtnColor text-7xl'>TEAM</span> </h2>
    </div>

    <div className='sm:grid grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3 xl:grid-cols-3 justify-between items-center mt-32 gap-12'>

{TEAM_DATA.map((item) =>{
    const {id, title, name1, name2, img} = item
  return(
    <div key={id}>
        <img className='bg-transparent rounded-md border-BtnColor border-[6px]' src={img}  alt=''/>
        <p className='text-white text-[30px] lg:text-[51px] text-center tracking-[2px] pt-5'>{name1} <span className='text-BtnColor'>{name2}</span></p>
        <p className='text-white text-center text-[20px] lg:text-[32px] tracking-[2px] pt-[5px]'>{title}</p>
    </div>
  )
})}
</div>

  </section>
  )
}

export default Team