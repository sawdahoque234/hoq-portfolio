import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/HomePage/Home/Home";
import ContactUs from "./Components/Contact/Contact";
import ProjectsData from "./Components/Projects/ProjectsData";
import Blogs from "./Components/Blogs/Blogs";
import About from "./Components/About/About";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/projectsdata" element={<ProjectsData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
