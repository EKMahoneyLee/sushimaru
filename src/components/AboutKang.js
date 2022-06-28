import React from "react";
import '../styles/aboutkang.css'; 
import maru from '../assets/images/maru.png';

const AboutKang = () => {
  return (
    <>
      <div className="aboutkang">
        <h2 className="about-title">To Eat Is A Necessity, But To Eat Joyously Is An Art</h2>
        <div className="text-section">
          <p className="left">With over 10 years experience serving customers in the Halifax area, 
            chef Kang is an expert at creating both traditional and locally-inspired dishes that are sure 
            to please the palate of any Haligonian. 
          </p> 
          <img className="right logo" src={maru} alt="logo"></img>
        </div>
      </div>
    </>
  )
}

export default AboutKang;
