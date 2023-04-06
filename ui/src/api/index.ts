export const getAccessToken = (code: string) => {
  return fetch(
    process.env.REACT_APP_API_BASE_URL + "/getAccessToken?code=" + code,
    {
      method: "GET",
    }
  );
};

export const getUserData = () => {
  return fetch(process.env.REACT_APP_API_BASE_URL + "/getUserData", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });
};

export const getGeoLocation = (city: string) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3038d41817mshe9ebb47037edf95p137bc1jsn6817a04ea84e",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
  return fetch(
    process.env.REACT_APP_GEOLOCATION_API +
      `/cities?minPopulation=200000&namePrefix=${city}`,
    options
  );
};

export const getCityWeatherForecast = (lon: number, lat: number) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
    {
      method: "GET",
    }
  );
};
