import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Compney from "./pages/Compney/Compney";
import Contact from "./pages/Contact/Contact";
import Splash from "./components/Loader/Splash";
import SideNav from "./components/Nav/SideNav";
const AppWrapper = () => {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 6000);
    const handleWindowLoad = () => {setShowSplash(false);};
    window.addEventListener("load", handleWindowLoad);
    return () => {
      window.removeEventListener("load", handleWindowLoad);
    };
  },[]);
 
  return (
    <div id="App-Overlay">
      {showSplash && <Splash />}
      <Home />
      <SideNav />
      <About />
      <Compney />
      <Contact />
    </div>
  );
};

export default AppWrapper;



