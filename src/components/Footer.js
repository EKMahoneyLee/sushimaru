import React from "react";
import '../styles/footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="column" id="first">
                <p className="footer-title">Contact</p>
                <a href="tel:19024068666" className="number"><b>Call us at (902) 406-8666</b></a>
                <p className="address-time">1475 Bedford Hwy#111, Bedford, </p>
                <p className="address-time">NS B4A 3Z5</p>

            </div>
            <div className="column" id="second">
            <div className=" container-middle" id="second">
                <h1 className="text1">Sushi Maru</h1>     
                <p className="copyright">Copyright © Sushi Maru {new Date().getFullYear()}. All Rights Reserved.</p>
            </div>
            </div>
            <div className="column" id="third">
                <p className="footer-title">open Hours</p>
                <p className="address-time">Mon-Sat: 6 DAYS A WEEK</p>
                <p className="address-time"> 11:30 AM - 9:00 PM</p>
                <p className="address-time">(Last Call 8:30 PM)</p>
                <p className="footer-title">dine in or takeout or delivery</p>
            </div>
        </div>
    )
}

export default Footer;
