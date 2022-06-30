import React from "react";
import '../styles/footer.css';

import maru from '../assets/images/maru-.png';

const Footer = () => {
    return (
        <div className="footer-column" >
            <div className="text">
                <h1 className="text1">Sushi </h1>    
                <span> <img className="logo" src={maru} alt="logo"></img></span>
                <h1 className="text1">Maru </h1>     
            </div>
            <p className="copyright">© {new Date().getFullYear()} Sushi Maru. All Rights Reserved.</p>
        </div>
    )
}

export default Footer;
