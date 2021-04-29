export interface Friend {
  idx?: number;
  name: string;
  age: number;
  nickname: string;
}

export interface WeatherInfo {
  idx?: number;
  lon: number;
  lat: number;
  w_main: string;
  description: string;
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  sunrise: number;
  sunset: number;
  country_id: number;
  country_name: string;
  createdAt?: Date;
}

// export const weatherKeys = {
// }
export interface Day {
  year: number;
  month: number;
  day?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export interface EventInfo {
  idx: number;
  name: string;
  title: string;
  content: string;
  email: string;
  color: string;
  date: string;
  time: string;
}

export interface UserInfo {
  loginToken: string;
  email: string;
  name: string;
  color: string;
}
