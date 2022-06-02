import enursery from "../../images/p1.png";
import scootie from "../../images/s1.png";
import travl from "../../images/t1.png";
import dental from "../../images/d1.png";
import dance from "../../images/dan1.png";
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
      name: "Scootie Shop",
      img: scootie,
      des:
        "A MERN based web app using React, Node.js, Mongodb,Material Ui,Firebase, Heroku",
      git: "https://github.com/sawdahoque234/scootie-shop-client-side",
      live: "https://my-scootie-shop.web.app/home",
    },
    {
      name: "HoQ Travel",
      img: travl,
      des:
        "HoQ Travel is a travel management web app using React, React-bootstrap,Nodejs,Mongodb,Firebase",
      git: "https://github.com/sawdahoque234/travel-agent-client-side",
      live: "https://hoqtravel-agent.web.app/home",
    },
    {
      name: "Dental Care",
      img: dental,
      des:
        "This is dental care like e-commerce website using React, Node.js, Mongodb, React Bootstrap, netlify",
      git: "https://github.com/sawdahoque234/Dental-care-website",
      live: "https://confident-mclean-a0b196.netlify.app/home",
    },
    {
      name: "Dance Studio",
      img: dance,
      des: "This is an online addmissin app using React,Bootstrap,Netlify",
      git: "https://github.com/sawdahoque234/my-dance-school-website",
      live: "https://agitated-bhaskara-e98250.netlify.app/",
    },
    {
      name: "Blog App",
      img: blog,
      des: "This is a blog application using react,redux-toolkit,jwt..",
      git: "https://github.com/sawdahoque234/blog-site-client",
      live: "https://neon-dasik-7fc6f5.netlify.app/",
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
