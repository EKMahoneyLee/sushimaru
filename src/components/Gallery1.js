import React from "react";
import '../styles/gallery1.css';

import m1 from '../assets/images/m1.jpg';
import m2 from '../assets/images/m2.jpg';
import m3 from '../assets/images/m3.jpg';
import m4 from '../assets/images/m4.jpg';
// import m5 from '../assets/images/m5.jpg';


const Gallery1 = () => {   
  return (
    <div>
      <h1 className="m-title-black">The gallery1</h1>
    <div className="container">
     <div className="box">
        <img src={m1} alt="sushi"></img>
        <span>Salmon Teriyaki</span>
     </div>
     <div className="box">
        <img src={m2} alt="sushi"></img>
        <span>Green onion Beef roll</span>
     </div>
     <div className="box">
        <img src={m3} alt="sushi"></img>
        <span>Squid Teriyaki</span>
     </div>
     <div className="box">
        <img src={m4} alt="sushi"></img>
        <span>Chicken Skewered</span>
     </div>
    </div>

    </div>
  )
}

export default Gallery1;