export interface UserModel {
  login: string;
  avatar_url: string;
  name: string;
}

export interface City {
  city: string;
  country: string;
  forecasts: Forecast[];
  longitude: number;
  latitude: number;
}

export interface Forecast {
  dt_txt: string;
  weather: Weather[];
  main: WeatherMain;
}

export interface Weather {
  main: string;
  description: string;
}

export interface WeatherMain {
  temp: number;
  pressure: number;
  humidity: number;
}
