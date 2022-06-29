import React from "react";
import '../styles/footer.css';

import maru from '../assets/images/maru-.png';

const Footer = () => {
    return (
        <div className="footer-column" >
            <div className=" container-middle" id="second">
                <h1 className="text1">Sushi     {<span> <img className="left logo" src={maru} alt="logo"></img></span> } Maru</h1>     
                <p className="copyright">© {new Date().getFullYear()} Sushi Maru. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;
