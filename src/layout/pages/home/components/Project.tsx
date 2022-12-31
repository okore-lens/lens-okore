import React, { useState } from "react";

import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

import Button from "../../../../components/button/Button";
import ProjectCard from "../../../../components/projectCard/ProjectCard";

import projectsArray from "../../../../data/project";
import Modal from "../../../../UI/Modal";
import ModalBody from "../../../../components/modalBody/ModalBody";

const Project: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [projectInfo, setProjectInfo] = useState({
    title: "",
    bodyText: "",
    image: "",
    stack: [],
  });
  const clickHandler = () => {
    console.log("View More Projects");
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const showModalHandler = () => {
    setShowModal(true);
  };
  return (
    <div className="Projects-section">
      {showModal && (
        <Modal onClose={closeModalHandler}>
          <ModalBody body={projectInfo} closeModalHandler={closeModalHandler} />
        </Modal>
      )}
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
        {projectsArray.map((proj, idx) => (
          <ProjectCard
            key={idx}
            githubUrl={proj.githubUrl}
            websiteUrl={proj.websiteUrl}
            stack={proj.stack}
            title={proj.title}
            bodyText={proj.text}
            image={proj.image}
            showModalHandler={showModalHandler}
            setShowModal={setProjectInfo}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
