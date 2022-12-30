import React from "react";
import BlogCard from "../../../../components/blog-card/BlogCard";

const Blog: React.FC = () => {
  return (
    <div className="Blog">
      <h1>My Blog</h1>
      <div className="blog-wrapper">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
