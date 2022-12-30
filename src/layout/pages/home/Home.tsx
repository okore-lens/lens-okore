import React from "react";

import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Blog from "./components/Blog";
import About from "../about/About";

import "./home.scss";

const Home: React.FC = () => {
  return (
    <div className="Home">
      {/* Hero page */}
      <Hero />
      {/* Projects */}
      <Work />
      {/* About */}
      <About />
      {/* Contact */}
      <Contact />
      {/* Blog */}
      <Blog />
    </div>
  );
};

export default Home;
