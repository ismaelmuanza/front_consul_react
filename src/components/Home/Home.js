import React from 'react'
import LeadMore from '../LeadMore/LeadMore'
import Banner from './Banner/Banner'
import BannerAdvertisement from './BannerAdvertisement/BannerAdvertisement'
import Cards from './Cards/Cards'
import Communique from './Communique/Communique'
import News from './News/News'

const Home = () => {
  return (
    <>
        <Banner />
        <Cards />
        <LeadMore leadMore='VER MAIS SERVIÇOS' to='/' />
        <BannerAdvertisement />
        <News />
        <Communique />
    </>
  )
}

export default Home
