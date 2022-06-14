import React from "react";
import '../styles/popup.css';

const Popup = (props) => {
    return (props.trigger) ? (
        <div className="popup ">
            <div className="popup-inner neon-box">
                <button className="close-btn" onClick={() => props.setTrigger(false)}
                >CLOSE</button>
                { props.children }
            </div>            
        </div>
    ) : "";
}

export default Popup;
