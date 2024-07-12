import React from 'react';
import ReactDOM from 'react-dom/client';


export default function Header() {
    return (
        <nav>
            <img id="logo-img" src="./images/tobin-tojo-logo.png" />
            <div className="nav-buttons">
                <a href="#about-me"><button className="nav-text">About</button></a>
                <a href="#projects-section" className="navbar-links"><button className="nav-text">Projects</button></a>
                <a href="#work-experience"><button className="nav-text" id="support">Experience</button></a>
                <a href="#contact-info"><button className="nav-text" id="support">Contact</button></a>
            </div>
        </nav>
    )
}