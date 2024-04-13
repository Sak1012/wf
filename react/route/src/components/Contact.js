// Contact.js
import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
        minHeight: "100vh",
      }}
    >
      <h1>Contact Page</h1>
      <p>
        Please Contact by{" "}
        <a href="mailto:someone@example.com">Sending a email</a> for more info
      </p>
    </div>
  );
};

export default Contact;
