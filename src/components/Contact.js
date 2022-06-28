import React from "react";
import '../styles/contact.css';

const Contact = () => {
  return (
    <div className="row">
      <div className="column">
        <h2 className="contact-title">location</h2>
        <p className="contact-content">1475 Bedford Hwy #111, Bedford, NS</p>
        <p className="contact-content"> B4A 3Z5</p>
      </div>
      <div className="column">
        <h2 className="contact-title">Hours</h2>
        <p className="contact-content">Monday - Saturday, 11:30am to 9pm</p>
        <p className="contact-content">Last Order 8:30 PM</p>
        <p className="contact-content">Closed Sundays </p>
      </div>
      <div className="column">
      <h2 className="contact-title">contact</h2>
      <p className="contact-content">(902) 406-8866</p>
      <p className="contact-content">sushimaru@gmail.com</p>
      </div>
    </div>
  )
}

export default Contact;
