import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Compney from "./pages/Compney/Compney";
import Contact from "./pages/Contact/Contact";
import Splash from "./components/Loader/Splash";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleRouteChange = () => {
      setIsLoading(true);
    };

    const handlePageLoad = () => {
      setIsLoading(false);
    };

    // Show splash screen on route change
    handleRouteChange();

    // Handle page load
    const onLoad = () => {
      // Delay hiding splash screen to ensure it shows before disappearing
      setTimeout(handlePageLoad, 300); // Adjust the timeout as needed
    };

    window.addEventListener("load", onLoad);

    // Cleanup
    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, [location.pathname]); // Depend on route changes

  return (
    <>
      {isLoading && <Splash />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<Compney />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;

{
  /* <div id="mc" className="circle"></div> */
}

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
