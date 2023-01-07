import React from "react";

import Home from "./pages/home/Home";

import "./App.scss";
import Sidebar from "./layout/sidebar/Sidebar";
import LayoutIndex from "./layout/LayoutIndex";

const App: React.FC = () => {
  return (
    <div className="App">
      <LayoutIndex />
    </div>
  );
};

export default App;
