import React from 'react';
import hook from '../../images/hk.jpg';
import css from '../../images/cs.jpg';
import jwt from '../../images/jt.png';
import AllBlogs from './AllBlogs';
import Header from '../HomePage/Header/Header';

const Blogs = () => {
    const blogs = [
        {
            title: "Learn Something on React JSX and Hooks",
            img: hook,
            link: "https://dev.to/sawdahoque234/learn-something-on-react-jsx-and-hooks-57pn"
        },
        {
            title: "Exploring some CSS Features",
            img: css,
            link: "https://dev.to/sawdahoque234/know-about-css-1kd1"
        },
        {
            title: "JWT,Moongose,Nodejs,Express",
            img: jwt,
            link: "https://dev.to/sawdahoque234/basic-on-jwtmongoosenodeexpress-18p1"
        }
    ]
    return (
        <div className="section">
            <Header></Header>
            <div className="container">
            <h1 className="text-center font-details-b pb-4 ">Blogs</h1>
                <div className="row text-center "  data-aos="fade-up" data-aos-duration="1000">
                    {
                        blogs.map(blog => <AllBlogs blog={blog}></AllBlogs>)
                    }

                </div>

            </div>
            
        </div>
    );
};

export default Blogs;