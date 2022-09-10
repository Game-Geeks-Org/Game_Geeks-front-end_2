import React, { useState, useEffect } from 'react'
import gold from '../Assets/Images/geekyhead_gold 1.png'
import cod from '../Assets/Images/LORD OF SPACE 022.png'
import image2 from '../Assets/Images/ORBS COLLECTOR 022.png'
import image3 from '../Assets/Images/FOREST TOP DOWN 022.png'
import Header from '../Components/Header/Header'
// import image from '../Assets/Images/LORD OF SPACE 01.png'
// import image2 from '../Assets/Images/orbs collector coming soon.png'
// import image3 from '../Assets/Images/FOREST COMING SOON.png'

import '../Styles/Dashboard.css'
import { getActiveAccount } from '../Utils/wallet'
// import { Wallet } from '@taquito/taquito'

function DashBoard() {
  const [dashBoardAddress, setDashboardAddress] = useState(null)
  const [isActive, setIsActive] = useState(false)



  useEffect(() => {
    const interval = setInterval(async () => {
      const account = await getActiveAccount();
      if (account) {
        setDashboardAddress(account.address);
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);


  // useEffect(() => {
  //   const func = async () => {
  //     const account = await getActiveAccount();
  //     if (account) {
  //       setDashboardAddress(account.address);
  //     }
  //   };
  //   func();
  // }, []);

  return (
    isActive ? <> <Header />
      <section className='container dashboard'>
        <div className='dash_content'>


          <div className='d-flex justify-content-around wallet_dash'>
            <div className='text-white mt-5 dash_title'> {
              dashBoardAddress ? (
                <div className='dash_address'>
                  <span className=''>
                    {`tz${dashBoardAddress.slice(
                      2,
                      10
                    )}...${dashBoardAddress.slice(
                      dashBoardAddress.length - 4,
                      dashBoardAddress.length
                    )}`}</span>
                </div>
              ) : ""
            }
              <p className='gold'>Golden Clan</p></div>
            <div className='text-center'><img className=' w-full md:w-auto' src={gold} alt='gold' /></div>
          </div>
        </div>
        <aside className='mt-10'>
          <div className='container d-flex justify-content-around items-center game_asset_section'>
            <div className='pb-10'>
              <div className='game-background'>
                <p className='text-white'>Recently Added</p>
              </div>
              {/* <div className='d-flex'>
           <div className='assets pb-20'>
           <p className='text-white'>Gaming <br />Asset</p>
           </div>
           <div className='assets'>
           <p className=' text-white'>Gaming <br />Asset</p>
           </div> */}

              {/* </div> */}

            </div>
            <div className='cod_img'>
              <div className='mb-3'>
                <img src={cod} width='600px' className='rounded-5 lord_img' alt='cod' />
              </div>
              {/* <div className='mb-3'>
                <img src={image2} className='rounded-5' alt='cod' />
              </div>
              <div className='mb-3'>
                <img src={image3} className='rounded-5' alt='cod' />
              </div> */}
            </div>
          </div>


        </aside>
      </section>
    </> : <> <Header />
      <section className='container dashboard'>
        <div className='text-white mt-5 dash_title' style={{ textAlign: 'center' }}>Connect Wallet to Access the Page </div>
      </section></>

  )
}


export default DashBoard