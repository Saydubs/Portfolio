import "./WorkCardStyles.css"
import WorkCard from "./WorkCard"
import WorkCardData from "./WorkCardData"
import { useTranslation } from "react-i18next";

import React from 'react'

const Work = () => {
  
  const{i18n,t} = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="work-container">
        <h1 className="project-heading">{t("projects")}</h1>
        <div className="project-container">
            {WorkCardData.map((val,ind) =>{
                return(
                    <WorkCard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title[currentLanguage]}
                    text={val.text[currentLanguage]}
                    view={val.view}
                    />
                )
            })}
        </div>
    </div>
  )
  

}

export default Work