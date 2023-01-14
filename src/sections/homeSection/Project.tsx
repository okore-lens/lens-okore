import React, { useEffect, useState } from "react";

import {
  faScrewdriverWrench,
  faSpaceShuttle,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../../UI/Modal";
import ModalBody from "../../components/modalBody/ModalBody";
import Button from "../../components/button/Button";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Project: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [projectInfo, setProjectInfo] = useState({
    title: "",
    bodyText: "",
    image: "",
    stack: [],
  });
  const [projs, setProjs] = useState<any>([]);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const showModalHandler = () => {
    setShowModal(true);
  };

  const fetchProjs = async () => {
    try {
      const response = await fetch(
        "https://okore-dashboard-default-rtdb.firebaseio.com/Project.json"
      );
      const responseData = await response.json();

      const loadedProjs = [];

      for (const key in responseData) {
        loadedProjs.push({
          id: key,
          title: responseData[key].title,
          image: responseData[key].image,
          bodyText: responseData[key].text,
          stack: responseData[key].languagesList,
          githubUrl: responseData[key].githubUrl,
          websiteUrl: responseData[key].websiteUrl,
        });
      }
      setProjs(loadedProjs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjs();
  }, []);

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
            Take a look at some of the projects that I have put my hands on.
            From designing the wireframes to bringing life to the wireframes.
          </p>
        </div>

        {projs.length < 1 ? (
          ""
        ) : (
          <Link
            to="/projects"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <Button
              className="button"
              click={() => console.log("clicked")}
              buttonIcon={faScrewdriverWrench}
              text="View All"
            />
          </Link>
        )}
      </div>
      {/* Project Cards */}
      {projs.length < 1 ? (
        <h1 style={{ textAlign: "center" }}>
          Working On It <FontAwesomeIcon icon={faSpaceShuttle} />
        </h1>
      ) : (
        <div className="projects-wrapper">
          {projs.slice(0, 4).map(
            (
              proj: {
                stack: [];
                title: string;
                bodyText: string;
                image: string;
                githubUrl: string;
                websiteUrl: string;
              },
              idx: React.Key | null | undefined
            ) => (
              <ProjectCard
                key={idx}
                githubUrl={proj.githubUrl}
                websiteUrl={proj.websiteUrl}
                stack={proj.stack}
                title={proj.title}
                bodyText={proj.bodyText}
                image={proj.image}
                showModalHandler={showModalHandler}
                setShowModal={setProjectInfo}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Project;
