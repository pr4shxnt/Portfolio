import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";
import ProjectMainLayout from "./Components/Projects/ProjectMainLayout";
import Home from "./Components/Home";
import ScrollToTop from "./Components/ScrollToTop";
import Hireme from "./Components/Forms/Hireme";
import ProjectCard from "./Components/Projects/ProjectCard";

const App = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Router>
        <ScrollToTop />
        <div className="container flex flex-col justify-center items-center">
          <Navbar />
          <div className="flex-grow flex flex-col justify-center items-center">
            <Routes>
              {/* Static Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/hire-me" element={<Hireme />} />

              {/* Projects Section */}
              <Route path="/projects" element={<ProjectMainLayout />}>
                {/* Default project route */}
                <Route index element={<Projects />} />
                {/* Dynamic Project Description */}
                <Route path=":projectId" element={<ProjectCard />} />
              </Route>

              {/* Catch-all route for 404 */}
              <Route
                path="*"
                element={
                  <div className="text-xl font-bold">
                    404 - Page Not Found
                  </div>
                }
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
};

export default App;
