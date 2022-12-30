import { faAngular, faReact } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import image from "../../assets/me.jpeg";

import "./projectcard.scss";

const ProjectCard: React.FC = () => {
  return (
    <div className="ProjectCard">
      {/* Square Section has a smaller square with an image */}
      <section className="bigSquare">
        <a href="#" target="_blank">
          <div
            className="smallSquare"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </a>
      </section>
      <section className="bottomCard">
        <div className="left">
          {/* Title */}
          <h3>Project Title</h3>
          {/* Links -- github and hosting link */}
          <div className="links">
            <a href="#" target="_blank">
              Hosting Link
            </a>
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faCode} />
            </a>
          </div>
        </div>
        <div className="right">
          <h4>Tech Stack</h4>
          <div className="languages">
            <FontAwesomeIcon className="icon" icon={faReact} />
            <FontAwesomeIcon className="icon" icon={faReact} />
            <FontAwesomeIcon className="icon" icon={faAngular} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
