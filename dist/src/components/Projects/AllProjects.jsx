import React from "react";
import { useParams } from "react-router-dom";
import Portfolio from "../../assets/portfolio.png"; // Adjust the path as necessary
import TicTacToe from "../../assets/Tic-Tac-Toe.png"; // Adjust the path as necessary
import Calculator from "../../assets/Calculator.png"; // Adjust the path as necessary

const AllProjects = () => {

  const projectsData = [
    {
      id: 1,
      title: 'Portfolio Website',
      category: "react",
      description: 'A personal portfolio website to showcase my skills and projects.',
      image:  Portfolio ,
      link: 'https://sumit-kumar-singh-17.github.io/Portfolio/'
    },
    {
      id: 2,
      title: 'Tic-Tac-Toe Game',
      category: "react",
      description: 'An e-commerce website built with React and Node.js.',
      image: TicTacToe,
      link: 'https://sumit-kumar-singh-17.github.io/Tic-Tac-Toe/'
    },
    {
      id: 3,
      title: 'Calculator',
      category: "react",
      description: 'A blogging platform where users can create and share posts.',
      image: Calculator,
      link: 'https://sumit-kumar-singh-17.github.io/Calculator/'
    },
    {
      id: 4,
      title: 'Weather App',
      category: "javascript",
      description: 'A weather application that provides real-time weather updates.',
      image: 'https://sumit-kumar-singh-17.github.io/Calculator/',
      link: '/projects/weather-app'
    },
    {
      id: 5,
      title: 'Task Manager',
      category: "html-css",
      description: 'A task management application to help users organize their tasks.',
      image: 'https://sumit-kumar-singh-17.github.io/Calculator/',
      link: '/projects/task-manager'
    },
    {
      id: 6,
      title: 'Chat Application',
      category: "javascript",
      description: 'A real-time chat application built with WebSocket.',
      image: 'https://sumit-kumar-singh-17.github.io/Calculator/',
      link: '/projects/chat-app'
    },
  ];

    const { category } = useParams();

  // category lowercase se match karo
  const filteredProjects = category
    ? projectsData.filter(
        (project) =>
          project.category.toLowerCase() === category.toLowerCase()
      )
    : projectsData;
  return (
    <div>
      {/* Projects Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
           {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="border rounded-lg p-4 shadow hover:shadow-lg transition"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-3">{project.description}</p>
                <a
                  href={project.link}
                  className="text-purple-700 hover:underline"
                >
                  View Project
                </a>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full">No projects found in this category.</p>
          )}
        </div>
    </div>
  );
};

export default AllProjects;
