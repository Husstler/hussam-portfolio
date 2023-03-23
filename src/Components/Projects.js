import React from 'react';
import "./styles/projects.css";
import WeatherPhoto from '../assets/WeatherApp.PNG';
import CookingPhoto from '../assets/VirtualCookingAssistant.PNG'
import ChatBotSC from '../assets/ChatBot.PNG'
import ChickenLogo from '../assets/logo.png'


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
    imageSrc: CookingPhoto,
    title: 'Virtual Cooking Assistant',
    description: 'I created a virtual cooking assistant that helps users find new recipies through the mealdb api. The ingredients component is incomplete but the main functionality is finding food recipes using ingredients that you check.',
    url: "https://cooking-assistant.vercel.app/"
  }

 ,
  {
    id: 3,
    imageSrc: ChatBotSC,
    title: 'ChatBot AI',
    description: 'I deployed a backend server to host this AI, the backend server was created through a combination of node and express. The final product will be an AI that answers personal quesitons about me',
    url: "https://hussamtahir.com/chatbot"
  },
];

const professionalProjects = [
  {
    id: 4,
    imageSrc: ChickenLogo,
    title: 'Chicken 2 Go',
    description: 'I am the leading developer for this capstone project, were currently designing a restaurant system that offers several interfaces for customers, managers and drivers',
    url: "https://chicken2go.onrender.com/"
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