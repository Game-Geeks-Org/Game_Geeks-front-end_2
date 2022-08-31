import React from 'react'
import gold from '../Assets/Images/geekyhead_gold 1.png'
import cod from '../Assets/Images/COD.png'
import image2 from '../Assets/Images/image2.png'
import image3 from '../Assets/Images/Image3.png'

import '../Styles/Dashboard.css'



function DashBoard() {
  return (
   <section className='container mt-52 pb-20'>
      <div className='grid pt-20 grid-cols-1 md:grid-cols-2 lg:flex container justify-around items-center md:pt-40'>
        <div className=' text-white text-[25px] md:text-[30px] my-7 lg:text-[41px]'> <span className='text-BtnColor'>@</span>sanketnighot <br /> <span className='text-BtnColor'>tz1</span>LXRS2........dpPW <br /><span className='text-[#FCF4A5]'>Golden Clan</span></div>
        <div className='text-center'><img className=' w-full md:w-auto' src={gold}  alt='gold'/></div>
      </div>
      <div className='text-center mt-[50px] md:mt-auto md:text-left lg:ml-[250px]'>
      <button className='py-2 md:py-4 px-[45px] tracking-[2px] bg-transparent border-BtnColor border-2 text-white rounded-[4px]  hover:bg-BtnColor hover:text-white'>Edit Profile</button>
      </div>
     <aside className='mt-[74px]'>
      <div className='grid pt-20 grid-cols-1 md:grid-cols-1 lg:flex container justify-around items-center'>
      <div className='grid grid-flow-row pb-10'>
        <div className='game-background'>
        <p className='text-white text-[40px] text-left'>Games</p>
        </div>
        <div className='flex mt-[49px] gap-[18px]'>
        <div className=' assets pb-20 pt-[28px] px-[32px]
         w-[197px] h-[243px] rounded-[40px]'>
        <p className='text-white text-[20px] text-left'>Gaming <br />Asset</p>
        </div>
        <div>
        <p className='assets text-white text-[20px] text-left pb-20 pt-[28px] px-[32px] 
        w-[197px] h-[243px] rounded-[40px]'>Gaming <br />Asset</p>
        </div>
       
        </div>
     
      </div>
      <div className='grid grid-flow-row gap-[18px]'>
        <div>
        <img src={cod} className='rounded-3xl'alt='cod'/>
          </div>
        <div>
        <img src={image2} className='rounded-3xl'alt='cod'/>
          </div>
        <div>
        <img src={image3} className='rounded-3xl' alt='cod'/>
          </div>
      </div>
      </div>
     
      
     </aside>
   </section>
  )
}

export default DashBoard