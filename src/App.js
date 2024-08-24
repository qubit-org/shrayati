import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { gsap } from "gsap"; // Import GSAP for scaling
import "./App.css"; // Import the CSS for styling
import About from "./pages/About/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  // useEffect(() => {
  //   const circle = document.querySelector("#mc");
  //   if (!circle) {
  //     console.error('Element with ID "mc" not found.');
  //     return;
  //   }

  //   let animationFrameId;
  //   let xscale = 1;
  //   let yscale = 1;
  //   let prevx = 0;
  //   let prevy = 0;

  //   const moveCircle = (event) => {
  //     let posX = event.clientX - 50; // Adjust for circle size
  //     let posY = event.clientY - 850 - 65; // Adjust for circle size
  //     circle.style.transform = `translate(${posX}px, ${posY}px) scale(${xscale}, ${yscale})`;
  //   };

  //   const handleMouseMove = (event) => {
  //     // Throttle the movement updates
  //     cancelAnimationFrame(animationFrameId);
  //     animationFrameId = requestAnimationFrame(() => {
  //       moveCircle(event);
  //     });

  //     // Update scale based on mouse movement
  //     xscale = gsap.utils.clamp(0.8, 1.2, event.clientX - prevx);
  //     yscale = gsap.utils.clamp(0.8, 1.2, event.clientY - prevy);
  //     prevx = event.clientX;
  //     prevy = event.clientY;
  //   };

  //   const resetScale = () => {
  //     xscale = 1;
  //     yscale = 1;
  //     moveCircle({ clientX: prevx, clientY: prevy }); // Update position to reset scale
  //   };

  //   window.addEventListener("mousemove", handleMouseMove);

  //   // Reset the scale after a short timeout
  //   const timeout = setInterval(resetScale, 100); // Adjust timeout for how quickly you want the circle to return to original size

  //   return () => {
  //     clearInterval(timeout);
  //     cancelAnimationFrame(animationFrameId);
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []); // Empty dependency array means this runs once on mount

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <div id="mc" className="circle"></div> */}
    </Router>
  );
};

export default App;
