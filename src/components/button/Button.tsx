import React from "react";

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./button.scss";

interface ButtonProps {
  text: string;
  buttonIcon: IconProp;
  click: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = (props) => {
  const buttonClickHandler = () => {
    props.click();
  };

  return (
    <div className={`${props.className} Button`} onClick={buttonClickHandler}>
      <p>{props.text}</p>
      <FontAwesomeIcon className="icon" icon={props.buttonIcon} />
    </div>
  );
};

export default Button;
