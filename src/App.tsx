import { useState } from "react";
import Blog from "./components/blog/Blog";

import "./App.scss";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Developing my Portfolio using React Ts</h1>
      {/* Side Navigation */}
      <Sidebar />
      {/* Hero page */}
      {/* Projects */}
      {/* About */}
      {/* Contact */}
      {/* Blog */}
      <Blog />
    </div>
  );
}

export default App;
