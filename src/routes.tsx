import { Route, Routes } from "react-router-dom";
import LayoutIndex from "./layout/LayoutIndex";
import Blog from "./pages/blogs/Blog";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutIndex />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blog />} />
    </Routes>
  );
};

export default Router;
