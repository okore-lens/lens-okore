import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalBody from "../../components/modalBody/ModalBody";
import ProjectCard from "../../components/projectCard/ProjectCard";
import Modal from "../../UI/Modal";

import "./projects.scss";

const Projects: React.FC = () => {
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
          websiteUrl: responseData[key].websiteUrl,
          githubUrl: responseData[key].githubUrl,
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
    <div className="Projects">
      {showModal && (
        <Modal onClose={closeModalHandler}>
          <ModalBody body={projectInfo} closeModalHandler={closeModalHandler} />
        </Modal>
      )}
      <div className="top-nav">
        <div className="title">PROJECTS</div>
        <Link to="/">Back To Home</Link>
      </div>
      <div className="wrapper">
        {projs.length > 0 &&
          projs.map(
            (
              proj: {
                stack: [];
                title: string;
                text: string;
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
                bodyText={proj.text}
                image={proj.image}
                showModalHandler={showModalHandler}
                setShowModal={setProjectInfo}
              />
            )
          )}
      </div>
    </div>
  );
};

export default Projects;
