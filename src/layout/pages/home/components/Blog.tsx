import React, { useState } from "react";

import BlogCard from "../../../../components/blog-card/BlogCard";
import Modal from "../../../../UI/Modal";

import blogArray from "../../../../data/blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import Button from "../../../../components/button/Button";

const Blog: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [moreInfo, setMoreInfo] = useState({
    image: "",
    title: "",
    bodyText: "",
  });

  const clickHandler = () => {
    console.log("Clicked");
    setShowModal(true);
  };

  const modalElementStyleSheet = {
    BlogItem: {
      width: "100%",
      heigth: "100%",
      overflow: "scroll",
      position: "relative",
    } as React.CSSProperties,
    imageWrapper: {
      backgroundColor: "red",
      height: "40vh",
      width: "100%",
      overflow: "hidden",
    },
    image: {
      width: "100%",
      heigth: "auto",
    },
    textArea: {
      // backgroundColor: "purple",
    },
    icon: {
      position: "absolute",
    } as React.CSSProperties,
  };

  const closeHandler = () => {
    setShowModal(false);
    console.log("Modal Closed");
  };

  const ModalElement = (
    <section style={modalElementStyleSheet.BlogItem}>
      <div style={modalElementStyleSheet.imageWrapper}>
        <img style={modalElementStyleSheet.image} src={moreInfo.image} />
      </div>
      <div style={modalElementStyleSheet.textArea}>
        <h2>{moreInfo.title}</h2>
        <p>{moreInfo.bodyText}</p>
        <p>{moreInfo.bodyText}</p>
        <p>{moreInfo.bodyText}</p>
        <p>{moreInfo.bodyText}</p>
      </div>
      <Button
        style={modalElementStyleSheet.icon}
        click={closeHandler}
        text="Close Modal"
        buttonIcon={faMultiply}
      />
    </section>
  );

  return (
    <div className="Blog">
      <h1>My Blog</h1>
      <div className="blog-wrapper">
        {showModal && <Modal onClose={closeHandler}>{ModalElement}</Modal>}
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
