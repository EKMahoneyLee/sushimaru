import React from "react";
import '../styles/menu.css';
import Pdf from '../assets/NMT.pdf'

import m1 from '../assets/images/m1.jpg';
import m2 from '../assets/images/m2.jpg';
import m3 from '../assets/images/m3.jpg';
import m4 from '../assets/images/m4.jpg';
// import m5 from '../assets/images/m5.jpg';


const Gallery1 = () => {   
  return (
    <div className="menu-container">
      <div className="title-container">
         <h1 className="gallery-title">Our Menu</h1>
      </div>
      <div className="container">
         <div className="box">
            <a  href = {Pdf} target = "_blank" rel="noreferrer" ><img src={m1} alt="sushi" />
               <span>Dine-in</span>
            </a>
         </div>

         <div className="box">
            <a  href = {Pdf} target = "_blank" rel="noreferrer" ><img src={m2} alt="sushi" />
               <span>Take-out</span>  
            </a>
         </div>

         <div className="box">
            <a  href = {Pdf} target = "_blank" rel="noreferrer" ><img src={m3} alt="sushi" />
               <span>Delivery</span>    
            </a>
         </div>
      </div>
    </div>
  )
}

export default Gallery1;
