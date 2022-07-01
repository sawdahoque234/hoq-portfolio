import enursery from "../../images/p1.png";
import react from "../../images/react.png";
import blog from "../../images/blog.png";


import React from "react";
import Projects from "./Projects";
import Header from "../HomePage/Header/Header";

const ProjectData = () => {
 
  const projects = [
    {
      name: "E-Nursery",
      img: enursery,
      des:
        "A MERN based web app using React, Node.js, Mongodb, Material-UI,Firebase, Heroku",
      git: "https://github.com/sawdahoque234/enursery-website-client",
      live: "https://my-enursery.web.app/home",
    },
    {
      name: "Blog App",
      img: blog,
      des: "This is a blog application using react,redux-toolkit,jwt,mongoose,nodejs.",
      git: "https://github.com/sawdahoque234/blog-site-client",
      live: "https://neon-dasik-7fc6f5.netlify.app/",
    },
    {
      name: "Some React Project",
      img: react,
      des: "This is a collections of some react projects.",
      git: "https://github.com/sawdahoque234/allreactproject",
      live: "https://sawda-reactjs-project.netlify.app/",
    },
  ];
  return (
    <div className="section">
     
      <Header></Header>
      <div className="container" >
        <h1 className="text-center font-details-b pb-4" style={{fontFamily: 'Updock'}}>Projects</h1>
        <div className="row " data-aos="fade-right" data-aos-duration="1500">
          {projects.map((project) => (
            <Projects project={project}></Projects>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectData;
