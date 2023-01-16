import React, { useState } from "react";
import "../styles/contact.css";
import Navbar from "./Navbar";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send formData to your backend or email service here
    console.log(formData);
  };

  return (
    <>
      <Navbar styleClass={"nav-wines"} />
      <div className="contact">
        <div className="talk">
          <h1>Let's Talk about Wine</h1>
          <p>Wine is the answer, but I can't even remember the question.</p>
        </div>
        <div className="contact_form">
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />

            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />

            <textarea name="message" placeholder="Your message" value={formData.message} onChange={handleChange} />

            <button className="submit" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
