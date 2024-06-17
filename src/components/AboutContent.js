import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import MyPhoto from "../assets/photo.png"
import { useTranslation } from "react-i18next";

const AboutContent = () => {
    const{t} = useTranslation();
  return (
    <div className="about">
        <div className="left">
            <h1>{t("education")}</h1>
            <p>{t("university")}</p>
            <p>{t("polytech")}</p>
            <div>
            <Link to="/contact" className="btn">{t("contact")}
            </Link>
            </div>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack">
                    <img src={MyPhoto} className="img" 
                    alt="MyPhoto"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent