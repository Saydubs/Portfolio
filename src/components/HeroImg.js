import "./HeroImgStyles.css";

import React from 'react';

import IntoImg from "../assets/intro.jpg"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Heroimg = () => {

  const{t} = useTranslation();

  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img"
            src={IntoImg} alt="IntoImg"/>
        </div>
        <div className="content">
            <p>{t("heroimg_content_header")}</p>
            <h1>{t("heroimg_content_text")}</h1>
            <div>
                <Link to="/project" 
                className="btn">{t("projects")}</Link>
                 <Link to="/contact" 
                className="btn btn-light">{t("contact")}</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg