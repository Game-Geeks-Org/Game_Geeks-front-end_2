import React, { useState, useEffect } from 'react'
import gold from '../Assets/Images/Gold.gif'
import silver from '../Assets/Images/Silver.gif'
import platinum from '../Assets/Images/Platinum.gif'
import cod from '../Assets/Images/LORD OF SPACE 022.png'
// import image2 from '../Assets/Images/ORBS COLLECTOR 022.png'
// import image3 from '../Assets/Images/FOREST TOP DOWN 022.png'
import Header from '../Components/Header/Header'
// import image from '../Assets/Images/LORD OF SPACE 01.png'
// import image2 from '../Assets/Images/orbs collector coming soon.png'
// import image3 from '../Assets/Images/FOREST COMING SOON.png'
import axios from 'axios';
import '../Styles/Dashboard.css'
import { getActiveAccount } from '../Utils/wallet'
// import { Wallet } from '@taquito/taquito'
import img5 from '../Assets/Images/geekyhead NFT sale.png'

function DashBoard() {
  const [dashBoardAddress, setDashboardAddress] = useState(null)
  const [isActive, setIsActive] = useState(false)

  const [platinumNFT, setPlatinumNFT] = useState(0)
  const [goldNFT, setGoldNFT] = useState(0)
  const [silverNFT, setSilverNFT] = useState(0)

const checkNFT = async () => {
  const account = await getActiveAccount()
  if (account) {
    const platinumNFTData = await axios.get(`https://api.tzkt.io/v1/bigmaps/284795/keys/{"address":"${account.address}","nat":"0"}`)
    const goldNFTData = await axios.get(`https://api.tzkt.io/v1/bigmaps/284795/keys/{"address":"${account}","nat":"1"}`)
    const silverNFTData = await axios.get(`https://api.tzkt.io/v1/bigmaps/284795/keys/{"address":"${account}","nat":"2"}`)
    setPlatinumNFT(platinumNFTData.data.value);
    setGoldNFT(goldNFTData.data.value);
    setSilverNFT(silverNFTData.data.value);
   }
}



  useEffect(() => {
    const interval = setInterval(async () => {
      const account = await getActiveAccount();
      
      if (account) {
        setDashboardAddress(account.address);
        setIsActive(true)
        await checkNFT()
        
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
   
    isActive ? <>
    
     <Header />
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
              {platinumNFT ? <p className='platinum'>Platinum Clan</p> : goldNFT ? <p className='gold'>Gold Clan</p> : silverNFT ? <p className='silver'>Silver Clan</p> : <><h3 style={{color:"grey"}}>You don't have any GeekyHead NFT. Sale Starting soon</h3></>}</div>
            <div className='text-center'>
            {platinumNFT ? <img src={platinum} alt="goldNFT"/> : goldNFT ? <img src={gold} alt="goldNFT"/> : silverNFT ? <img src={silver}  // eslint-disable-next-line 
            alt="goldNFT"/> : <img style={{width:'50%'}} src={img5}  alt=''/>}
            
            </div>
          </div>
        </div>
        <aside className='mt-10'>
          <div className='container d-flex justify-content-around items-center game_asset_section'>
            <div className='pb-10'>
              <div className='game-background'>
                <p className='text-white'>Recently Added</p>
                <span style={{color:"#E5E4E2"}}>Dashboard Coming Soon ...</span>
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
              <a href='https://thelordofthespace.gamegeeks.online/' target="_blank" rel="noreferrer"><div className='mb-3'>
                <img src={cod} width='600px' className='rounded-5 lord_img' alt='cod' />
              </div></a>
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