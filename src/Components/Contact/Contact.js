import React,{useRef} from 'react';
import emailjs from '@emailjs/browser';
import { RiMapPinUserFill } from "react-icons/ri";
import { IoIosPhonePortrait } from "react-icons/io"
import { AiOutlineMail } from "react-icons/ai";
import Header from "../HomePage/Header/Header";

export default function ContactUs() {

    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_944t6zr', 'template_bcdqnyl', form.current, 'PEZwBmnAoXdmaO0gv')
        .then((result) => {
          alert('Message sent successfully!');
        }, (error) => {
          alert(error.message);
        });
      e.target.reset();
    };
    return(
        <div className="section">
            <Header></Header>
            <div className="container">
                <h3 className="text-center py-2">Get In Touch</h3>
                <div className="row">
<div className="col-md-5 col-sm-12" data-aos="fade-right"
     data-aos-duration="1000">
<div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <h5 className="text-uppercase">Address <RiMapPinUserFill/></h5>
                            <p>Anderkilla, Chittagong, Bangladesh</p>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                        <h5 className="text-uppercase">Phone <IoIosPhonePortrait/></h5>
                            <p>01924930229</p>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                        <h5 className="text-uppercase">Email <AiOutlineMail/></h5>
                            <p>sawda6066@gmail.com</p>
                        </div>
                       
                        
                    </div>

</div>
<div className="col-md-7 col-sm-12" data-aos="fade-left"  data-aos-duration="1000">
<form  ref={form} onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" required placeholder="Name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" required placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="20" required rows="4" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-outline-secondary" value="Send Message"></input>
                        </div>
                    </div>
                </form>
</div>
                </div>
           
            </div>
        </div>
    )
}