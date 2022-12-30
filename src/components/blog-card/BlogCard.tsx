import React from "react";

import image from "../../assets/me.jpeg";

import "./blogcard.scss";

const BlogCard: React.FC = () => {
  return (
    <div className="BlogCard">
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
