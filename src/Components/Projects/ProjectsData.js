import enursery from "../../images/p1.png";
import react from "../../images/react.png";
import blog from "../../images/blog.png";
import travel from "../../images/t1.png";
import d from "../../images/d1.png";
import z from "../../images/z.png";
import draw from "../../images/dr.png";
import salon from "../../images/salon.png";
import car from "../../images/car.png";
import book from "../../images/bookstore1.png";

import React from "react";
import Projects from "./Projects";
import Header from "../HomePage/Header/Header";

const ProjectData = () => {
  const projects = [
    {
      name: "HomeLand",
      img: z,
      des: "A MERN based web app using React, Express.js, Mongodb,TailwindCss,Firebase auth",
      git: "https://github.com/sawdahoque234/homeland",
      live: "https://homelandproject-bb634.web.app/",
    },
    {
      name: "Salon22",
      img: salon,
      des: "A MERN based application for men's.Using react.js,firebase auth,Material ui.",
      git: "https://github.com/sawdahoque234/salon22",
      live: "https://salon22-c16e1.web.app/",
    },

    {
      name: "E-Nursery",
      img: enursery,
      des: "A MERN based web app using React, Node.js, Mongodb, Material-UI,Firebase, Heroku",
      git: "https://github.com/sawdahoque234/enursery-website-client",
      live: "https://my-enursery.web.app/home",
    },
    {
      name: "AutoImage",
      img: car,
      des: "A MERN based web app using React, Node.js, Mongodb, Material-UI,Firebase, Heroku",
      git: "https://github.com/sawdahoque234/carshop",
      live: "https://carshop-8424b.web.app/",
    },
    {
      name: "Blog App",
      img: blog,
      des: "This is a blog application using react,redux-toolkit,jwt,mongoose,nodejs.",
      git: "https://github.com/sawdahoque234/blog-site-client",
      live: "https://neon-dasik-7fc6f5.netlify.app/",
    },
    {
      name: "HoQ Travel",
      img: travel,
      des: "This is a MERN based project",
      git: "https://github.com/sawdahoque234/travel-agent-client-side",
      live: "https://hoqtravel-agent.web.app/home",
    },
    {
      name: "Dental Care",
      img: d,
      des: "This is a MERN based project",
      git: "https://github.com/sawdahoque234/Dental-care-website",
      live: "https://confident-mclean-a0b196.netlify.app/",
    },
    {
      name: "DrawOwn",
      img: draw,
      des: "This is a simple Drawing app useing React,Firebase auth",
      git: "https://github.com/sawdahoque234/drawingapp",
      live: "https://aesthetic-crisp-bf9b8b.netlify.app/",
    },
    {
      name: "Book Store",
      img: book,
      des: "This is a HTML,CSS,JS landing page website.",
      git: "https://github.com/sawdahoque234/online-book-store",
      live: "https://sawdahoque234.github.io/online-book-store/",
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
      <div className="container">
        <h1
          className="text-center font-details-b pb-4"
          style={{ fontFamily: "Updock" }}
        >
          Projects
        </h1>
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
