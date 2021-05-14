import React, { useState, useEffect } from "react";
import axios from "axios";
import { WeatherInfo } from "../types/types";

const requestOption = (location: string) => {
  return {
    headers: {
      "Context-Type": "application/json",
    },
    body: {
      location: location,
    },
  };
};

const GetWeather = () => {
  const [location, setLocation] = useState("Seoul");
  const [weatherData, setWeatherData] = useState<WeatherInfo>();
  const getWeatherInfo = async (): Promise<void> => {
    try {
      const response = await axios.post(
        // "https://us-central1-vaulted-bazaar-304910.cloudfunctions.net/getDatas/Weather",
        `http://localhost:5000/vaulted-bazaar-304910/us-central1/getDatas/Weather`,
        requestOption(location)
      );
      setWeatherData(response.data);
    } catch (err) {
      setWeatherData(undefined);
      const response = err.response;
      switch (response.data) {
        case "Not exist area":
          alert("존재하지 않는 지역입니다.");
          break;
        case "Request path contains unescaped characters":
          alert("영어로 적어주세요.");
          break;
        default:
          alert(response.data);
          break;
      }
    }
  };

  const changeLocation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const clickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    getWeatherInfo();
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <div>
      <input type="text" onChange={changeLocation} />
      <button onClick={clickButton}>찾기</button>
      {!weatherData ? (
        <div>없는 지역입니다.</div>
      ) : (
        <>
          <p>지역 : {weatherData.country_name}</p>
          <p>온도 : {Math.floor(weatherData.temp - 273.15)}</p>
          <p>체감 온도 : {Math.floor(weatherData.feels_like - 273.15)}</p>
        </>
      )}
    </div>
  );
};

export default GetWeather;
