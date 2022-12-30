import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faHome,
  faPhoneFlip,
  faScrewdriverWrench,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";

import "./sidebar.scss";

const Sidebar: React.FC = () => {
  return (
    <nav className="Sidebar">
      {/* Landing Page */}
      <FontAwesomeIcon className="icon" icon={faHome} />
      {/* About Details */}
      <FontAwesomeIcon className="icon" icon={faCircleUser} />
      {/* Projects */}
      <FontAwesomeIcon className="icon" icon={faScrewdriverWrench} />
      {/* Get In Touch*/}
      <FontAwesomeIcon className="icon" icon={faPhoneFlip} />
      {/* Blog */}
      <FontAwesomeIcon className="icon" icon={faSignature} />
    </nav>
  );
};

export default Sidebar;
