import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Button from "../../../../components/button/Button";
import ProjectCard from "../../../../components/projectCard/ProjectCard";

const Project: React.FC = () => {
  const clickHandler = () => {
    console.log("View More Projects");
  };
  return (
    <div className="Projects-section">
      {/* Top Strip */}
      <div className="title-topButton">
        <div className="title">
          <h1>Featured Projects</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id dicta
            tenetur doloremque aut error, porro, obcaecati, uae.
          </p>
        </div>
        <Button
          click={clickHandler}
          buttonIcon={faScrewdriverWrench}
          text="View All"
        />
      </div>
      {/* Project Cards */}
      <div className="projects-wrapper">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Project;
