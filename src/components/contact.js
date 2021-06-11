import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit}>
    <div className="contact-form">
      <div>
        <label htmlFor="name" className="box" >Name    :</label>
        <input type="text" id="name" placeholder="Your Name" required />
      </div>
      <div>
        <label htmlFor="email" className="box">Email    :</label>
        <input type="email" id="email" placeholder="xyz@email.com" required />
      </div>
      <div>
        <label htmlFor="message" className="box">Message:</label>
        <textarea id="message" placeholder="Message.." required />
      </div>
      <button type="submit" className="btn btn-lg btn-primary">{status}</button>
      </div>
    </form>
  );
};

export default ContactForm;
