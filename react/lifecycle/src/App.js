import React, { useState } from "react";
import LifecycleLogger from "./components/LifecycleLogger";

const App = () => {
  const [showLogger, setShowLogger] = useState(true);

  const toggleLogger = () => {
    setShowLogger(!showLogger);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <button
        style={{
          backgroundColor: "#faacac",
          width: "350px",
          height: "50px",
          border: "none",
          fontSize: "20px",
          borderRadius: "10px",
          position: "fixed",
          bottom: 50,
        }}
        onClick={toggleLogger}
      >
        Toggle Logger
      </button>
      {showLogger && <LifecycleLogger />}
    </div>
  );
};

export default App;
