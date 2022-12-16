import React from "react";
import './about.scss'; 
import './gallery.scss'
// import RainbowRoll from'../../assets/images/RainbowRoll.jpg';
// import RainbowRoll from'../../assets/images/m3.jpg';
import RainbowRoll from'../../assets/images/m4.jpg';
import tray from'../../assets/images/tray.png';
import location from'../../assets/images/location.jpg';



const About = () => {
 
  return (
    <>
      <div className="about">
        <div>
          <img className="main-icon" src={RainbowRoll} alt="main-icon"></img>
        </div>
        
        <div className="tray">
          <div className="content">
            <h2>Maru Tray For Party(Only Take Out)</h2>
            <div className="tray-menu">
              <h3>Maru Mini Party</h3>
              <p>30 Sushi Roll: 6 Sweet Potato, 6 California, 6 spicy Tuna, 6 Spicy Salmon, 6 Philadelphia</p>
              <h3>Maru Classy Party</h3>
              <p>14 Sushi Roll: 6 California Roll, 4 Black Dragon, 4 Gold Dragon
              <br/>10 Nigiri Sushi: 2 Salmon, 2 Tuna, 2 Snapper, 2 Red Shrimp, 2 Butter Fish,  
              <br/>10 Sashimi: 2 Salmon, 2 Tuna, 2 Snapper, 2 Surf Clam, 2 Butter Fish</p>
              <h3>Maru Roll Party</h3>
              <p>56 Sushi Roll: 12 Spicy Tuna, 12 Spicy Salmon, 6California, 6 Avocado, 6 Philadelphia, 6 Sweet potato, 8 Dynamite</p>
              <h3>Maru Luxury Party</h3>
              <p>52 Sushi Roll: 8 Gold Dragon, 8 Dynamite, 6 Spicy Tuna, 6 Spicy Salmon, 6 Philadelphia, 6 Avocado, 6 Sweet Creamy, 6 Spicy Crispy
              <br/> 6 Nigiri: 1 Tuna, 1 Salmon, 1 Shrimp, 1 Snapper, 1 Butterfish, 1 Unagi</p>
            </div>
            <button><a href="/takeout">To see the Full Take Out Menu</a></button>
          </div>
          <div className="img-container">
          <a href="/takeout"><img className="main-img" src={tray} alt="main-img"></img></a>
          </div>        
        </div>
      </div>

      <div className="quote">
        <h2 className="title">To Eat Is A Necessity, But To Eat Joyously Is An Art </h2>
        <p className="content">We believe the best joy in life is sharing great food with great people, 
            which is why we are commited to providing a delectable dining experience! <br/>
            Our food is expertly prepared using carefully 
            selected fresh ingredients and served in a comfortable and friendly atmosphere. <br/>
            <u>At Sushi Maru, the best taste is plated in front of you! </u></p>
      </div> 
      
      <div className="contact">
        <div>
          <img className="main-img" src={location} alt="main-img"></img>
        </div>
        <div className="content">
          <h3><u>Opening and Closing Time</u></h3>
          <p>Monday - Saturday 11:30am to 9pm</p>
          <p>Closed Sundays </p> 
          <i>Last Order 8:30 PM</i>
          <h3><u>Location</u></h3>       
          <p>1475 Bedford Hwy #111, Bedford, NS B4A 3Z5</p>
          <h3><u>Phone Number</u></h3> 
          <p>For Take Out please call <a href="tel:9024068866">(902) 406-8866</a></p>
        </div>
      </div>
    </>
  )
}

export default About;

{/* <div className="holliday">
<h2 className="title">Holliday Closed (2022)</h2>
<p className="content">New Year's Day ()</p>
<p className="content">Family Day ()</p>
<p className="content">Good Friday ()</p>
<p className="content">Canada Day ()</p>
<p className="content">Labour Day ()</p>
<p className="content">Thanksgiving ()</p>
<p className="content">Boxing Day ()</p>
<p className="content">Christmas (Dec 26)</p>
</div> */}
