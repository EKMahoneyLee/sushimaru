import React from "react";
import '../styles/gallery.css';

import m1 from '../assets/images/m1.png';
import m2 from '../assets/images/m2.png';
import m3 from '../assets/images/m3.png';
import m4 from '../assets/images/m4.png';
import m5 from '../assets/images/m5.png';
import m6 from '../assets/images/m6.png';

const Gallery = () => {   
  return (
   <>
       <hr className="menu-contact"></hr>
      <div className="gallery-container">
         <div className="gallery-box">
            <img  src={m1} alt="dine" />
            {/* <h4 className="dine-title">회초밥 </h4>
            <p className="dine-discription">이것은 회 비빔밥이다. </p> */}
         </div>
         <div className="gallery-box">
            <img src={m2} alt="sushi" />
            {/* <h4 className="dine-title">회초밥 </h4>
            <p className="dine-discription">이것은 회 비빔밥이다. </p> */}
         </div>
         <div className="gallery-box">
            <img src={m3 } alt="takeout" />   
            {/* <h4 className="dine-title">회초밥 </h4>
            <p className="dine-discription">이것은 회 비빔밥이다. </p> */}
         </div>
         <div className="gallery-box">
            <img src={m4} alt="dine" />
            {/* <h4 className="dine-title">회초밥 </h4>
            <p className="dine-discription">이것은 회 비빔밥이다. </p> */}
         </div>
         <div className="gallery-box">
            <img src={m5} alt="sushi" />
            {/* <h4 className="dine-title">회초밥 </h4>
            <p className="dine-discription">이것은 회 비빔밥이다. </p> */}
         </div>
         <div className="gallery-box">
             <img src={m6 } alt="takeout" />   
            {/* <h4 className="dine-title">회초밥 </h4>
            <p className="dine-discription">이것은 회 비빔밥이다. </p> */}
         </div>
      </div>
    </>
  )
}

export default Gallery;
