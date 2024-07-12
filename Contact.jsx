import React from 'react';
import ReactDOM from 'react-dom/client';


export default function Contact() {
    return (
        <section className="contact">
            <div id="contact-info">
                <h3 id="about-header">GET IN TOUCH</h3>
                <h1 id="about-title">Contact.</h1>
                <p className="about-text" id="slide-down">Please feel free to contact me via: 
                 </p>
                <div id="contact-container">
                    <div className="contact-section" id = "phone-icon">
                        <a href="tel:+14372553103"><button className="phone-email">437-255-3103  <img src="./images/phone-ui.png" className="contact-img" id="phone-img"></img></button></a>
                    </div>
                    <div className="contact-section" id = "email-icon">
                        <a href="mailto:tobintojo@gmail.com"><button className="button-email">tobintojo@gmail.com<img src="./images/envelope-ui.png" className="contact-img"></img></button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}