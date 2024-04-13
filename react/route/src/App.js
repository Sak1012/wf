// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Update import statement
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            flexDirection: "row",
            fontSize: "20px",
          }}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} exact /> {/* Use element prop */}
          <Route path="/about" element={<About />} /> {/* Use element prop */}
          <Route path="/contact" element={<Contact />} />{" "}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
