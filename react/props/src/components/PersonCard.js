import React from "react";

function PersonCard(props) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        margin: "16px",
        maxWidth: "300px",
      }}
    >
      <div>
        <img
          src={props.image}
          alt={props.name}
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
            borderRadius: "8px 8px 0 0",
          }}
        />
      </div>
      <div style={{ padding: "16px" }}>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
      </div>
    </div>
  );
}

export default PersonCard;
