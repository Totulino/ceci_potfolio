import React, { useState } from "react";
import timelineData from "./components/timelineData";
import "./App.css";

const App = () => {
  const [projects, setProjects] = useState([
    { title: "OliVino", description: "Social Network App for the elderlies" },
    {
      title: "GeoLocation Tracker",
      description: "Simple bike geolocation tracker ",
    },
    {
      title: "Event simulator",
      description: "Random event generator + sign up ",
    },
  ]);

  return (
    <div className="portfolio">
      <header>
        <h1>Cecilia Catanzano</h1>
        <p>Full Stack Developer | Tech Support</p>
        <p>
          I love learning about new technologies and their application on
          real-world problems.
        </p>
      </header>

      <section className="experiences">
        {timelineData.map((experience, index) => (
          <div key={index} className="experience">
            <h2>{experience.title}</h2>
            <h3>{experience.position}</h3>
            <p>{experience.company}</p>
            <p>{experience.date}</p>
            <p>{experience.description}</p>
          </div>
        ))}
      </section>

      <section className="projects">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
