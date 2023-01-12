import React from "react";
import Contact from "../../sections/homeSection/Contact";
import Hero from "../../sections/homeSection/Hero";
import Project from "../../sections/homeSection/Project";
import Resume from "../../sections/homeSection/Resume";
import Work from "../../sections/homeSection/Work";
import Blog from "../../sections/homeSection/Blog";

import "./home.scss";

const Home: React.FC = () => {
  return (
    <div className="Home">
      {/* Hero page */}
      <Hero />
      {/* Work */}
      {/* <Work   /> */}
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
