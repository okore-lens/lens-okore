import React from "react";

import image from "../../../../assets/me.jpeg";
import Button from "../../../../components/button/Button";
import { faHSquare } from "@fortawesome/free-solid-svg-icons";

const Hero: React.FC = () => {
  // function truncate(str: string, n: number) {
  //   return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  // }
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
          <Button text="Button Name" buttonIcon={faHSquare} />
        </section>
      </div>
    </section>
  );
};

export default Hero;
