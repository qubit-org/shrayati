import React, { useEffect, useState } from "react";
import About from "./pages/About/About";
import Compney from "./pages/Compney/Compney";
import Contact from "./pages/Contact/Contact";
import Splash from "./components/Loader/Splash";
import SideNav from "./components/Nav/SideNav";
import MainSlider from "./components/MainSlider/MainSlider";
const AppWrapper = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [imgLoading, setImgLoading] = useState(true);
  useEffect(()=>{
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  },[])
  return (
    <div id="App-Overlay">
      {(showSplash || imgLoading) && <Splash />}  
      <MainSlider setImgLoading={setImgLoading} />
      <SideNav />
      <About />
      <Compney />
      <Contact />
    </div>
  );
};

export default AppWrapper;



