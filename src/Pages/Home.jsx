import React from 'react'
import HeroSection from '../Components/UI/HeroSection'
import Games from '../Components/UI/Home_Game/Games'
// import HomeStore from '../Components/UI/Home_Store/HomeStore'
// import Team from '../Components/UI/Team/Team'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'



function Home() {
  return (
    <>
    <Header />
    <HeroSection />
    <Games />
    <Footer />
    {/* <HomeStore /> */}
    {/* <Team />  */}
      
    </>
  )
}

export default Home