import React from 'react';
import "./styles/projects.css";
import WeatherPhoto from '../assets/WeatherApp.PNG';

const personalProjects = [
  {
    id: 1,
    imageSrc: WeatherPhoto,
    title: 'Weather Application',
    description: 'This weather application was my first ever project created using purely NodeJS and html takes your input and cross-references it with a json file containing all the cities in the world. It then prints out the matching cities weathers through an API call.',
    url: "https://weather-application.herokuapp.com/"
  },
  {
    id: 2,
    imageSrc: 'project-2.jpg',
    title: 'Virtual Cooking Assistant',
    description: 'I created a virtual cooking assistant that helps users find new recipies through the mealdb api. The ingredients component is incomplete but the main functionality is finding food recipes using ingredients that you check.',
    url: "https://cooking-assistant.vercel.app/"
  }

  /*,
  {
    id: 3,
    imageSrc: 'project-3.jpg',
    title: 'Personal Project 3',
    description: 'This is a short description of personal project 3.',
    url: "https://example.com/"
  },
  */
];

const professionalProjects = [
  {
    id: 4,
    imageSrc: 'To be deployed',
    title: 'TBD',
    description: 'TBD',
    url: "https://example.com/"
  },
  /*
  {
    id: 5,
    imageSrc: 'project-5.jpg',
    title: 'Professional Project 2',
    description: 'This is a short description of professional project 2.',
    url: "https://example.com/"
  },
  {
    id: 6,
    imageSrc: 'project-6.jpg',
    title: 'Professional Project 3',
    description: 'This is a short description of professional project 3.',
    url: "https://example.com/"
  },
  */
];

const Projects = () => {
  const handleProjectClick = (project) => {
    // Handle the click event here with the corresponding project object
    window.location.href = project.url;
  };

  return (
    <div>
      <h2>Personal Projects</h2>
      <div className="projects-container">
        {personalProjects.map((project) => (
          <div key={project.id} className="project-card" onClick={() => handleProjectClick(project)}>
            <img src={project.imageSrc} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>Professional Projects</h2>
      <div className="projects-container">
        {professionalProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.imageSrc} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;