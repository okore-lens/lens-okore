import React from "react";

import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Blog from "./components/Blog";
import Resume from "./components/Resume";

import "./home.scss";
import Project from "./components/Project";

const Home: React.FC = () => {
  return (
    <div className="Home">
      {/* Hero page */}
      <Hero />
      {/* Work */}
      <Work />
      {/* About */}
      <Resume />
      {/* Projects */}
      <Project />
      {/* Contact */}
      <Contact />
      {/* Blog */}
      <Blog />
    </div>
  );
};

export default Home;
