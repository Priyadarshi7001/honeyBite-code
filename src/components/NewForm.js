import React, { useState } from "react";

const NewForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { name, email, message });
    // You can perform additional actions here, such as sending the form data to a server
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          placeholder="+917001243707 my number whats app"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div><input type="checkbox" />I accept the Term of Conditions and Privacy Policy.</div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default NewForm;
