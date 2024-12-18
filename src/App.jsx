import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import ScrollToTop from "./Components/ScrollToTop";
import Hireme from "./Components/Forms/Hireme";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="h-screen">
        <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hire-me" element={<Hireme/>} />
          <Route path="/projects" element={<Projects />} />
          <Route path='project/:p_id' element =""/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
