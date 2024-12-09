import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherCard.css'
const WeatherCard = () => {
  const [city, setCity] = useState('Maharashtra'); 
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const API_KEY = 'b78223a6bbab4371dbfd6ec32d664944'; 

  const fetchWeather = async (cityName) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);
      setError('');
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);
    }
  };

 
  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = () => {
    if (city.trim() !== '') {
      fetchWeather(city);
    }
  };

  return (
    <div className="weather-container">
      <div className="weather-header">
        <span>{new Date().toLocaleDateString()}</span>
        <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
      </div>
      {weather && (
        <div className="weather-content">
          <div className="weather-icon">
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="Weather Icon"
            />
            <p>{weather.weather[0].description}</p>
          </div>
          <div className="weather-info">
            <h3>{weather.main.temp}°C</h3>
            <p>{weather.main.pressure} mbar <br />Pressure</p>
          </div>
          <div className="weather-details">
            <p>{weather.wind.speed} km/h <br />Wind</p>
            <p>{weather.main.humidity}% <br />Humidity</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
