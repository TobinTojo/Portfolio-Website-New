import React from 'react';
import ReactDOM from 'react-dom/client';


export default function Hero() {
    return (
        <section className="hero">
            <div id="personal-info">
             <img src="./images/Tobin-Tojo-Headshot.jfif" alt="Tobin Tojo Headshot" id="profile-image"></img>
                <h1 id="title-1"  className="red-text">Hi I'm</h1>
                <h2 id="title-2" className="blue-text">Tobin Tojo</h2>
                <h1 id="who-am-i">
                    <span>I am a</span>
                    <div className="message">
                        <div className="word1">Web Developer</div>
                        <div className="word3">Game Developer</div>
                        <div className="word4">Computer Science Student</div>
                    </div>
                </h1>
            </div>
             <div className="social-media-icons">
                <a href="https://github.com/TobinTojo" target="_blank">
                    <img src="./images/Github_white.png" className="icon" id="github-icon"></img>
                </a>
                <a href="https://www.linkedin.com/in/tobintojo/" target="_blank">
                    <img src="./images/LinkedIN_white.png" className="icon"  id="linkedin-icon"></img>
                </a>
                <a href="https://tobintojo.itch.io/" target="_blank">
                        <img src="./images/itch-io-icon-white.png" className="icon" id="itch-icon" alt="Itch">
                        </img>
                </a>       
                <a href="https://www.youtube.com/" target="_blank">
                        <img src="./images/Youtube_white.png" className="icon" id="youtube-icon" alt="YouTube">
                        </img>
                </a>            
            </div>
        </section>
    )
}