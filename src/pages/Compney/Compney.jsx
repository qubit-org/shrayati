import React from "react";
import { Nav } from "../../components/Nav/Nav";
import "./Comp.css";
import Footer from "../../components/Footer/Footer";
import DownloadIcon from "@mui/icons-material/Download";

import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
const Compney = () => {
  return (
    <div id="comp-oll">
      {/* <Nav /> */}
      <section id="info">
        {/* <div id="comp-1">
          <h1>
            Investors
            &nbsp; Relations
          </h1>
        </div> */}
        <div id="comp-2" className="secc">
          <center>
            <h1>Investor’s overview</h1>
            <div className="ct-info">
              <p>
                At Shrayati, we are committed to creating a sustainable future
                through innovative, eco-friendly products. As a pioneer in the
                industry, we offer high-quality, biodegradable alternatives such
                as tissue papers and paper cups. Our focus on sustainability,
                quality, and customer satisfaction drives our growth and
                positions us as a trusted name in the market.
              </p>
              <p>
                Investing in Shrayati means supporting a company that is not
                only dedicated to financial success but also to making a
                positive impact on the environment. Join us in our mission to
                lead the market in sustainability and eco-friendly products.
              </p>
            </div>
          </center>
        </div>
        <div id="comp-3" className="secc">
          <center>
            <h1>Financial Reports</h1>
            <div className="report-grd">
              <div className="report-cd">
                <div className="dtt">2022-2023</div>
                <div className="wht-cdd">
                  <span>Shrayati marketing pvt. ltd</span>
                  <span id="down-ico">
                    <DownloadIcon id='ml-4' />
                  </span>
                </div>
              </div>
              <div className="report-cd">
                <div className="dtt">2021-2022</div>
                <div className="wht-cdd">
                  <span>Shrayati marketing pvt. ltd</span>
                  <span id="down-ico">
                    <DownloadIcon id='ml-4' />
                  </span>
                </div>{" "}
              </div>
              <div className="report-cd">
                <div className="dtt">2020-2021</div>
                <div className="wht-cdd">
                  <span>Shrayati marketing pvt. ltd</span>
                  <span id="down-ico">
                    <DownloadIcon id='ml-4' />
                  </span>
                </div>{" "}
              </div>
              <div className="report-cd">
                <div className="dtt">2019-2020</div>
                <div className="wht-cdd">
                  <span>Shrayati marketing pvt. ltd</span>
                  <span id="down-ico">
                    <DownloadIcon id='ml-4' />
                  </span>
                </div>{" "}
              </div>
              <div className="report-cd"></div>
            </div>
          </center>
        </div>
        <div id="comp-4" className="secc">
          <center>
            <h1>Press Releases</h1>
          </center>
          <div className="pr-grd">
            <div className="pr-cdd">
              <div className="pr-tp-oll">
                <img
                 src="https://i.imgur.com/91Tt67E.jpeg"
                 alt=""
                />
              </div>
              <div className="pr-bott">
                <h2>Shrayati launches new products in this season...</h2>
                <div className="pr-ft">
                  <span>30 Jun, 2024</span>
                  <span className="grn">2 min read</span>
                </div>
              </div>
            </div>
            <div className="pr-cdd">
              <div className="pr-tp-oll">
                <img
                 src="https://i.imgur.com/91Tt67E.jpeg"
                 alt=""
                />
              </div>
              <div className="pr-bott">
                <h2>Shrayati launches new products in this season...</h2>
                <div className="pr-ft">
                  <span>30 Jun, 2024</span>
                  <span className="grn">2 min read</span>
                </div>
              </div>
            </div>
            <div className="pr-cdd">
              <div className="pr-tp-oll">
                <img
                 src="https://i.imgur.com/91Tt67E.jpeg"
                 alt=""
                />
              </div>
              <div className="pr-bott">
                <h2>Shrayati launches new products in this season...</h2>
                <div className="pr-ft">
                  <span>30 Jun, 2024</span>
                  <span className="grn">2 min read</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="lrg-btn">Show All</div> */}
        </div>
        {/* <div id="comp-5" className="secc">
          <center>
            <h1> Testimonials </h1>
          </center>
          <div className="ic-grd">
            <div className="ic-cd">
              <h1>Corporate Office</h1>
              <div className="ic-data">

              <span>Rajkot</span>
              <span id="blc">
                <CallOutlinedIcon id='mr-4'  />
                +91 9157491918
              </span>
              <span>
                Angle Bizz, 504, Khodal Chowk, Near Matuki Restaurant, Punit
                Nagar 80 ft. Main Road, Rajkot - 360004 (Guj) India.
              </span>
              <span className="alc">
                <b>
                  See Map <NearMeOutlinedIcon id='ml-4' />
                </b>
              </span>
              </div>
            </div>
            <div className="ic-cd">
              <h1>Corporate Office</h1>
              <div className="ic-data">

              <span>Rajkot</span>
              <span id="blc">
                <CallOutlinedIcon id='mr-4'  />
                +91 9157491918
              </span>
              <span>
                Angle Bizz, 504, Khodal Chowk, Near Matuki Restaurant, Punit
                Nagar 80 ft. Main Road, Rajkot - 360004 (Guj) India.
              </span>
              <span className="alc">
                <b>
                  See Map <NearMeOutlinedIcon id='ml-4' />
                </b>
              </span>
              </div>
            </div>
            <div className="ic-cd">
              <h1>Corporate Office</h1>
              <div className="ic-data">

              <span>Rajkot</span>
              <span id="blc">
                <CallOutlinedIcon id='mr-4'  />
                +91 9157491918
              </span>
              <span>
                Angle Bizz, 504, Khodal Chowk, Near Matuki Restaurant, Punit
                Nagar 80 ft. Main Road, Rajkot - 360004 (Guj) India.
              </span>
              <span className="alc">
                <b>
                  See Map <NearMeOutlinedIcon id='ml-4' />
                </b>
              </span>
              </div>
            </div>
            <div className="ic-cd">
              <h1>Corporate Office</h1>
              <div className="ic-data">

              <span>Rajkot</span>
              <span id="blc">
                <CallOutlinedIcon id='mr-4'  />
                +91 9157491918
              </span>
              <span>
                Angle Bizz, 504, Khodal Chowk, Near Matuki Restaurant, Punit
                Nagar 80 ft. Main Road, Rajkot - 360004 (Guj) India.
              </span>
              <span className="alc">
                <b>
                  See Map <NearMeOutlinedIcon id='ml-4' />
                </b>
              </span>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default Compney;
