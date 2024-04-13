import React, { useState } from "react";

const FormComponent = () => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.keys(formData).length === 0 && formData.constructor === Object) {
      console.error("Error submitting form: formData is empty");
      return;
    }

    console.log("Form submitted:", formData);

    /*try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Form submitted successfully:", data);
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }*/
  };

  return (
    <form
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
        gap: "30px",
      }}
      onSubmit={handleSubmit}
    >
      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <label htmlFor="username">Username:</label>
        <input
          style={{
            width: "350px",
            height: "50px",
            border: "none",
            fontSize: "20px",
            borderRadius: "10px",
          }}
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <label htmlFor="password">Password:</label>
        <input
          style={{
            width: "350px",
            height: "50px",
            border: "none",
            fontSize: "20px",
            borderRadius: "10px",
          }}
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <button
        style={{
          backgroundColor: "#faacac",
          width: "350px",
          height: "50px",
          border: "none",
          fontSize: "20px",
          borderRadius: "10px",
        }}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
