import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Compney from "./pages/Compney/Compney";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/info" element={<Compney />} />
      <Route path="/contact" element={<Contact />} /> */}
      <Route
        path="/"
        element={
          <>
            <Home />
            <About />
            <Compney />
            <Contact />
          </>
        }
      />
    </Routes>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
