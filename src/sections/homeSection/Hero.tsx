import React from "react";

import image from "../../assets/me.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Hero: React.FC = () => {
  // function truncate(str: string, n: number) {
  //   return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  // }

  const aboutClickHandler = () => {
    console.log("Clicked!");
  };

  return (
    <section className="Hero">
      <div className="wrapper">
        {/* left */}
        <section className="left">
          <div className="image">
            <img src={image} />
          </div>
        </section>
        {/* right */}
        <section className="right">
          <div className="text">
            <h1>Hello I'm Okore</h1>
            <h2>Software Developer</h2>

            <p>
              <span> &lt;&gt;</span> <br />
              &nbsp;&nbsp; Softare Developer <br />
              &nbsp;&nbsp; Softare Designer <br />
              <span> &lt;/&gt;</span>
            </p>
          </div>
          <div className="media-links">
            <a
              href="https://www.linkedin.com/in/lens-okore-054b15223/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://github.com/okore-lens" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://twitter.com/infinite_lens" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Hero;
