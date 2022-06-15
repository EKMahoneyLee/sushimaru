import React from "react";
import '../styles/popup.css';

const Popup = (props) => {
    return (props.trigger) ? (
        <div className="popup ">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}
                >CLOSE</button>
                {/* { props.children } */}
                <article className="neon-text">
                    <h1 className='neon'> Opening <span>Soon</span></h1>
                </article>
            </div>            
        </div>
    ) : "";
}

export default Popup;
