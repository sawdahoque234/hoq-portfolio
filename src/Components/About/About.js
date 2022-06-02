import React ,{useEffect} from 'react';
import Header from '../HomePage/Header/Header';
import './About.css'
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className="section">
            <Header></Header>
            <div className="row  rounded-3  m-2 py-3"   >
<div className='card1 col-md-5  col-sm-12 py-5 px-5  text-dark shadow-lg ' data-aos="fade-right" data-aos-duration="1500" style={{  textAlign:'left',lineHeight:'25px',borderRadius:'20px',marginLeft:'40px',marginBottom:'50px'}}>
<p>
Hello! I am Sawda Hoque student of Computer Science & Engineering.I am a Front-End Web Developer.As a technology enthusiasts, i am always looking for new challenges where i can apply my skills and knowledge to the fullest extent possible.
</p>
<h3>Skill</h3>
<p>
<span className='text-primary'>Programming Language:</span> JavaScript(ES6) <br />
<span className='text-primary'>Front End:</span> React, HTML5, CSS3, Bootstrap5,Tailwind CSS, Material-UI <br />
<span className='text-primary'>Familiar With:</span>Redux, SASS, Typescript, NextJs, JWT <br />
<span className='text-primary'>Tools:</span> Vs Code, Git, Heroku, Netlify, Firebase, Webpack
</p>
 
</div>
{/* education.... */}

<div className="card1 col-md-6  text-dark col-sm-12 py-"data-aos="fade-left" data-aos-duration="1500" style={{marginTop:'100px',marginLeft:'40px' ,borderRadius:'20px'}}>
<h1 className='text-dark topbar ul li text'>Education</h1>
<h5 >B.Sc in Computer Science and Engineering. </h5>
<em>Graduated in 2022.</em>
<br />
<h5 className='fw-bold'>Port City International University.</h5><br />
<h1 className='text-dark topbar ul li text'>Training</h1>
<h5>Complete Web Development With Jhankar Mahbub. </h5>
    <h6 className='fw-bold'>Programming Hero -
<a href="https://drive.google.com/file/d/1JtBqs6OTxYpyLAjgThyHcCQyly59vTG5/view?usp=sharing">
<em>Certificate.</em>
</a>
</h6>

</div>

 </div>
     </div>
    );
};

export default About;