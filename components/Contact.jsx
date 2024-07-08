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
                        <img src="./images/phone-icon.png" className="contact-icons" />
                        <h2 className="contact-container-info">437-255-3103</h2>
                    </div>
                    <div className="contact-section" id = "email-icon">
                        <img src="./images/email-icon.png" className="contact-icons"/>
                        <h2 className="contact-container-info">tobintojo@gmail.com</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}