

import { useRef, useEffect, useState } from 'react'
import logo from './logo/logo.png'
import {
    connectWallet,
    getActiveAccount,
    disconnectWallet,
  } from "./Utils/Wallet";
 
import './index.css'
import {NavLink,} from 'react-router-dom'
const NAV__LINKS = [
    {
        display: 'Home',
        url: '/home' 
    },

    {
        display: 'Dashboard',
        url: '/dashboard' 
    },
    {
        display: 'NFT Store',
        url: '/nftstore' 
    },
  
    {
        display: 'Games',
        url: '/games' 
    },
   
]

function Header() {

    const [wallet, setWallet] = useState(null);

    const handleConnectWallet = async () => {
      const { wallet } = await connectWallet();
      setWallet(wallet);
    };
    const handleDisconnectWallet = async () => {
      const { wallet } = await disconnectWallet();
      setWallet(wallet);
    };
  
    useEffect(() => {
      const func = async () => {
        const account = await getActiveAccount();
        if (account) {
          setWallet(account.address);
        }
      };
      func();
    }, []);
    



const headerRef = useRef(null)

const menuRef = useRef(null)

useEffect(() => {
window.addEventListener('scroll',() => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('header_shrink')
    }else{
        headerRef.current.classList.remove('header_shrink')
    }
})
return()=>{} 



},[])

const toggleMenu = () => menuRef.current.classList.toggle('active__menu')
  return (
    <header className='header pb-[100px]'ref={headerRef}>
            <div className="navigation">
               <img src={logo}  alt='logo' width='100px' className='image'/>
                <div className="nav__menu" ref ={menuRef} onClick={toggleMenu}>
                    <ul className="nav__list">
                        { NAV__LINKS.map((item,index) =>(
                                    <li className="nav-item" key={index}>
                                    <NavLink to={item.url} className={navClass => navClass.isActive ? 'active': ""}>{item.display}</NavLink>
                                </li>
                             ))}
                    </ul>
                </div>
              
                <div className="nav-right">
                    <button onClick={wallet ? handleDisconnectWallet : handleConnectWallet}  className='connect_btn'>          
                                    
                            
                        {wallet
                            ? wallet.slice(0, 4) +
                            "..." +
                             wallet.slice(wallet.length - 4, wallet.length)
                            : "Connect wallet"}</button>
            </div>
            <div className="">
                         {/* MOBILE MENU */}
                         <span className='mobile_menu'><i className="ri-menu-2-line" onClick={toggleMenu}></i></span>
                         
                </div>
            </div>
    </header>
  )
}

export default Header