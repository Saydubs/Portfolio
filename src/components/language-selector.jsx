import i18n from '../i18n';
import {useTranslation} from "react-i18next";
import './language-selector'
import { FaEarthEurope } from "react-icons/fa6";
import "./language-selectorStyles.css"

const languages = [
  {code: "en", lang: "EN"},
  {code: "ge", lang: "GE"},
];

const LanguageSelector = () => {
  const {i18n} = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="btn-container">
      {languages.map((lng) => {
        return (
              <FaEarthEurope className={lng.code === i18n.language ? "langIconHide" : "langIcon"}
              key={lng.code}
              onClick={() => changeLanguage(lng.code)}
              size={40} style={{color: "#fff"}}> <span className='textLNG'>(lng.code)</span></FaEarthEurope>
        
            );
       
      })}

      </div>)
};



export default LanguageSelector;