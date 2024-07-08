import React from 'react';
import ReactDOM from 'react-dom/client';
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {  
    return (
        <div>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </div>
    )
}