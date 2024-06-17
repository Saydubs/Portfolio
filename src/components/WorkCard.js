import "./WorkCardStyles.css"

import React from 'react'
import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next";

const WorkCard = (props) => {

  const{t} = useTranslation();

  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="image"/>
    <h2 className="project-title">
        {props.title}
    </h2>
    <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
            <NavLink to={props.view}  target="_blank"
            className="btn">{t("view")}</NavLink>
            <NavLink to="https://github.com/Saydubs?tab=repositories" target="_blank"
            className="btn">{t("source")}</NavLink>
        </div>
    </div>
</div>
  )
}

export default WorkCard