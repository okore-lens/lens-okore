import React from "react";
import Home from "../pages/home/Home";
import Sidebar from "./sidebar/Sidebar";

const LayoutIndex: React.FC = () => {
  return (
    <>
      <Sidebar />
      <Home />
    </>
  );
};

export default LayoutIndex;
