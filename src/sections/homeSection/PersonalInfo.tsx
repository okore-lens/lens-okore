import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDochub,
  faReact,
  faAngular,
  faJs,
  faHtml5,
  faSass,
  faPhp,
  faNodeJs,
  faNode,
} from "@fortawesome/free-brands-svg-icons";

import Button from "../../components/button/Button";
import { Icon } from "@iconify/react";

const PersonalInfo: React.FC = () => {
  const clickHandler = () => {
    console.log("Resume Downloaded");
  };

  return (
    <div className="personal-info">
      <h1>Personal Details</h1>
      <ul className="list">
        <li className="list-item">
          <span className="title">Name :: </span>Lens Okore
        </li>
        {/* <li className="list-item">
          <span className="title">Surname :: </span> Okore
        </li> */}
        <li className="list-item">
          <span className="title">Email :: </span>
          okorelens27@gmail.com
        </li>
        {/* <li className="list-item">
          <span className="title">Age :: </span>20
        </li> */}
        <li className="list-item">
          <span className="title">Address :: </span> Nairobi,Kenya
        </li>
        <li className="list-item">
          <span className="title">LinkedIn :: </span>
          <a
            href="https://www.linkedin.com/in/lens-okore-054b15223/"
            target="_blank"
          >
            Lens Okore
          </a>
        </li>
        <li className="list-item">
          <span className="title">Github :: </span>
          <a href="https://github.com/okore-lens" target="_blank">
            okore-lens
          </a>
        </li>
        <li className="list-item">
          <span className="title">Languages :: </span>English,Kiswahili
        </li>
      </ul>
      <div className="brands">
        <div className="gallery">
          <div className="carousel">
            <figure>
              <div className="icon">
                <Icon
                  icon="logos:react"
                  style={{ color: "#31b0e2", fontSize: "4em" }}
                />
              </div>
            </figure>
            <figure>
              <div className="icon">
                <Icon
                  icon="vscode-icons:file-type-angular"
                  style={{ color: "#df2108", fontSize: "4em" }}
                />
              </div>
            </figure>
            <figure>
              <div className="icon">
                <Icon
                  icon="fa6-brands:node"
                  style={{ color: "#45b145", fontSize: "4em" }}
                />
              </div>
            </figure>
            <figure>
              <div className="icon">
                <Icon
                  icon="logos:typescript-icon"
                  style={{ fontSize: "4em" }}
                />
              </div>
            </figure>
            <figure>
              <div className="icon">
                <Icon
                  icon="logos:sass"
                  style={{ color: "#880707", fontSize: "4em" }}
                />
              </div>
            </figure>
            <figure>
              <div className="icon">
                <Icon
                  icon="mdi:language-php"
                  style={{ color: "#343570", fontSize: "4em" }}
                  className="icon"
                />
              </div>
            </figure>
            <figure>
              <div className="icon">
                <Icon
                  icon="fluent:javascript-16-filled"
                  style={{ color: "yellow", fontSize: "4em" }}
                  className="icon"
                />
              </div>
            </figure>
          </div>
        </div>
      </div>
      <a
        href="src/assets/Resume.pdf"
        download
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Button
          className="button"
          text="Download Resume"
          click={clickHandler}
          buttonIcon={faDochub}
        />
      </a>
    </div>
  );
};

export default PersonalInfo;
