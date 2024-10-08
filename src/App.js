import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Compney from "./pages/Compney/Compney";
import Contact from "./pages/Contact/Contact";
import Splash from "./components/Loader/Splash";
const AppWrapper = () => {
  const [showSplash,setShowSplash]=useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setShowSplash(false);
    }, 5000);
  },[])
  return (<>
    {showSplash && <Splash/>}
    <Home />
    <About />
    <Compney />
    <Contact />
  </>);
};

export default AppWrapper;



