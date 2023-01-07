import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import "./backgroundcard.scss";

const BackgroundCard: React.FC = () => {
  return (
    <div className="background-card">
      <section className="left">
        <div className="circle-blop"></div>
        <div className="horizontal-line"></div>
      </section>
      <div className="right">
        {/* Timeline */}
        <div className="timeline">
          <h3>04/2022 - 06/2022</h3>
        </div>
        {/* Title and Station*/}
        <div className="title-station">
          <h2>Title </h2>
          <FontAwesomeIcon className="icon" icon={faArrowRight} />
          <h5>Station</h5>
        </div>
        {/* Description */}
        <ul>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa unde
            eos odio quisquam voluptatum obcaecati ab rem non molestias libero
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa unde
            eos odio quisquam voluptatum obcaecati ab rem non molestias libero
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa unde
            eos odio quisquam voluptatum obcaecati ab rem non molestias libero
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa unde
            eos odio quisquam voluptatum obcaecati ab rem non molestias libero
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa unde
            eos odio quisquam voluptatum obcaecati ab rem non molestias libero
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa unde
            eos odio quisquam voluptatum obcaecati ab rem non molestias libero
          </li>
          <li>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa unde
            eos odio quisquam voluptatum obcaecati ab rem non molestias libero
          </li>
        </ul>
        {/* Accomplishments */}
        <div className="accomplishments">
          <h4>Key Moments</h4>
          <ul>
            <li>Accomplishment 1</li>
            <li>Accomplishment 2</li>
            <li>Accomplishment 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BackgroundCard;
