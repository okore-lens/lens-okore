import React, { useState } from "react";

import BlogCard from "../../../../components/blog-card/BlogCard";
import Modal from "../../../../UI/Modal";
import ModalBody from "../../../../components/modalBody/ModalBody";

import blogArray from "../../../../data/blog";

const Blog: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [moreInfo, setMoreInfo] = useState({
    image: "",
    title: "",
    bodyText: "",
  });

  const clickHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div className="Blog">
      <h1>My Blog</h1>
      <div className="blog-wrapper">
        {showModal && (
          <Modal onClose={closeModalHandler}>
            <ModalBody body={moreInfo} closeModalHandler={closeModalHandler} />
          </Modal>
        )}
        {blogArray.map((blog, idx) => (
          <BlogCard
            key={idx}
            title={blog.title}
            image={blog.image}
            textBody={blog.text}
            onClick={clickHandler}
            setMoreInfo={setMoreInfo}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
