import React from 'react';
import ReactDOM from 'react-dom/client';


export default function About() {
    return (
        <section className="about">
             <div id="about-me">
                 <h3 id="about-header">INTRODUCTION</h3>
                 <h1 id="about-title">About Me.</h1>
                 <p className="about-text">I am a third year student studying <span className="border-text">Computer Science (BSc)</span> at <span className="border-text">Wilfrid Laurier University</span>. I have been learning to program for the past seven years and specialize in numerous programming languages such as Java, C and Python.  I created this website to continue to practice my web development skills, while also using it to keep track of my personal projects and previous work experiences. I am eager to take on a challenging and rewarding role that will set me up for success in my future career. 
                 </p>
                 <p className="about-text"> With a passion for software development and a proven track record of success, I believe that I am the best fit for any SDE/SWE role. I have a keen interest in the Unity game engine and I have been developing computer and mobile games for over a year. I have also competed in game jams in which I have placed <span className="border-text">7th</span> at the international level. Feel free to contact me for any inquiries.
                </p>
                <div id="professions">
                    <div className ="software-skills">
                        <img className="software-img" src="./images/front-end-icon.png"></img>
                        <p className = "software-label">Frontend</p>
                        <p className = "software-label">Developer</p>
                    </div>
                    <div className ="software-skills" id="software">
                        <img className="software-img" src="./images/software-icon.png"></img>
                        <p className = "software-label">Software</p>
                        <p className = "software-label">Developer</p>
                    </div>
                    <div className ="software-skills" id="game">
                        <img className="software-img" src="./images/game-dev-icon.png"></img>
                        <p className = "software-label">Game</p>
                        <p className = "software-label">Developer</p>
                    </div>
                </div>
             </div>
        </section>
    )
}