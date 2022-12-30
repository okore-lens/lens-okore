import React from "react";

import BackgroundCard from "../../../../components/background-card/BackgroundCard";
import Button from "../../../../components/button/Button";
import PersonalInfo from "./PersonalInfo";

const Resume: React.FC = () => {
  return (
    <div className="Resume">
      <h1>My Resume</h1>
      <section className="info">
        <PersonalInfo />
        <div className="numerical-data">
          <h1>Numerical Data</h1>
          <p>Wakatime dashboard...</p>
        </div>
      </section>
      <section className="skills">
        <h1>Skills</h1>
      </section>
      <section className="background">
        <div className="experience">
          <h1>Experience</h1>
          <BackgroundCard />
          <BackgroundCard />
        </div>
        <div className="Education">
          <h1>Education</h1>
          <BackgroundCard />
          <BackgroundCard />
        </div>
      </section>
    </div>
  );
};

export default Resume;
