import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

import Button from "../button/Button";

import "./techstack.scss";

interface TechStackProps {
  icon: IconProp;
  title: string;
  description: string;
}

const TechStack: React.FC<TechStackProps> = (props) => {
  const clickHander = () => {
    console.log("Know More");
  };

  return (
    <div className="work-card">
      {/* Icon */}
      <section className="icon-wrapper">
        <FontAwesomeIcon className="icon" icon={props.icon} />
      </section>
      {/* Title */}
      <h1>{props.title}</h1>
      {/* Little Description */}
      <p>{props.description}</p>
      {/* Button */}
      {/* <Button
        text="Know More"
        click={clickHander}
        buttonIcon={faArrowCircleRight}
        className="button"
      /> */}
    </div>
  );
};

export default TechStack;
