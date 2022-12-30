import React from "react";

import TechStack from "../../../../components/techstack-card/TechStack";

import WorkArray from "../../../../data/work";

const Work: React.FC = () => {
  return (
    <div className="Work">
      <div className="work-cards-wrapper">
        {WorkArray.map((work) => (
          <TechStack
            title={work.title}
            description={work.description}
            icon={work.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
