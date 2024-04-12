import React, { useState } from "react";

function AuthComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toggleLogin = () => {
    if (isLoggedIn) {
      setUsername("");
      setPassword("");
    }
    setIsLoggedIn(!isLoggedIn);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      {isLoggedIn ? (
        <div>
          <button
            style={{
              borderWidth: "1px",
              height: "50px",
              width: "150px",
              backgroundColor: "#faacac",
            }}
            onClick={toggleLogin}
          >
            Log Out
          </button>
          <p>Logged in</p>
        </div>
      ) : (
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
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            style={{
              borderWidth: "1px",
              height: "50px",
              width: "150px",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            style={{
              borderWidth: "1px",
              height: "50px",
              width: "150px",
            }}
          />
          <button
            style={{
              borderWidth: "1px",
              height: "50px",
              width: "150px",
              backgroundColor: "#acfaac",
            }}
            onClick={toggleLogin}
          >
            Log In
          </button>
          <p>Logged Out</p>
        </div>
      )}
    </div>
  );
}

export default AuthComponent;
