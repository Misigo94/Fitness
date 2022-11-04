import React, { useState } from "react";
import { Box } from "@mui/material";
import "./Contacts.css";
import BannerImage from "../assets/images/better.jpg";

const Contact = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleFirst = (event) => {
    setValues({ ...values, firstName: event.target.value });
  };

  const handleLast = (event) => {
    setValues({ ...values, lastName: event.target.value });
  };

  const handleEmail = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.firstName && values.lastName && values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact us</h1>

        <form id="contact-form" onSubmit={handleSubmit}>
          {submitted && valid ? (
            <div className="success-name">Success thanks for this</div>
          ) : null}
          <label htmlfor="name">First name</label>
          <input
            onChange={handleFirst}
            name="name"
            placeholder="enter first name"
            type="text"
            values={values.firstName}
          />
          {submitted && !values.firstName ? (
            <span>Please enter a first name</span>
          ) : null}

          <label htmlfor="name">Last name</label>
          <input
            onChange={handleLast}
            name="name"
            placeholder="enter last name"
            type="text"
            values={values.lastName}
          />
          {submitted && !values.lastName ? (
            <span>Please enter a first name</span>
          ) : null}

          <label htmlfor="email">Email</label>
          <input
            onChange={handleEmail}
            name="email"
            placeholder="enter your email.."
            type="text"
            values={values.email}
          />
          {submitted && !values.email ? (
            <span>Please enter a email</span>
          ) : null}
          {/* <label htmlfor="message">Message</label>
            <textarea rows="6" placeholder="messgae"></textarea> */}
          <button type="submit">send message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
