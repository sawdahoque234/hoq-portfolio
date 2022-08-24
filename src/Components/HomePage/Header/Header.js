import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <Link
            class="navbar-brand text-white"
            style={{ fontFamily: "Updock" }}
            to="/"
          >
            SawdaHoQ
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse topbar" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link class="nav-link mr-2 text-white" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link mr-2 text-white" to="/about">
                  About
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link mr-2 text-white" to="/projectsdata">
                  Projects
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link mr-2 text-white" to="/blogs">
                  Blogs
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link mr-2 text-white" to="/contact">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
