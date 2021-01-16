import SelectCities from "./components/SelectCities";
import Forecasts from "./components/Forecasts";
import { ForecastProvider } from "./components/ForecastContext";
import './App.css';

function App() {
  return (
    <div className="App">
      <ForecastProvider>
        <SelectCities />
        <Forecasts />
      </ForecastProvider>
    </div>
  );
}

export default App;
