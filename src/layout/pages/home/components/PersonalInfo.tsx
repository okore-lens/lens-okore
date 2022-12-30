import React from "react";

import { faDochub } from "@fortawesome/free-brands-svg-icons";

import Button from "../../../../components/button/Button";

const PersonalInfo: React.FC = () => {
  const clickHandler = () => {
    console.log("Resume Downloaded");
  };

  return (
    <div className="personal-info">
      <h1>Personal Details</h1>
      <ul className="list">
        <li className="list-item">
          <span className="title">First Name :: </span>Lens
        </li>
        <li className="list-item">
          <span className="title">Surname :: </span> Okore
        </li>
        <li className="list-item">
          <span className="title">Email :: </span>
          okorelens27@gmail.com
        </li>
        <li className="list-item">
          <span className="title">Age :: </span>20
        </li>
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
      <Button
        className="button"
        text="Download Resume"
        click={clickHandler}
        buttonIcon={faDochub}
      />
    </div>
  );
};

export default PersonalInfo;
