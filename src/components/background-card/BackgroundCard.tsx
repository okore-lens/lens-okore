import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./backgroundcard.scss";

interface BackgroundCardProps {
  startDate: string;
  endDate: string;
  title: string;
  institution: string;
  about: Array<string>;
  keyPoints: Array<string>;
}

const BackgroundCard: React.FC<BackgroundCardProps> = ({
  startDate,
  endDate,
  title,
  institution,
  about,
  keyPoints,
}) => {
  return (
    <div className="background-card">
      <section className="left">
        <div className="circle-blop"></div>
        <div className="horizontal-line"></div>
      </section>
      <div className="right">
        {/* Timeline */}
        <div className="timeline">
          <h3>
            {startDate} - {endDate}
          </h3>
        </div>
        {/* Title and Station*/}
        <div className="title-station">
          <h3>{title} </h3>
          <FontAwesomeIcon className="icon" icon={faArrowRight} />
          <h5>{institution}</h5>
        </div>
        {/* Description */}
        <ul>
          {about.map((abt: string, idx: React.Key) => (
            <li key={idx}>{abt}</li>
          ))}
        </ul>
        {/* Accomplishments */}
        <div className="accomplishments">
          <h4>Topics</h4>
          <ul>
            {keyPoints.map(
              (point: string, idx: React.Key | null | undefined) => (
                <li key={idx}>{point}</li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BackgroundCard;
