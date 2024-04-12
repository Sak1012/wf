import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const apiKey = "99f32e8bee50d642327c2a1e91a66e2a";
  const city = "London"; // Or any other city you want to get weather data for

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
        );
        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
        } else {
          console.error("Failed to fetch weather data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error.message);
      }
    };

    fetchWeatherData();
  }, [city, apiKey]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {weatherData ? (
        <div>
          <h2>Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp} °C</p>
          <p>Description: {weatherData.weather[0].description}</p>
          {/* Add more weather information here if needed */}
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
