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
          <h1>Okore Lens William</h1>
          {/* text */}
          <div className="text">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Temporibus quia sequi aut ullam atque adipisci saepe aliquam
              mollitia dignissimos perspiciatis, eius enim facilis nulla
              excepturi magnam, reiciendis cum asperiores accusantium! Similique
              molestias unde sit dolores eveniet possimus voluptatum?
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
