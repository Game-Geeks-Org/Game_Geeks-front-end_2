import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../Pages/Home'
import DashBoard from '../Pages/DashBoard'
import Games from '../Pages/Games'
import NftStore from '../Pages/NftStore'


function Router() {
  
  return (
   <Routes>

      <Route path='/home'element={<Navigate to='/'/>}/>
      <Route path='/' element={<Home />}/>
      <Route path='/dashboard' element={<DashBoard />}/>
      <Route path='/Game' element={<Games />}/>
      <Route path='/nftstore' element={<NftStore />}/>
   </Routes>
  )
}

export default Router