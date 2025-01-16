import React from "react";
import NearMeIcon from "@mui/icons-material/NearMe";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="ftr-l">
        <div className="lgg">
          <img src="./imgs/prod/logo.png" alt="" />
        </div>
        <p>
          "Eco-Friendly Shopping Has Never Been Easier" As a pioneer of
          Eco-Friendly Products in India, we at Shrayati do business
          differently, putting people and the planet first."
        </p>
        <div className="cc-ifo">
          <a href="https://maps.app.goo.gl/8w8JQQSdcApkqS5c8" target="_blank">
          <p>
            <NearMeIcon />

            <span>
              Plot No. 5, Shrayati Ecovation Limited, Mahavir Industrial Area,
              Shapar, Rajkot, Gujarat, 360024
            </span>
          </p>
          </a>
           <a href={`tel:91574 91918`}>

          <p>
            <CallIcon />
            <span>+91 91574 91918</span>
          </p>
           </a>
          <a href={`mailto:acc.shrayati@gmail.com`}>
            <p>
              <MailIcon />
              <span>info@shrayati.com</span>
            </p>
          </a>
        </div>
      </div>
      <div className="ftr-r">
        <div className="lks-cont">
          <h1>Links</h1>
          <a href="#app-ol">Home</a>
          <a href="https://darkgray-donkey-340304.hostingersite.com/shop/">
            Products
          </a>
          <a href="#contact">Support</a>
        </div>
        <div className="lks-cont">
          <h1>Shop</h1>
          <a href="https://darkgray-donkey-340304.hostingersite.com/shop/?filter_cat=318">
            Paper Products
          </a>
          <a href="https://darkgray-donkey-340304.hostingersite.com/shop/?filter_cat=326">
            Towels
          </a>
          <a href="https://darkgray-donkey-340304.hostingersite.com/shop/?filter_cat=322">
            Plates
          </a>
          <a href="https://darkgray-donkey-340304.hostingersite.com/shop/?filter_cat=325">
            Cutlery
          </a>
        </div>
        <div className="lks-cont">
          <h1>Legal</h1>
          <a href="https://darkgray-donkey-340304.hostingersite.com/terms-and-conditions/">
            Terms & Conditions
          </a>
          <a href="https://darkgray-donkey-340304.hostingersite.com/privacy-policy/">
            Privacy Policy
          </a>
          <a href="https://darkgray-donkey-340304.hostingersite.com/refund-and-returns-policy/">
            Return & Refund Policy
          </a>
        </div>
        <div className="lks-cont">
          <h1>Company</h1>
          <a href="#about">About Us</a>
          <a href="#comp-3">Newsletter</a>
          <a href="#comp-4">blogs</a>
          <a href="#comp-5">Investor relations</a>
          <a href="#contact">contact us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
