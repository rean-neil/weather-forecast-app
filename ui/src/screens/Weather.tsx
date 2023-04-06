import { formatDate, kelvinToFahrenheit } from "../util";
import { getCityWeatherForecast, getGeoLocation } from "../api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { TopBar } from "../components";

const Weather = () => {
  const { city } = useParams();
  const [cityDetails, setCityDetails] = useState<any[]>([]);
  const [refresh, setRefresh] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getGeoLocation(city as string)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const cities = data.data;
        cities.forEach((city: any) => {
          getCityWeatherForecast(city.longitude, city.latitude)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              city.forecasts = data.list;
              setRefresh((prev: number) => prev + 1);
            });
        });
        setCityDetails(cities);
      });
  }, [city]);

  return (
    <div>
      <TopBar />
      <div className="result-container">
        {cityDetails.map((city, index0) => (
          <div key={index0}>
            {cityDetails && (
              <p className="city-name">
                {city?.city}, {city?.country}
              </p>
            )}

            <table>
              <thead>
                <tr>
                  <th>Date (mm/dd/yyyy)</th>
                  <th>Temp (F)</th>
                  <th>Description</th>
                  <th>Main</th>
                  <th>Pressure</th>
                  <th>Humidity</th>
                </tr>
              </thead>
              <tbody>
                {city.forecasts?.map((weather: any, index: number) => (
                  <tr key={index}>
                    <td>{formatDate(weather.dt_txt)}</td>
                    <td>{kelvinToFahrenheit(weather.main.temp)}</td>
                    <td>{weather.weather[0].description}</td>
                    <td>{weather.weather[0].main}</td>
                    <td>{weather.main.pressure}</td>
                    <td>{weather.main.humidity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
        <div>
          <button onClick={() => navigate("/")}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default Weather;
