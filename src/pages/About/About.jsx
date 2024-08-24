import React from 'react'
import { Nav } from '../../components/Nav/Nav'
import "./About.css"
import Spline from '@splinetool/react-spline';
import CoreValues from './CoreValues';
import Story from './Story';
import NumberCards from './NumberCards';
import Footer from '../../components/Footer/Footer';

const About = () => {
  return (
    <section id='about'>
      <Nav/>
<main>
    <div className="hero-tx">

    <h1>ABOUT</h1>
    <h1>SHRAYATI</h1>
    </div>
</main>
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
          <Spline
        scene="https://prod.spline.design/asFuTIuJJU7WsTGZ/scene.splinecode" 
      />
    </div>
    <div id="miss">
        <div className="ms-dt magicpattern">
            <div className="t-title">
                Shrayati’s mission
            </div>
            <p>
               <b>
                Vision:
                </b> 
                 Be the market leader in providing eco-friendly products that promote sustainability and environmental responsibility, fostering a greener future for generations to come.       </p>
            <p>
                <b>

Mission:
                </b> Provide high-quality, eco-friendly products like tissue papers and paper cups that meet customer needs while minimizing environmental impact. Dedicate to sustainability, innovation, and exceptional service, inspiring customers to make environmentally conscious choices.
      
            </p>
        </div>
        <div className="ms-img">
             <Spline
        scene="https://prod.spline.design/Y-LBSXfyEPiezYhG/scene.splinecode" 
      />
            {/* <img src="https://s3-alpha-sig.figma.com/img/c326/266b/1045d0b93677d7bb843c101c14d64670?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OKtu7cpBB-DF7~3Hrq~A3efR5CKvat6HiPojUdFqxGjQGqvuoDII93YP3QWA7pHzyHnuUo2LqZJeXdNbUWTdWm9cNeUV7C3i7x8p9somAYqF78S6FZkzSSYct1YMh80I0Pfd0yC6tJI81nOStPgPFFEVHaU8~oPtip-Ay4EODrbsoOYwDfVeam1BXzubf4TNk1yOQSAXLf33cmdYzmIoOttV50VNVuHhifSeWv4qW-99Ga~F1lB42JeZGoyOF0nSLs0XweG4pZ-VfKnDVYgzhPxb9Zmqzdp~D4NhUjBnxtXzzLm4o0VC7eHJfjWlbtMBJCc66KmJcIMPN0TQ2y59vw__" alt="" /> */}
        </div>
    </div>
{/* <div className="core-v-sec">
    <CoreValues/>
</div> */}
<Story/>
<CoreValues/>
<NumberCards/>
<Footer/>
</div>
    </section>
  )
}

export default About
