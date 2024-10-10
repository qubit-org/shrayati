import React, { useState, useEffect } from 'react';
import { Nav } from '../../components/Nav/Nav';
import './About.css';
import Spline from '@splinetool/react-spline';
import CoreValues from './CoreValues';
import Story from './Story';
import NumberCards from './NumberCards';
import Footer from '../../components/Footer/Footer';

const About = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderSplineScene = () => {
    if (screenSize < 500) {
      return <Spline scene="https://prod.spline.design/5DFHRVexYCP1Nj24/scene.splinecode" />;
    } else if (screenSize < 900) {
      return <Spline scene="https://prod.spline.design/5HWQHMtIoeAMW6W8/scene.splinecode" />;
    } else {
      return <Spline scene="https://prod.spline.design/asFuTIuJJU7WsTGZ/scene.splinecode" />;
    }
  };

  return (
    <section id='about'>
      <div id="ab-2">
        <div className="ab-data">
          <div className="t-title">
            About us
          </div>
          <p>
            Shrayati is dedicated to providing eco-friendly products that help reduce environmental impact and promote sustainability. Shrayati aims to meet the everyday needs of consumers while encouraging environmentally conscious choices. Our commitment to quality, innovation, and customer satisfaction drives us to continuously improve and expand our product offerings, ensuring that we contribute positively to a greener, more sustainable world.
          </p>
        </div>
        <div className="chain">
          <div id="overlay"></div>
          {renderSplineScene()}
        </div>
        <div id="miss">
          <div className="ms-dt magicpattern">
            <div className="t-title">
            Our Vision & Mission
            </div>
            <p>
              <b>Vision:</b> Be the market leader in providing eco-friendly products that promote sustainability and environmental responsibility, fostering a greener future for generations to come.
            </p>
            <p>
              <b>Mission:</b> Provide high-quality, eco-friendly products like tissue papers and paper cups that meet customer needs while minimizing environmental impact. Dedicate to sustainability, innovation, and exceptional service, inspiring customers to make environmentally conscious choices.
            </p>
          </div>
          <div className="ms-img">
            <Spline scene="https://prod.spline.design/Y-LBSXfyEPiezYhG/scene.splinecode" />
          </div>
        </div>
        {/* <div className="core-v-sec">
          <CoreValues />
        </div> */}
        <Story />
        <CoreValues />
        <NumberCards />
        {/* <Footer /> */}
      </div>
    </section>
  );
};

export default About;
