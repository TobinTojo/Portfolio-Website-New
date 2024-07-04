import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Projects() {
    
     const project_title = [
    {
        thumbnail: "portfolio_thumbnail.PNG",
        label: "Portfolio",
        description: "I created this website to practice using React.js, while also using it to keep track of my personal projects and previous work experiences.",
        github_link: "https://github.com/TobinTojo/Portfolio-Website-New",
        play_link: "https://sonicfangameshq.com/forums/showcase/sonic-aether.1628/",
    },
    {
        thumbnail: "sonic_aether_thumbnail.png",
        label: "Sonic Aether",
        description: "Created a 3D platformer for the Sonic Amateur Games Expo, leading to over 1000 downloads and amassed a Youtube following of 900.",
        github_link: "https://github.com/TobinTojo/3D-Game/tree/main",
        play_link: "https://sonicfangameshq.com/forums/showcase/sonic-aether.1628/",
    },
    {
        thumbnail: "weather_thumbnail.png",
        label: "Weather Updater",
        description: "A website that shows weather statistics based on the location the user inputs. OpenWeatherMap API was used to retrieve these statistics and Geolocation API was used to get the current location of the user.",
        github_link: "https://github.com/TobinTojo/WeatherUpdater",
        play_link: "https://tobintojo.github.io/WeatherUpdater/",
    },
     {
        thumbnail: "recipe_thumbnail.png",
        label: "Recipe Search Engine",
        description: "Made a recipe search engine website using the Edamam API to fetch relevant recipes based on the user's input.",
        github_link: "https://github.com/TobinTojo/WeatherUpdater",
        play_link: "https://github.com/TobinTojo/RecipeSearchEngine",
    }
]



    return (
        <section className="projects">
            <div id="projects-section">
                <h3 id="about-header">CREATIVE ENDEAVORS</h3>
                <h1 id="about-title">Projects.</h1>
                <p className="about-text">These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions and links to code repositories and live demos. They showcase my ability to tackle intricate challenges, adapt to various technologies, and efficiently oversee projects. 
                 </p>
                <div id="professions">
                     <div className ="project-div">
                        <img className="project-img" src={`./images/${project_title[0].thumbnail}`}></img>
                        <p className = "project-label">{project_title[0].label}</p>
                        <div className="languages-used">
                             <img className="used-tech" src="./images/html-used.png"></img>
                             <img className="used-tech" src="./images/css-used.png"></img>
                             <img className="used-tech" src="./images/js-used.png"></img>
                              <img className="used-tech" src="./images/react-used.png"></img>
                        </div>
                        <p className="project-description">{project_title[0].description}</p>
                        <div className="languages-used">
                            <a href={`${project_title[0].github_link}`} target="_blank">
                            <img src="./images/Github_white.png" className="icon" id="github-icon"></img>
                            </a>
                            <a href={`${project_title[0].play_link}`} target="_blank">
                            <img src="./images/play-button-white.png" className="icon" id="play-btn-icon"></img>
                            </a>
                        </div>
                    </div>
                    <div className ="project-div" id="sonic-aether">
                        <img className="project-img" src={`./images/${project_title[1].thumbnail}`}></img>
                        <p className = "project-label">{project_title[1].label}</p>
                        <div className="languages-used">
                             <img className="used-tech" src="./images/unity-used.png"></img>
                             <img className="used-tech" src="./images/csharp-used.png"></img>
                        </div>
                        <p className="project-description">{project_title[1].description}</p>
                        <div className="languages-used">
                            <a href={`${project_title[1].github_link}`} target="_blank">
                            <img src="./images/Github_white.png" className="icon" id="github-icon"></img>
                            </a>
                            <a href={`${project_title[1].play_link}`} target="_blank">
                            <img src="./images/play-button-white.png" className="icon" id="play-btn-icon"></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="professions">
                     <div className ="project-div">
                        <img className="project-img" src={`./images/${project_title[2].thumbnail}`}></img>
                        <p className = "project-label">{project_title[2].label}</p>
                        <div className="languages-used">
                             <img className="used-tech" src="./images/html-used.png"></img>
                             <img className="used-tech" src="./images/css-used.png"></img>
                             <img className="used-tech" src="./images/js-used.png"></img>
                        </div>
                        <p className="project-description">{project_title[2].description}</p>
                        <div className="languages-used">
                            <a href={`${project_title[2].github_link}`} target="_blank">
                            <img src="./images/Github_white.png" className="icon" id="github-icon"></img>
                            </a>
                            <a href={`${project_title[2].play_link}`} target="_blank">
                            <img src="./images/play-button-white.png" className="icon" id="play-btn-icon"></img>
                            </a>
                        </div>
                    </div>
                    <div className ="project-div" id="sonic-aether">
                        <img className="project-img" src={`./images/${project_title[3].thumbnail}`}></img>
                        <p className = "project-label">{project_title[3].label}</p>
                        <div className="languages-used">
                            <img className="used-tech" src="./images/html-used.png"></img>
                             <img className="used-tech" src="./images/css-used.png"></img>
                             <img className="used-tech" src="./images/js-used.png"></img>
                        </div>
                        <p className="project-description">{project_title[3].description}</p>
                        <div className="languages-used">
                            <a href={`${project_title[3].github_link}`} target="_blank">
                            <img src="./images/Github_white.png" className="icon" id="github-icon"></img>
                            </a>
                            <a href={`${project_title[3].play_link}`} target="_blank">
                            <img src="./images/play-button-white.png" className="icon" id="play-btn-icon"></img>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}