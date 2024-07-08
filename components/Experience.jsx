import React from 'react';
import ReactDOM from 'react-dom/client';


export default function Experience() {
    return (
        <section className="about">
             <div id="work-experience">
                 <h3 id="about-header">WHAT I'VE DONE SO FAR</h3>
                 <h1 id="about-title">Work Experience.</h1>
                 <div className="push-down"></div>
                 <div className="timeline">
                <div className="container left">
                    <div className="content">
                    <img src="./images/russell-logo.png" className="company-logo"/>
                    <h3 className="timeline-position">Web Developer & IT Support Specialist</h3>
                    <h4 className="timeline-location">Brantford, Ontario</h4>
                    <p className="timeline-date">May 2024 - May 2025</p>
                    <ul>
                        <li className="timeline-info">Developed a new website for the company using HTML, CSS, and JavaScript</li>
                        <li className="timeline-info">Maintained subsidary websites by  updating content and software on both the front end and back end </li>
                        <li className="timeline-info">Diagnosed Tier One and Tier Two incidents by using remote desktop software and technical skills</li>
                    </ul>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                    <img src="./images/prism-logo.png" className="company-logo"/>
                    <h3 className="timeline-position">Microsoft Software Instructor</h3>
                    <h4 className="timeline-location">Waterloo, Ontario</h4>
                    <p className="timeline-date">May 2023 - May 2024</p>
                    <ul>
                        <li className="timeline-info">Exhibited strong problem-solving skills in enhancing student engagement and knowledge, resulting in improved
course performance and increased participation in classroom discussions</li>
                        <li className="timeline-info">Teaching students how to use Power BI, Microsoft Excel and VBA effectively, making sure their ability is measured
by their proffiency to use these tools in their data analysis projects on their own
 </li>
                        <li className="hide"></li>
                    </ul>
                    </div>
                </div>
                <div className="container left">
                    <div className="content">
                    <img src="./images/lcs-logo.png" className="company-logo"/>
                    <h3 className="timeline-position">Technical Writer</h3>
                    <h4 className="timeline-location">Waterloo, Ontario</h4>
                    <p className="timeline-date">Jan 2023 - Present</p>
                    <ul>
                        <li className="timeline-info">Collaborated with team members to create engaging review sessions for 1st and 2nd year computer science
courses, resulting in the active involvement of 200 students</li>
                        <li className="hide"></li>
                        <li className="hide"></li>
                    </ul>
                    </div>
                </div>
                <div className="container right">
                    <div className="content">
                    <img src="./images/kognitive-logo.png" className="company-logo"/>
                    <h3 className="timeline-position">Sales Representative</h3>
                    <h4 className="timeline-location">Toronto, Ontario</h4>
                    <p className="timeline-date">May 2022 - Aug 2022</p>
                    <ul>
                        <li className="timeline-info">Analyzing Canadian Tire customer data and feedback to improve sales pitches, resulting in a 20% growth in
Triangle Mastercard sign-ups</li>
                        <li className="timeline-info">Thoroughly optimized my time to succesfully achieve high customer outreach effectiveness through strategetically
giving importance and scheduling interations, increasing engagement within assigned work hours
</li>
                        <li className="hide"></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            
        </section>
    )
}