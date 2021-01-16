import { useContext, useEffect } from "react";
import { ForecastContext } from "./ForecastContext";
import { Select } from "../essential/Select";

const Forecast = () => {
  const { selectKey, final, setFinal } = useContext(ForecastContext);

  useEffect(() => {
    Select(selectKey).then((response) => {
      setFinal(response);
    });
  }, [selectKey, setFinal]);

  return (
    <div className="forecastsContainer">
      
      {final.map((finals, index) => {
        return (
          <div
            className={
              index === 0 ? "forecastContainer-currentDay" : "forecastContainer"
            }
            key={index}
          >
            <p className="date">{finals.dateTime}</p>
            <img
              src={`https://www.weatherbit.io/static/img/icons/${finals.iconCode}.png`}
              alt=""
            />
            <div className="minMax">
              <p className="max">
                {finals.maxTemp}
                <span>&#176;</span>
              </p>
              <p className="min">
                {finals.minTemp}
                <span>&#176;</span>
              </p>
            </div>
            </div>
        );
      })}
    </div>
  );
};

export default Forecast;