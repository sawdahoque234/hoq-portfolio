import enursery from "../../images/p1.png";
import blog from "../../images/blog.png";
import travel from "../../images/t1.png";
import gym from "../../images/g.png";
import z from "../../images/z.png";
import slack from "../../images/slack.png";
import draw from "../../images/dr.png";
import salon from "../../images/salon.png";
import car from "../../images/car.png";
import gpt from "../../images/gpt.png";
import mcq from "../../images/mcq.png";
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
      name: "AutoImage",
      img: car,
      des: "A MERN based web app using React, Node.js, Mongodb, Material-UI,Firebase, Heroku",
      git: "https://github.com/sawdahoque234/carshop",
      live: "https://carshop-8424b.web.app/",
    },

    {
      name: "E-Nursery",
      img: enursery,
      des: "A MERN based web app using React, Node.js, Mongodb, Material-UI,Firebase, Heroku",
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
      name: "HoQ Travel",
      img: travel,
      des: "This is a MERN based project",
      git: "https://github.com/sawdahoque234/travel-agent-client-side",
      live: "https://hoqtravel-agent.web.app/home",
    },

    {
      name: "slack",
      img: slack,
      des: "This is a single Homepage  using React and Styled Components",
      git: "https://github.com/sawdahoque234/singlehomepage",
      live: "https://ornate-starburst-0d9314.netlify.app/",
    },
    {
      name: "GPT-3",
      img: gpt,
      des: "This is a Modern UI/UX Project using react.",
      git: "https://github.com/sawdahoque234/gpt-3",
      live: "https://scintillating-cat-bda767.netlify.app/",
    },
    {
      name: "DrawOwn",
      img: draw,
      des: "This is a simple Drawing app useing React,Firebase auth",
      git: "https://github.com/sawdahoque234/drawingapp",
      live: "https://aesthetic-crisp-bf9b8b.netlify.app/",
    },
    {
      name: "MCQ App",
      img: mcq,
      des: "This is a simple MCQ app using HTML,CSS,Javascript",
      git: "https://github.com/sawdahoque234/simple-MCQ-App",
      live: "https://sawda-hoque-mcq-app.netlify.app/",
    },
    // {
    //   name: "Some React Project",
    //   img: react,
    //   des: "This is a collections of some react projects.",
    //   git: "https://github.com/sawdahoque234/allreactproject",
    //   live: "https://sawda-reactjs-project.netlify.app/",
    // },
    {
      name: "Book Store",
      img: book,
      des: "This is a HTML,CSS,JS landing page website.",
      git: "https://github.com/sawdahoque234/online-book-store",
      live: "https://sawdahoque234.github.io/online-book-store/",
    },
    {
      name: "BeStrong",
      img: gym,
      des: "This is a HTML,CSS,JS landing page website.",
      git: "https://github.com/sawdahoque234/gym-website",
      live: "https://sawdahoque234.github.io/gym-website/",
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
            <Projects project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectData;
