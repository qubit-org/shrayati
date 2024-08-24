import React from 'react'
import NearMeIcon from '@mui/icons-material/NearMe';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import "./Footer.css"
const Footer = () => {
  return (
    <footer>
      <div className="ftr-l">
        <div className="lgg">
               <img src="./imgs/prod/logo.png" alt="" />
            
        </div>
        <p>
            "Eco-Friendly Shopping Has Never Been Easier" As a pioneer of Eco-Friendly Products in India, we at Shrayati do business differently, putting people and the planet first."
        </p>
        <div className="cc-ifo">
            <p>
                <NearMeIcon/>
             
         <span>
            
                   Shapar - 360024, Rajkot (Guj) India.
            </span>
            </p>
            <p>
             <CallIcon/>
         <span>
            
                +91 91574 91918
            </span>
            </p>
            <p>
             
             <MailIcon/>
         <span>
            
                info@shrayati.com
            </span>
            </p>
        </div>
      </div>
      <div className="ftr-r">
        <div className="lks-cont">
            <h1>
                Links
            </h1>
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Support</a>
        </div>
        <div className="lks-cont">
            <h1>
                Shop
            </h1>
            <a href="#">Paper Products</a>
            <a href="#">Oral care</a>
            <a href="#">Women's accessories</a>
            <a href="#">Wooden Tableware</a>
            <a href="#">Plant's fooda </a>
            <a href="#"></a>
        </div>
        <div className="lks-cont">
            <h1>
               Legal
            </h1>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Return & Refund Policy</a>
        </div>
        <div className="lks-cont">
            <h1>
                Company
            </h1>
              <a href="#">About Us</a>
              <a href="#">Newsletter</a>
              <a href="#">Investor relations</a>
              <a href="#">blogs</a>
              <a href="#">contact us</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
