import React from "react";
import '../styles/navbar.css';
import icon from '../assets/icons/i.png';



const Navbar = () => {
  return (
    <>
      <div className="bg">
        <div>
          <p className="cusine">The finest japanese cusine</p>
          <div className="iconBox">
            <img className="icon" src={icon} alt="Choose a Program" />
            <h1 className="text">Sushi Maru</h1>     
          </div>
          <p className="address">1475 Bedford Hwy #111  -  Bedford, NS</p>
        </div>
      </div>
    </>
  )
}

export default Navbar;
