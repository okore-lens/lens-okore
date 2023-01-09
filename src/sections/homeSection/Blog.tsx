import React, { useEffect, useState } from "react";
import BlogCard from "../../components/blog-card/BlogCard";
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
      <h1>My Blog</h1>
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
