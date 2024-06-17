import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Work from '../components/Work'
import { useTranslation } from "react-i18next";

const Project = () => {
  const{t} = useTranslation();
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading={t("projects")} text={t("heroimg2ProjectsText")}/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Project