import "./NavbarStyles.css";

import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import LanguageSelector from '../components/language-selector'

const Navbar = () => {

    const{t} = useTranslation();

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY >=100){
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scroll",changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to={"/"}>
        <h1>Portfolio</h1>
        </Link>
        <LanguageSelector/>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">{t("home")}</Link>
            </li>
            <li>
                <Link to="/project">{t("projects")}</Link>
            </li>
            <li>
                <Link to="/about">{t("about")}</Link>
            </li>
            <li>
                <Link to="/contact">{t("contact")}</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? ( <FaTimes size={20} style={{color: "#fff"}}/>)  :
             <FaBars size={20} style={{color: "#fff"}}/>}
           
            
        </div>
    </div>
  )
}

export default Navbar
