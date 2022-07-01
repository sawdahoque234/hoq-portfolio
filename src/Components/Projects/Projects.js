import React from "react";
import "./Projects.css";
import { FaGithub } from "react-icons/fa";

const Projects = (props) => {
  const { name, img, des, git, live } = props.project;
  console.log(props);

  return (
    <div className="col-md-4 col-12">
     <a href={live}>
     <div class="card mt-3 mb-5">
        <img class="card-img-top" data-aos="zoom-in"
            data-aos-duration="500" src={img} alt="" />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text" style={{fontWeight:'400'}}>{des}</p>
        </div>
        <div class="card-body  d-flex justify-content-center ">
          <a href={git} target="blank">
            <button type="button" class="btn btn-outline-primary">
              <FaGithub />
              <span></span> GitHub
            </button>
          </a>
          <a href={live} target="blank">
            <button type="button" class="btn btn-outline-warning">
              Live Site
            </button>
          </a>
        </div>
      </div>
     </a>
    </div>
  );
};

export default Projects;
