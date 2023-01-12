import React, { Dispatch, SetStateAction } from "react";

import "./blogcard.scss";

interface BlogCardProps {
  onClick: () => void;
  title: string;
  textBody: string;
  image: string;
  setMoreInfo: Dispatch<SetStateAction<any>>;
}

const BlogCard: React.FC<BlogCardProps> = (props) => {
  const clickHandler = () => {
    props.setMoreInfo({
      image: props.image,
      title: props.title,
      bodyText: props.textBody,
    });
    props.onClick();
  };

  return (
    <div className="BlogCard" onClick={clickHandler}>
      {/* Modal Overlay */}

      <div className="overlay">
        <p>Read more ...</p>
      </div>
      {/* Image */}
      <div className="image">
        <img src={props.image} />
      </div>
      <hr />
      {/* Title */}
      <h2>{props.title}</h2>
      {/* body */}
      <p style={{ fontSize: "0.8em" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
        inventore eos aspernatur repellendus voluptatibus?
      </p>
    </div>
  );
};

export default BlogCard;
