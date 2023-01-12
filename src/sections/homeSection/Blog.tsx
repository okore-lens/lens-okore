import { faBook } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../../components/blog-card/BlogCard";
import Button from "../../components/button/Button";
import ModalBody from "../../components/modalBody/ModalBody";
import blogArray from "../../data/blog";
import Modal from "../../UI/Modal";

const Blog: React.FC = () => {
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
    <div className="Blog">
      {/* Top Strip */}
      <div className="title-topButton">
        <div className="title">
          <h1>My Blog </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id dicta
            tenetur doloremque aut error, porro, obcaecati, uae.
          </p>
        </div>
        <Link to="/blogs" style={{ textDecoration: "none", color: "inherit" }}>
          <Button
            className="button"
            click={clickHandler}
            buttonIcon={faBook}
            text="View All"
          />
        </Link>
      </div>

      <div className="blog-wrapper">
        {showModal && (
          <Modal onClose={closeModalHandler}>
            <ModalBody body={moreInfo} closeModalHandler={closeModalHandler} />
          </Modal>
        )}
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
    </div>
  );
};

export default Blog;
