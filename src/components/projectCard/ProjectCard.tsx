import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, SetStateAction } from "react";

import {
  faAngular,
  faGithub,
  faHtml5,
  faJs,
  faNodeJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

import "./projectcard.scss";
import { Icon } from "@iconify/react";

interface ProjectCardProps {
  title: string;
  bodyText: string;
  stack: Array<string>;
  websiteUrl: string;
  githubUrl: string;
  image: string;
  setShowModal: Dispatch<SetStateAction<any>>;
  showModalHandler: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const clickHandler = () => {
    props.setShowModal({
      title: props.title,
      bodyText: props.bodyText,
      image: props.image,
      stack: props.stack,
    });
    // props.showModalHandler();
  };

  return (
    <div className="ProjectCard">
      {/* Square Section has a smaller square with an image */}
      <section className="bigSquare">
        <div
          onClick={clickHandler}
          className="smallSquare"
          style={{ backgroundImage: `url(${props.image})` }}
        ></div>
      </section>
      <section className="bottomCard">
        <div className="left">
          {/* Title */}
          <h3>{props.title}</h3>
          {/* Links -- github and hosting link */}
          <div className="links">
            <a href={props.websiteUrl} target="_blank">
              {props.title}
            </a>
            <a href={props.githubUrl} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="languages">
            {props.stack.map((lan, idx) => (
              <Icon key={idx} className="icon" icon={lan} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
