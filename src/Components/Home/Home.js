import React from 'react';

import Footer from '../Footer/Footer'
import Skills from '../MySkills/Skills'
import AboutMe from '../AboutMe/AboutMe'
import Contact from '../ContactMe/Contact'
import Expertise from '../Expertise/Expertise'
import HeroSection from '../HeroSection/HeroSection'
import MyPortfolio from '../MyPortfolio/MyPortfolio'

const Home = () => {
  return (
    <>
      <HeroSection />
      <Expertise />
      <AboutMe />
      <MyPortfolio />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}

export default Home