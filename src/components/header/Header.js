import React from "react";
import './header.scss';

import main from'../../assets/images/maru-icon.png';

const Header = () => {
  return (
    <div className="header"> 
      <div className="top">
        <div className="top-inner">
          <a href="/">Home</a>
          <a href="/takeout">Take-Out Menu</a>
          <a href="/lunch">Lunch Menu</a>
          <a href="/dinein">Dine-In Menu</a>
        </div>
      </div>
      <div className="icon">
        <div className="icon-inner">
          <img className="main-icon" src={main} alt="main-icon"></img>
          <h1 className="title">Sushi Maru</h1>        
        </div>
      </div>
      <label className="menu_container">
        <input type="checkbox" />
        <span className="menu"> <span className="hamburger"></span> </span>
        <ul>
          <li><a className="active" href = "/" rel="noreferrer">home</a></li>
          <li><a href="/takeout" rel="noreferrer">Take-Out Menu</a></li>
          <li><a href="/lunch" rel="noreferrer">Lunch Menu</a></li>
          <li><a href ="/dinein" rel="noreferrer">Dine-In Menu</a></li>
        </ul>
      </label>
    </div>
  )
}

export default Header;
