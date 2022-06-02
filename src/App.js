import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/HomePage/Home/Home';
import ContactUs from './Components/Contact/Contact';
import ProjectsData from './Components/Projects/ProjectsData';
import Blogs from './Components/Blogs/Blogs';
import About from './Components/About/About';
function App() {
  return (
    <div className="App">
      
<Router>

     <Routes>
     <Route exact path="/" element={ <Home/> } />
     <Route  path="/contact" element={ <ContactUs/> } />
     <Route  path="/blogs" element={ <Blogs/> } />
     <Route  path="/about" element={ <About/> } />
     <Route  path="/projects" element={ <ProjectsData/> } />
       
     </Routes>
   </Router>
    </div>
  );
}

export default App;
