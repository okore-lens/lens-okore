import React, { ReactNode, useState } from "react";

import image from "../../assets/me.jpeg";
import Modal from "../../UI/Modal";

import "./blogcard.scss";

interface BlogCardProps {
  onClick: () => void;
}

const BlogCard: React.FC<BlogCardProps> = (props) => {
  const clickHandler = () => {
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
        <img src={image} />
      </div>
      <hr />
      {/* Title */}
      <h2>Title</h2>
      {/* body */}
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
        inventore eos aspernatur repellendus voluptatibus?
      </p>
    </div>
  );
};

export default BlogCard;
