import React from "react";

import { faMailchimp } from "@fortawesome/free-brands-svg-icons";
import {
  faLandmark,
  faPaperPlane,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../../components/button/Button";

const Contact: React.FC = () => {
  const clickHandler = () => {
    console.log("Message Sent");
  };
  return (
    <div className="Contact">
      <h1>Get In Touch</h1>
      <div className="contact-wrapper">
        <section className="left">
          <p>Don't Be Shy!</p>
          <h4>Let's Work On Your Next Project</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            officiis consequuntur ab, repudiandae, rem officia tempore debitis
            reiciendis veritatis, quisquam labore amet. Fugit, autem ipsam quod
            tempora, corporis exercitationem et sed accusamus tenetur, dolorem
            ab cupiditate sequi officiis odio libero placeat provident quia ad
            hic.
          </p>
          <div className="SocialCardWrappers">
            <section className="SocialCard">
              <FontAwesomeIcon className="icon" icon={faLandmark} />
              <div className="text">
                <p>Address Point</p>
                <p>Nairobi,Kenya</p>
              </div>
            </section>
            <section className="SocialCard">
              <FontAwesomeIcon className="icon" icon={faMailchimp} />
              <div className="text">
                <p>Mail Me</p>
                <p>okorelens27@gmail.com</p>
              </div>
            </section>
            <section className="SocialCard">
              <FontAwesomeIcon className="icon" icon={faPhoneVolume} />
              <div className="text">
                <p>Call Me</p>
                <p>+25471601042</p>
              </div>
            </section>
          </div>
        </section>
        <section className="right">
          <form>
            <input
              type="text"
              name="name"
              className="name"
              placeholder="Your Name"
            />
            <input
              type="text"
              name="email"
              className="name"
              placeholder="Your Email"
            />
            <input
              type="text"
              name="subject"
              className="subject"
              placeholder="Your Subject"
            />
            <textarea name="message" className="message"></textarea>
            <Button
              className="button"
              buttonIcon={faPaperPlane}
              text="Send Message"
              click={clickHandler}
            />
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
