import React, { useState } from "react";
import BlogCard from "../../../../components/blog-card/BlogCard";
import Modal from "../../../../UI/Modal";

const Blog: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const clickHandler = () => {
    console.log("Clicked");
    setShowModal(true);
  };

  const ModalElement = <section>Hello From the Modal</section>;

  const closeHandler = () => {
    setShowModal(false);
    console.log("Modal Closed");
  };

  return (
    <div className="Blog">
      <h1>My Blog</h1>
      <div className="blog-wrapper">
        {showModal && <Modal onClose={closeHandler}>{ModalElement}</Modal>}
        <BlogCard onClick={clickHandler} />
        <BlogCard onClick={clickHandler} />
        <BlogCard onClick={clickHandler} />
        <BlogCard onClick={clickHandler} />
        <BlogCard onClick={clickHandler} />
        <BlogCard onClick={clickHandler} />
      </div>
    </div>
  );
};

export default Blog;
