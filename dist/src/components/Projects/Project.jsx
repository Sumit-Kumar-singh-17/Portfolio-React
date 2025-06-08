// import { NavLink, useParams } from 'react-router-dom';

// const Project = () => {
//   const projectsData = [
//     {
//       id: 1,
//       title: 'Portfolio Website',
//       category: "react",
//       description: 'A personal portfolio website to showcase my skills and projects.',
//       image: 'https://via.placeholder.com/150',
//       link: '/projects/portfolio'
//     },
//     {
//       id: 2,
//       title: 'E-commerce Website',
//       category: "react",
//       description: 'An e-commerce website built with React and Node.js.',
//       image: 'https://via.placeholder.com/150',
//       link: '/projects/ecommerce'
//     },
//     {
//       id: 3,
//       title: 'Blog Platform',
//       category: "react",
//       description: 'A blogging platform where users can create and share posts.',
//       image: 'https://via.placeholder.com/150',
//       link: '/projects/blog-platform'
//     },
//     {
//       id: 4,
//       title: 'Weather App',
//       category: "javascript",
//       description: 'A weather application that provides real-time weather updates.',
//       image: 'https://via.placeholder.com/150',
//       link: '/projects/weather-app'
//     },
//     {
//       id: 5,
//       title: 'Task Manager',
//       category: "html-css",
//       description: 'A task management application to help users organize their tasks.',
//       image: 'https://via.placeholder.com/150',
//       link: '/projects/task-manager'
//     },
//     {
//       id: 6,
//       title: 'Chat Application',
//       category: "javascript",
//       description: 'A real-time chat application built with WebSocket.',
//       image: 'https://via.placeholder.com/150',
//       link: '/projects/chat-app'
//     },
//   ];

//   const { category } = useParams();
//   console.log("Category from URL:", category);

//   // category lowercase se match karo
//   const filteredProjects = category
//     ? projectsData.filter(
//         (project) =>
//           project.category.toLowerCase() === category.toLowerCase()
//       )
//     : projectsData;

//   return (
//     <section id='project'>
//       <div>
//         <h2 className='text-[4rem] text-center'>My Projects</h2>
//         <div className='flex w-full justify-center items-center mt-10 mb-10 border-y'>
//           <NavLink
//             to='/projects'
//             end
//             className={({ isActive }) =>
//               isActive
//                 ? 'p-[20px] border flex flex-wrap justify-center items-center bg-purple-500 text-white'
//                 : 'p-[20px] border flex flex-wrap justify-center items-center'
//             }
//           >
//             All Projects
//           </NavLink>
//           <NavLink
//             to='/projects/html-css'
//             className={({ isActive }) =>
//               isActive
//                 ? 'p-[20px] border flex flex-wrap justify-center items-center bg-purple-500 text-white'
//                 : 'p-[20px] border flex flex-wrap justify-center items-center'
//             }
//           >
//             HTML & CSS
//           </NavLink>
//           <NavLink
//             to='/projects/javascript'
//             className={({ isActive }) =>
//               isActive
//                 ? 'p-[20px] border flex flex-wrap justify-center items-center bg-purple-500 text-white'
//                 : 'p-[20px] border flex flex-wrap justify-center items-center'
//             }
//           >
//             JavaScript
//           </NavLink>
//           <NavLink
//             to='/projects/react'
//             className={({ isActive }) =>
//               isActive
//                 ? 'p-[20px] border flex flex-wrap justify-center items-center bg-purple-500 text-white'
//                 : 'p-[20px] border flex flex-wrap justify-center items-center'
//             }
//           >
//             React
//           </NavLink>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
//           {filteredProjects.length > 0 ? (
//             filteredProjects.map((project) => (
//               <div
//                 key={project.id}
//                 className="border rounded-lg p-4 shadow hover:shadow-lg transition"
//               >
//                 <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//                 <p className="text-gray-700 mb-3">{project.description}</p>
//                 <a
//                   href={project.link}
//                   className="text-purple-700 hover:underline"
//                 >
//                   View Project
//                 </a>
//               </div>
//             ))
//           ) : (
//             <p className="text-center col-span-full">No projects found in this category.</p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Project;



import React from "react";
import { NavLink, Routes, Route, Navigate } from "react-router-dom";
import AllProjects from "./AllProjects";
import HtmlCssProjects from "./HtmlCssProjects";
import ReactProjects from "./ReactProjects";
import JavaScriptProjects from "./JavaScriptProjects";

const Project = () => {
  return (
    <section id="project">
      <h2 className='text-[4rem] text-center'>My Projects</h2>
      <div className='flex w-full justify-center items-center mt-10 mb-10 border-y'>
      <nav className="flex justify-center items-center ">
        <NavLink to="all" className={({ isActive }) => isActive ? 'p-[20px] border flex flex-wrap justify-center items-center bg-purple-500 text-white' : 'p-[20px] border flex flex-wrap justify-center items-center'}>All</NavLink>
        <NavLink to="html-css" className={({ isActive }) => isActive ? 'p-[20px] border flex flex-wrap justify-center items-center bg-purple-500 text-white' : 'p-[20px] border flex flex-wrap justify-center items-center'}>HTML & CSS</NavLink>
        <NavLink to="react" className={({ isActive }) => isActive ? 'p-[20px] border flex flex-wrap justify-center items-center bg-purple-500 text-white' : 'p-[20px] border flex flex-wrap justify-center items-center'}>React</NavLink>
        <NavLink to="javascript" className={({ isActive }) => isActive ? 'p-[20px] border flex flex-wrap justify-center items-center bg-purple-500 text-white' : 'p-[20px] border flex flex-wrap justify-center items-center'}>JavaScript</NavLink>
      </nav>
      </div>
      <div className="project-content">
        <Routes>
          {/* Default route */}
          <Route index element={<Navigate to="all" />} />
          <Route path="all" element={<AllProjects />} />
          <Route path="html-css" element={<HtmlCssProjects />} />
          <Route path="react" element={<ReactProjects />} />
          <Route path="javascript" element={<JavaScriptProjects />} />
        </Routes>
      </div>
    </section>
  );
};

export default Project;

