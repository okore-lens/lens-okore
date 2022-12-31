import React from "react";

import BackgroundCard from "../../../../components/background-card/BackgroundCard";
import Button from "../../../../components/button/Button";
import PersonalInfo from "./PersonalInfo";
import Wakatime from "./Wakatime";

const Resume: React.FC = () => {
  return (
    <div className="Resume">
      <section className="info">
        <PersonalInfo />
        <div className="numerical-data">
          <h1>Wakatime Stats</h1>
          <Wakatime />
        </div>
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
