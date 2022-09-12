import React from 'react'
import Header from '../Components/Header/Header'
import '../Styles/Game.css'
// import pic from '../Assets/Images/pic_1.png'
// import menu from '../Assets/Images/filter-3-fill.png'
// import GameCards from '../Components/UI/GameCards/GameCards'
// import { GAME__DATA } from '../Assets/Data/data'















function Games() {
  return (
    <>
    <Header />
    <div className='text-white game_title'>Games</div>
    </>
    
  )
}

export default Games

// function Games() {
//   const [data, setData] = useState(GAME__DATA)

//   return (
//     <section className='pb-52'>
//       <div className='Game_banner mt-[100px]'></div>
//       <div className='container'>
//         <div>
//         <img src={pic}  className='pic border-[9px] border-[#AF0000] rounded-[50px] text-center'  alt='pic'/>
//         </div>
//         <p className='text-5xl text-white space_header mt-[150px]'>Space <span className='text-BtnColor'>Shooter</span></p>
//        <div className='flex text-white gap-20 text-[8px]  md:text-[12px] lg:text-[32px] mt-4'>
//         <div>
//         10.0K <br />       
//         items
//         </div>
//         <div>
//         3.3K <br />
//         owners
//         </div>
//         <div>
//         34.0K ꜩ <br />
//         total volume
//         </div>
//         <div>
//         1.95 ꜩ <br />
//         floor price
//         </div>
//        </div>

//        <div className='mt-[150px] text-white'>
//         <p className='space_header text-[34px]'>Items <span className='text-BtnColor ml-[12px]'>Activity</span></p>
//         <div style={{ borderTop: "2px solid #494949", marginLeft: 5, marginRight: 20 }}></div>
//        </div>

//        <div className='grid grid-cols-1 justify-between gap-9 md:grid-cols-2 lg:flex mt-[20px]'>
//         <div className='flex gap-10'>
//           <div><img src={menu} alt="" /></div>
//           <div className='filter__right'>
//           <select>
//                     <option className='text-center'> Sort By</option>
//                     <option value='high'>High Rate</option>
//                     <option value='mid'>Mid Rate</option>
//                     <option value='low'>Low Rate</option>
//                   </select>
//           </div>
//         </div>
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-flow-col text-white gap-10'>
//           <button className='border-[2px] rounded-md text-[16px] border-BtnColor px-6 filter_btn'>Music</button>
//           <button className='border-[2px] rounded-md text-[16px] border-BtnColor px-6 filter_btn'>Art</button>
//           <button  className='border-[2px] rounded-md text-[16px] border-BtnColor px-6 filter_btn'>Sports</button>
//           <button  className='border-[2px] rounded-md text-[16px] border-BtnColor px-6 filter_btn'>Virtual</button>
//           <button  className='border-[2px] rounded-md text-[16px] border-BtnColor px-6 filter_btn' >Videos</button>
//           <button  className='border-[2px] rounded-md text-[16px] border-BtnColor px-6 filter_btn'>More</button>
//         </div>
//        </div>
//        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between items-center mt-32 gap-12'>
//         {
//           data.map((item) =>{
//             return(
//               <GameCards item={item} key={item.id} />

//             )
             
//           })
//         }
//        </div>
//       </div>
//     </section>
//   )
// }

// export default Games



