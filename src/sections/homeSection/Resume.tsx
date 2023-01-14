import React, { useEffect, useState } from "react";
import BackgroundCard from "../../components/background-card/BackgroundCard";

import Button from "../../components/button/Button";
import PersonalInfo from "./PersonalInfo";
import Wakatime from "./Wakatime";

const Resume: React.FC = () => {
  const [workExperience, setWorkExperience] = useState<any>([]);
  const [education, setEducation] = useState<any>([]);

  const fetchWorkExperience = async () => {
    try {
      const response = await fetch(
        "https://okore-dashboard-default-rtdb.firebaseio.com/Experience.json"
      );
      const responseData = await response.json();

      const loadedWorkExperience = [];

      for (const key in responseData) {
        loadedWorkExperience.push({
          id: key,
          title: responseData[key].title,
          institution: responseData[key].institution,
          about: responseData[key].aboutList,
          startDate: responseData[key].startDate,
          endDate: responseData[key].endDate,
          keyPoints: responseData[key].keyPointsList,
        });
      }

      setWorkExperience(loadedWorkExperience);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchEducation = async () => {
    try {
      const response = await fetch(
        "https://okore-dashboard-default-rtdb.firebaseio.com/Education.json"
      );
      const responseData = await response.json();

      const loadedEducation = [];

      for (const key in responseData) {
        loadedEducation.push({
          id: key,
          title: responseData[key].title,
          institution: responseData[key].institution,
          about: responseData[key].aboutList,
          startDate: responseData[key].startDate,
          endDate: responseData[key].endDate,
          keyPoints: responseData[key].keyPointsList,
        });
      }

      setEducation(loadedEducation);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWorkExperience();
    fetchEducation();
  }, []);

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
          {workExperience.length >= 1 &&
            workExperience
              .reverse()
              .map(
                (exp: {
                  id: string;
                  title: string;
                  institution: string;
                  about: Array<string>;
                  startDate: string;
                  endDate: string;
                  keyPoints: Array<string>;
                }) => (
                  <BackgroundCard
                    key={exp.id}
                    title={exp.title}
                    institution={exp.institution}
                    about={exp.about}
                    startDate={exp.startDate}
                    endDate={exp.endDate}
                    keyPoints={exp.keyPoints}
                  />
                )
              )}
        </div>
        <div className="Education">
          <h1>Education</h1>
          {education.length >= 1 &&
            education
              .reverse()
              .map(
                (edu: {
                  id: string;
                  title: string;
                  institution: string;
                  about: Array<string>;
                  startDate: string;
                  endDate: string;
                  keyPoints: Array<string>;
                }) => (
                  <BackgroundCard
                    key={edu.id}
                    title={edu.title}
                    institution={edu.institution}
                    about={edu.about}
                    startDate={edu.startDate}
                    endDate={edu.endDate}
                    keyPoints={edu.keyPoints}
                  />
                )
              )}
        </div>
      </section>
    </div>
  );
};

export default Resume;
