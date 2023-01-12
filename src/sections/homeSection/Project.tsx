import React, { useEffect, useState } from "react";

import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../UI/Modal";
import ModalBody from "../../components/modalBody/ModalBody";
import Button from "../../components/button/Button";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { Link } from "react-router-dom";

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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id dicta
            tenetur doloremque aut error, porro, obcaecati, uae.
          </p>
        </div>
        <Link
          to="/projects"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Button
            className="button"
            click={() => console.log("Projects Clicked")}
            buttonIcon={faScrewdriverWrench}
            text="View All"
          />
        </Link>
      </div>
      {/* Project Cards */}
      <div className="projects-wrapper">
        {projs.map(
          (
            proj: {
              stack: [];
              title: string;
              text: string;
              image: string;
            },
            idx: React.Key | null | undefined
          ) => (
            <ProjectCard
              key={idx}
              githubUrl="hello"
              websiteUrl="website"
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

export default Project;
