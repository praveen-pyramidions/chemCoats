import React, { Component, useState } from "react";
import { Helmet } from "react-helmet";

export default function FormContact() {
  const [formDetails, setFormDetails] = useState([]);

  const [result, showResult] = useState(false);
  const [formDetail, setFormDetail] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormDetail((oldValues) => {
      return { ...oldValues, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8df2c034-8335-4a92-9bc0-802d6a1db4fe");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setFormDetail({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
      showResult(true);
      setTimeout(() => {
        showResult(false);
      }, 3000);
    }
  };

  return (
    <>
      <div className="col-md-6">
        <Helmet>
          <title>Chemcoats | Contact +91 88700 67777</title>
          <meta
            name="description"
            content="Our team is ready to assist with all your industrial, commercial, and residential flooring needs. Get in touch today for high-quality service!"
          />
          <meta
            name="keywords"
            content="Contact Us, Support, Customer Service, Inquiries, Feedback, Get in Touch"
          />
          <meta name="author" content="Your Company Name" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://chemcoats.com/contact-us" />
        </Helmet>

        <div className="themesflat-headings style-2 clearfix">
          <h1 className="heading">CONTACT US</h1>
          <div className="sep has-width w80 accent-bg clearfix" />
          <p className="sub-heading">
            Are you interested in finding out how Chemcoats Services can make
            your project. For more information on our services please contact
            us.
          </p>
        </div>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={36}
          data-mobile={35}
          data-smobile={35}
        />
        <div className="themesflat-contact-form style-2 clearfix">
          <form
            className="form-submit contact-form wpcf7-form"
            onSubmit={onSubmit}
          >
            <span className="wpcf7-form-control-wrap your-name">
              <input
                type="text"
                tabIndex={1}
                id="name"
                name="name"
                value={formDetail.name || ""}
                className="wpcf7-form-control"
                placeholder="Name*"
                onChange={handleChange}
                required
              />
            </span>
            <span className="wpcf7-form-control-wrap your-phone">
              <input
                value={formDetail.phone || ""}
                type="text"
                tabIndex={2}
                id="phone"
                name="phone"
                className="wpcf7-form-control"
                placeholder="Phone"
                onChange={handleChange}
                required
              />
            </span>
            <span className="wpcf7-form-control-wrap your-email">
              <input
                value={formDetail.email || ""}
                type="email"
                tabIndex={3}
                id="email"
                name="email"
                className="wpcf7-form-control"
                placeholder="Your Email*"
                required
                onChange={handleChange}
              />
            </span>
            <span className="wpcf7-form-control-wrap your-subject">
              <input
                value={formDetail.subject || ""}
                type="text"
                tabIndex={4}
                id="subject"
                name="subject"
                className="wpcf7-form-control"
                placeholder="Subject"
                onChange={handleChange}
              />
            </span>
            <span className="wpcf7-form-control-wrap your-message">
              <textarea
                value={formDetail.message || ""}
                name="message"
                tabIndex={5}
                cols={40}
                rows={10}
                className="wpcf7-form-control wpcf7-textarea"
                placeholder="Message*"
                required
                onChange={handleChange}
              />
            </span>
            <span className="wrap-submit">
              <input
                type="submit"
                defaultValue="SEND US"
                className="submit wpcf7-form-control wpcf7-submit"
                id="submit"
                name="submit"
              />
            </span>

            {result && (
              <span className="wrap-submit">
                <div style={{ marginTop: "10px" }} className="sub-heading">
                  Mail Sent Sucessfully
                </div>
              </span>
            )}
          </form>
        </div>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={80}
          data-mobile={60}
          data-smobile={60}
        />
      </div>
    </>
  );
}
