import React from "react";
import '../styles/footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="column" >
                <div className=" container-middle" id="second">
                    <h1 className="text1">Sushi Maru</h1>     
                    <p className="copyright">© {new Date().getFullYear()} Sushi Maru. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
