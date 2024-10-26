import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { Nav } from '../../components/Nav/Nav';
import "./Contact.css";
import Footer from '../../components/Footer/Footer';
import NearMeIcon from '@mui/icons-material/NearMe';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Contact = () => {
  const form = useRef();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .sendForm('service_thlwtpv', 'template_wc73u3c', form.current, '5wOPRuU_ceI_GGDIx')
      .then(
        () => {
          // Show success alert
          Swal.fire({
            title: 'Success!',
            text: 'Message sent successfully!',
            icon: 'success',
            confirmButtonText: 'OK',
          });
        },
        (error) => {
          // Show error alert
          console.error('Failed to send message:', error.text);
          Swal.fire({
            title: 'Error!',
            text: 'Failed to send message. Please try again later.',
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      );
  };

  return (
    <div id="contact">
      <div id='comp-oll' className='contact-whole-page-parent'>
        {/* <Nav /> */}
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
                <span><PhoneIcon /></span>
                <span>+91 9157491918</span>
              </div>
              <div className="ml-line">
                <span><MailIcon /></span>
                <span>info@shrayati.com</span>
              </div>
              <div className="ml-line">
                <span><NearMeIcon /></span>
                <span>Angle Bizz, 504, Khodal Chowk, Near Matuki Restaurant, Punit Nagar 80 ft. Main Road, Rajkot - 360004 (Guj) India.</span>
              </div>
            </div>
            <div className="cs-l-b">
              <a href="https://www.instagram.com/shrayati_ecovation/" target='_blank' rel="noopener noreferrer"><InstagramIcon /></a>
              <a href="https://www.youtube.com/@shrayatiecovation2355" target='_blank' rel="noopener noreferrer"><YouTubeIcon /></a>
              <a href="https://www.facebook.com/shrayatiecovationlimited" target='_blank' rel="noopener noreferrer"><FacebookIcon /></a>
            </div>
          </div>
          <div className="cs-r">
            <form onSubmit={handleSubmit} ref={form} className="contactus">
              <div className="f-raw">
                <div className="f-fld">
                  <h1>Full Name</h1>
                  <input type="text" name="user_full_name" placeholder='John Doe' required />
                </div>
                <div className="f-fld">
                  <h1>Company</h1>
                  <input type="text" name="user_company" placeholder='Shrayati Pvt. Ltd.' required />
                </div>
              </div>
              <div className="f-raw">
                <div className="f-fld">
                  <h1>Email</h1>
                  <input type="email" name="user_email" placeholder='johndoe@example.com' required />
                </div>
                <div className="f-fld">
                  <h1>Phone number</h1>
                  <input type="text" name="user_num" placeholder='+91 99999 99999' required />
                </div>
              </div>
              <div className="f-raw-s">
                <div className="f-fld">
                  <h1>Address</h1>
                  <input type="text" name="user_address" placeholder='Your Address' required />
                </div>
              </div>
              <div className="f-raw-s">
                <div className="f-fld">
                  <h1>Your Message</h1>
                  <textarea name="user_message" placeholder='Type your message here' required></textarea>
                </div>
              </div>
              <button type="submit" className="gr-btn">Submit</button>
            </form>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
