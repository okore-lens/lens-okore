import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import React from "react";
import Button from "../button/Button";
import text from "../../data/text";

import "./modalbody.scss";

interface BodyProps {
  image: string;
  title: string;
  bodyText: string;
  stack?: Array<string>;
}

interface ModalBodyProps {
  closeModalHandler: () => void;
  body: BodyProps;
}

const ModalBody: React.FC<ModalBodyProps> = (props) => {
  const closeHandler = () => {
    props.closeModalHandler();
  };

  return (
    <section className="BlogItem">
      <div className="imageWrapper">
        <img className="image" src={props.body.image} />
      </div>
      <div className="textArea">
        <div className="title">
          <h2>{props.body.title}</h2>
          <div className="icons">
            {props.body.stack?.map((lan, idx) => (
              <Icon key={idx} className="icon" icon={lan} />
            ))}
          </div>
        </div>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
        <p>{text}</p>
      </div>
      <Button
        className="button"
        click={closeHandler}
        text="Close Modal"
        buttonIcon={faMultiply}
      />
    </section>
  );
};

export default ModalBody;
