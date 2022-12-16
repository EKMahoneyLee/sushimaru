import React from "react";
import './footer.scss';

import maru from '../../assets/images/maru-icon.png';

const Footer = () => {
    return (
        <div className="footer" >
            <div className="icon">
                <h1 className="text1">Sushi </h1>    
                <img className="logo" src={maru} alt="logo"></img>
                <h1 className="text1">Maru </h1>     
            </div>
            <p className="copyright">© {new Date().getFullYear()} Sushi Maru. All Rights Reserved.</p>
        </div>
    )
}

export default Footer;
