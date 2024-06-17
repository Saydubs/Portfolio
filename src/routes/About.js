import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'
import { useTranslation } from "react-i18next";

const About = () => {
  const{t} = useTranslation();
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading={t("about")} text={t("heroimg2AboutText")}/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About