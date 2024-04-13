// About.js
import React from "react";

const About = () => {
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
      <h1>About Page</h1>
      <p>This explains what the page is about</p>
    </div>
  );
};

export default About;
