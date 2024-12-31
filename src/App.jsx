import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
      <Router >
      <DynamicTitle />
        <ScrollToTop />
        <div className="container flex flex-col justify-center items-center">
          <Navbar />
          <div className="flex-grow flex flex-col justify-center items-center">
            <Routes >
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



const DynamicTitle = () => {
    const location = useLocation();

    useEffect(() => {
      if (location.pathname === "/") {
        document.title = "Home | Prashant Adhikari";
      } else if (location.pathname === "/projects") {
        document.title = "Projects | Prashant Adhikari";
      } else if (location.pathname === "/hire-me") {
        document.title = "Hire | Prashant Adhikari";
      } else if (/^\/projects\/[\w-]+$/.test(location.pathname)) {
        const projectId = location.pathname.split("/").pop(); // Extract projectId from the URL
        document.title = `${decodeURIComponent(projectId)} | Prashant Adhikari`;
      } else {
        document.title = "404 | Prashant Adhikari";
      }
    }, [location]);

    return null; // This component doesn't render anything visually.
  };



export default App;
