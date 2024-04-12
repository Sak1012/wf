import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Counter: {count}</h1>
      <div style={{ display: "flex", gap: "10px", height: "50px" }}>
        <button
          style={{
            backgroundColor: "#acfaac",
            border: "none",
            borderRadius: "5px",
            width: "100px",
            fontSize: "15px",
          }}
          onClick={increment}
        >
          Increment
        </button>
        <button
          style={{
            backgroundColor: "#faacac",
            border: "none",
            borderRadius: "5px",
            width: "100px",
            fontSize: "15px",
          }}
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Counter;
