import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import MyPhoto from "../assets/photo.png"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Education</h1>
            <p>09.2016 - 06.2019 Donetsk National Technical University, Degree Earned: Bachelor of Information and Communication Technology</p>
            <p>09.2012 - 05.2016 Donetsk Polytechnic School, Degree Earned: Computer Network</p>
            <div>
            <Link to="/contact" className="btn">Contact
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