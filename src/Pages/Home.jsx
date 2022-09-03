import React from 'react'
import HeroSection from '../Components/UI/HeroSection'
import Games from '../Components/UI/Home_Game/Games'
import HomeStore from '../Components/UI/Home_Store/HomeStore'
import Team from '../Components/UI/Team/Team'
import Footer from '../Components/Footer/Footer'



function Home() {
  return (
    <>
    <HeroSection />
    <Games />
    <HomeStore />
    <Team />
      
    </>
  )
}

export default Home