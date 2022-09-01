import React from 'react'
import { GAME__DATA } from '../Assets/Data/data'
import GameCards from '../Components/UI/GameCards/GameCards'


function NftStore() {
  return (
    <section className='container mt-[300px] pb-10'>
        <h2 className='text-[45px] text-white pb-[46px]'>Explore collections</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between items-center mt-32 gap-12'>
          {
            GAME__DATA.slice(0,8).map((item) =>{
              return(
                <GameCards  item={item}/>
              )

            })
          }
        </div>
     

    </section>
  )
}

export default NftStore