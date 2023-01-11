import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../../components/blog-card/BlogCard";
import ModalBody from "../../components/modalBody/ModalBody";
import Modal from "../../UI/Modal";

import "./blog.scss";

type Props = {};

const Blog = (props: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [moreInfo, setMoreInfo] = useState({
    image: "",
    title: "",
    bodyText: "",
  });
  const [blogs, setBlogs] = useState<any>([]);

  const clickHandler = () => {
    setShowModal(true);
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        "https://okore-dashboard-default-rtdb.firebaseio.com/Blog.json"
      );
      const responseData = await response.json();

      const loadedBlogs = [];

      for (const key in responseData) {
        loadedBlogs.push({
          id: key,
          title: responseData[key].title,
          image: responseData[key].image,
          bodyText: responseData[key].text,
        });
      }
      setBlogs(loadedBlogs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="Blogs">
      {showModal && (
        <Modal onClose={closeModalHandler}>
          <ModalBody body={moreInfo} closeModalHandler={closeModalHandler} />
        </Modal>
      )}
      <div className="top-nav">
        <div className="title">MY BLOGS</div>
        <Link to="/">Back To Home</Link>
      </div>
      {blogs.map(
        (
          blog: { title: string; image: string; text: string },
          idx: React.Key | null | undefined
        ) => (
          <BlogCard
            key={idx}
            title={blog.title}
            image={blog.image}
            textBody={blog.text}
            onClick={clickHandler}
            setMoreInfo={setMoreInfo}
          />
        )
      )}
    </div>
  );
};

export default Blog;
