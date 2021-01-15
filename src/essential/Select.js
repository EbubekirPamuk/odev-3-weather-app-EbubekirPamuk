import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://api.weatherbit.io/v2.0/forecast/daily?city=";

export const Select = async (selectKey) => {
  try {
    const response = await axios.get(
      `${API_URL}${selectKey}&days=7&key=${API_KEY}`
    );
    const forecasts = response.data.data.map((forecast) => {
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const d = new Date(forecast.datetime);
      const date = days[d.getDay()];

      return {
        maxTemp: forecast.app_max_temp,
        minTemp: forecast.app_min_temp,
        dateTime: date,
        iconCode: forecast.weather.icon,
      };
    });
    return forecasts;
  } catch (e) {
    console.log(e);
  }
};