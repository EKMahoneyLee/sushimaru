import React from "react";
import '../styles/menu.css';
import dinein from '../assets/dinein.pdf'
import take from '../assets/takeout.pdf'

import dine from '../assets/images/dine.png';
import takeout from '../assets/images/takeout.png';
import delivery from '../assets/images/delivery.png';

const Menu = () => {   
  return (
   <>
      <div className="title-container">
         <h1 className="gallery-title">Our Menu</h1>
      </div>
      <div className="container">
         <div className="box1">
            <figure>
               <a  href = {dinein} target = "_blank" rel="noreferrer" >
                  <img src={dine} alt="dine" />
            </a>
            <div className="dine">Dine In</div></figure>
         </div>

         <div className="box2">
         <figure> <img src={delivery} alt="sushi" /></figure>
         </div>

         <div className="box3">
         <figure> 
            <a  href = {take} target = "_blank" rel="noreferrer" >
               <img src={takeout } alt="takeout" />   
            </a>
            <div className="takeout">Take Out</div></figure>
         </div>
      </div>
      {/* <hr className="menu-contact"></hr> */}
    </>
  )
}

export default Menu;
