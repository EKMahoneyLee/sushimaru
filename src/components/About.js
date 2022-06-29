import React from "react";
import '../styles/about.css'; 
import maru from '../assets/images/maru-.png';

const About = () => {
  return (
    <>
      <div className="about">
      {/* <span> <img className="left logo" src={maru} alt="logo"></img></span> */}
        <h2 className="about-title">To Eat Is A Necessity, But To Eat Joyously Is An Art </h2>
        <div className="about-section">
         
          <p className="right">We believe the best joy in life is sharing great food with great people, 
              which is why we are commited to providing a delectable dining experience! <br/>
              Our food is expertly prepared using carefully 
              selected fresh ingredients and served in a comfortable and friendly atmosphere. <br/>
              <strong>At Sushi Maru, the best taste is plated in front of you! </strong></p>
        </div>
      </div>
      <hr className="menu-contact"></hr>
    </>
  )
}

export default About;
