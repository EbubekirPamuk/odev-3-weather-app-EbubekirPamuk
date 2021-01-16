import { useState, createContext } from "react";
export const ForecastContext = createContext(null);

export const ForecastProvider = ({ children }) => {
  const [selectKey, setSelectKey] = useState("Diyarbakır");
  const [final, setFinal] = useState([]);
  const states = {
    selectKey,
    setSelectKey,
    final,
    setFinal,
  };

  return (
    <ForecastContext.Provider value={states}>
      {children}
    </ForecastContext.Provider>
  );
};
