import React from "react";
import '../styles/aboutkang.css'; 
// import maru from '../assets/images/maru.png';

const AboutKang = () => {
  return (
    <>
      <div className="aboutkang">
        <div className="about-section">
        {/* <img className="kang-right logo" src={maru} alt="logo"></img> */}
          <p className="kang-left">With over <strong>10 years' experience </strong>serving customers in the Halifax area, 
            <strong> chef Kang </strong>is an expert at creating both traditional and locally-inspired dishes that are sure 
            to please the palate of any Haligonian. 
          </p> 
         
        </div>
      </div>
    </>
  )
}

export default AboutKang;
