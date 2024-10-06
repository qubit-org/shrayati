import React from 'react'
import { Nav } from '../../components/Nav/Nav'
import "./Contact.css"
import Footer from '../../components/Footer/Footer';
import NearMeIcon from '@mui/icons-material/NearMe';import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';



const Contact = () => {
  return (
    <div id="contact">

    <div id='comp-oll' className='contact-whole-page-parent'>
      {/* <Nav/> */}
      <section id='contact-sec-ol'>
       <div className="cs-l">
        <div className="cs-l-t">
            <h1>Contact Information</h1>
            <h2>
                Need assistance or have a question? <br /> We're here to help!
            </h2>
        </div>
        <div className="cs-l-m">
            <div className="ml-line">
                <span>
                    <PhoneIcon/>
                </span>
                <span>+91 9157491918</span>
            </div>
            <div className="ml-line">
                <span>
                    <MailIcon/>
                </span>
                <span>info@shrayati.com</span>
            </div>
            <div className="ml-line">
                <span>
                    <NearMeIcon/>
                </span>
                <span>Angle Bizz, 504, Khodal Chowk, Near Matuki Restaurant, Punit Nagar 80 ft. Main Road, Rajkot - 360004 (Guj) India.</span>
            </div>
        </div>
        <div className="cs-l-b">
            <a href="#">
                <XIcon/>
            </a>
            <a href="#">
                <InstagramIcon/>
            </a>
        </div>
                <small></small>
                <big></big>
        
       </div>
       <div className="cs-r">
        <form action="">
            <div className="f-raw">
                <div className="f-fld">
                    <h1>
                        Full Name
                    </h1>
                    <input type="text" placeholder='John Doe' />
                </div>
                <div className="f-fld">
                    <h1>
                      Company
                    </h1>
                    <input type="text" placeholder='Shrayati pvt. ltd.' />
                </div>
            </div>
            <div className="f-raw">
                <div className="f-fld">
                    <h1>
                       Email
                    </h1>
                    <input type="email" placeholder='johndoe@example.com' />
                </div>
                <div className="f-fld">
                    <h1>
                      Phone number
                    </h1>
                    <input type="text" placeholder='+91 99999 99999' />
                </div>
            </div>
            <div className="f-raw-s">
                <div className="f-fld">
                    <h1>
                   Address
                    </h1>
                    <input type="text" placeholder='' />
                </div>
                
            </div>
            <div className="f-raw-s">
                <div className="f-fld">
                    <h1>
                      Your Message
                    </h1>
                    <textarea name="" id="" placeholder='Type your message here'></textarea>
                </div>

            </div>

    <button className="gr-btn">
Submit
    </button>
            {/* <div className="f-raw"></div> */}
        </form>
       </div>
       
       
        {/* <div id="comp-1">
            <h1>
                Investors 
                &nbsp; Relations
            </h1>
        </div> */}
        {/* <div id="comp-1"></div> */}
      </section>
      <Footer/>
    </div>
    </div>
  )
}

export default Contact
