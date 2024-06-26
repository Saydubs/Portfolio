import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Form from '../components/Form'
import { useTranslation } from "react-i18next";

const Contact = () => {
  const{t} = useTranslation();
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading={t("contact")} text={t("heroimg2ContactText")}/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact