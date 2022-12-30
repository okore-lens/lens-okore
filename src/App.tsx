import React from "react";

import Home from "./layout/pages/home/Home";

import "./App.scss";
import Sidebar from "./layout/sidebar/Sidebar";

const App: React.FC = () => {
  return (
    <div className="App">
      <Sidebar />
      <Home />
    </div>
  );
};

export default App;
