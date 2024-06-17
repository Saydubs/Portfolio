import "./FooterStyles.css"

import React from 'react'
import {FaHome,FaPhone,FaMailBulk, FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const{t} = useTranslation();
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                    <div>
                        <p>Bergrat-Voigt 31</p>
                        <p>98693 Ilmenau</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} 
                    style={{color:"#fff",
                    marginRight: "2rem"}}/>
                    0 151 24198162</h4>
                
                </div>
                <div className="email">
                    <h4><FaMailBulk 
                    size={20} style={{color:"#fff",
                    marginRight: "2rem"}}/>
                    5sergeydu5@gmail.com</h4>
                
                </div>
            </div>
            <div className="right">
                <h4>{t("about_me")}</h4>
                <p>{t("socialLinks")}</p>
                <div className="social">
                        <a href="https://www.facebook.com/profile.php?id=100004654749616" target="_blind"> 
                        <FaFacebook
                size={30} 
                style={{color:"#fff",
                marginRight: "1rem"}}/>
                        </a>
                        <a href="https://www.instagram.com/saydu_/" target="_blind">
                        <FaInstagram
                size={30} 
                style={{color:"#fff",
                marginRight: "1rem"}}/>
                        </a>
                        <a href="https://www.linkedin.com/in/serhii-dubovyk-681b82298/" target="_blind">
                        <FaLinkedin
                size={30} 
                style={{color:"#fff",
                marginRight: "1rem"}}/>
                        </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer

