import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./button.scss";

interface ButtonProps {
  text: string;
  buttonIcon: IconProp;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div className="Button">
      <p>Button Name</p>
      <FontAwesomeIcon className="icon" icon={props.buttonIcon} />
    </div>
  );
};

export default Button;
