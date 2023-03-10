import React, { useState } from "react";

import { faMailchimp } from "@fortawesome/free-brands-svg-icons";
import {
  faLandmark,
  faPaperPlane,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { send } from "emailjs-com";

const Contact: React.FC = () => {
  const [formInputs, setFormInputs] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const changeHandler = (ev: { target: { name: any; value: any } }) => {
    setFormInputs({ ...formInputs, [ev.target.name]: ev.target.value });
  };

  const clickHandler = (ev: { preventDefault: () => void }) => {
    ev.preventDefault();
    send("service_tpfpqkl", "template_ioz6ifx", formInputs, "yySSC3OYij-nR0TpB")
      .then((response) => {
        alert("Message sent successfully");
        setFormInputs({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        alert("Message not sent");
      });
  };

  return (
    <div className="Contact">
      <h1>Get In Touch</h1>
      <div className="contact-wrapper">
        <section className="left">
          <p>Don't Be Shy!</p>
          <h4>Let's Work On Your Next Project</h4>
          <p>
            Feel free to ask any question or better still resuest for a feature
            for your next big project
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
          <form onSubmit={clickHandler}>
            <input
              type="text"
              name="name"
              className="name"
              value={formInputs.name}
              placeholder="Your Name"
              onChange={changeHandler}
              required
            />
            <input
              type="text"
              name="email"
              className="name"
              placeholder="Your Email"
              value={formInputs.email}
              onChange={changeHandler}
              required
            />
            <input
              type="text"
              name="subject"
              className="subject"
              placeholder="Your Subject"
              value={formInputs.subject}
              onChange={changeHandler}
              required
            />
            <textarea
              name="message"
              className="message"
              placeholder="message"
              value={formInputs.message}
              onChange={changeHandler}
              required
            />
            <button className="button">
              <p>Send Message</p>
              <FontAwesomeIcon className="icon" icon={faPaperPlane} />
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Contact;
