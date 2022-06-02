import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../../../images/tas2.png";
import Header from "../Header/Header";
import "./Home.css";
import { Link } from "react-router-dom";
import { Typewriter } from 'react-simple-typewriter'



const Home = () => {

  return (
    <div>
    
      <section className="section">
     
        
        <Header></Header>

        <div className=" main d-flex align-items-center justify-content-center">
        <div className="home-body d-flex align-items-center justify-content-center">
          <div className="mt-5">
            <div className="profile-img">
              <img
                
                className="img-fluid"
                src={profile}
                alt=""
              />
            </div>

            <div className="intro">
              <h1 className="text-white" >
                Sawda Hoque Tasfia
              </h1>
              <p>I'm <span style={{ fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['a Front-End Web Developer ']}
                cursor
                cursorStyle='_'
                typeSpeed={50}
              />
            </span></p>
            </div>
            <div className="py-4">
              <Link to="/contact">
            <button type="button" class="btn btn-outline-success">Hire Me</button>

              </Link>
              <a href='https://drive.google.com/drive/folders/1CNIYXYtHqD-cbRmgjG5y896godZ_vAFo?usp=sharing'>
           <button type="button" className="btn btn-outline-success px-1 mx-2 ">
             Resume
</button>
              </a>
            </div>
            <div className=" d-flex justify-content-center ">
              <div className="icons" >
                <a href="https://github.com/sawdahoque234" target="blank">
                  <h2>
                    {" "}
                    <FaGithub />
                  </h2>{" "}
                </a>
                <a
                  href="https://www.facebook.com/sawda.hoque.1"
                  target="blank"
                >
                  <h2>
                    <FaFacebook />
                  </h2>
                </a>
                <a
                  href="https://www.linkedin.com/in/sawdahoque/"
                  target="blank"
                >
                  <h2>
                    <FaLinkedin />
                  </h2>
                </a>

                

              </div>
            </div>
          </div>
        </div>
        </div>
        
      </section>
    </div>
  );
};

export default Home;
