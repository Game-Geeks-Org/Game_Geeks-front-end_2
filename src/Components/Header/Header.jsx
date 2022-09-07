import { useEffect, useState } from 'react'
import logo from '../../Assets/Images/logo.png'
import close from '../../Assets/Images/close-line (2).png'

import {
  connectWallet,
  getActiveAccount,
  disconnectWallet,
} from "../../Utils/wallet";


  import './Header.css'

  import {NavLink,} from 'react-router-dom'


const Navbar = () => {

  const [wallet, setWallet] = useState(null);
    const [showDisconnect, setShowDisconnect] = useState(false);

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

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
  //       headerRef.current.classList.add('header_shrink')
  //     } else {
  //       headerRef.current.classList.remove('header_shrink')
  //     }
  //   })
  //   return () => { }
  // }, [])

  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
       <div>
       <img src={logo} width='100px' alt="" />
        </div> 
                   <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
                           { NAV__LINKS.map((item,index) =>(
                                    <li className="nav-item" key={index}>
                                    <NavLink to={item.url} className={navClass => navClass.isActive ? 'active': ""}>{item.display}</NavLink>
                                </li>
                             ))}
                             {
                    wallet ? (
                      <div className='wrapper' 
                         onMouseEnter={() => setShowDisconnect(true)}
                          onMouseLeave={() => setShowDisconnect(false)} >

              </div>

            ) : (
              <button className='connect_btn' onClick={handleConnectWallet}>
                connect wallet
              </button>
            )
          }

                    ):(
                      <button className='connect_btn text-white' onClick={handleConnectWallet}>
                        connect wallet
                      </button>
                    )
                  }

           

       </ul>
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
        {Mobile ? <img src={close} alt='close' /> : <i className="ri-menu-2-line"></i>}
        </button>
      </nav>
    </>
  )
}
export default Navbar
