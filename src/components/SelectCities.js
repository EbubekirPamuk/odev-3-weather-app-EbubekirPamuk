import { Cities } from "../essential/Cities";
import { useContext } from "react";
import { ForecastContext } from "./ForecastContext";

const SelectCities = () => {
  const { setSelectKey } = useContext(ForecastContext);

  const changeHandler = (e) => {
    setSelectKey(e.target.value);
  };

  return (
    <div>
    <div className="break"></div>
    <div className="form" onChange={changeHandler}>
      {Cities}
    </div>
    </div>
  );
};

export default SelectCities;
