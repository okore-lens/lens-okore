import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Dispatch, SetStateAction } from "react";

import image from "../../assets/me.jpeg";

import "./projectcard.scss";

interface ProjectCardProps {
  title: string;
  bodyText: string;
  stack: Array<IconProp>;
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
    props.showModalHandler();
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
              <FontAwesomeIcon icon={faCode} />
            </a>
          </div>
        </div>
        <div className="right">
          <h4>Tech Stack</h4>
          <div className="languages">
            Icons go here
            {/* {props.stack.map((lan, idx) => (
              <FontAwesomeIcon key={idx} className="icon" icon={lan} />
            ))} */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectCard;
