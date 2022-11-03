import './App.css';
import {useState} from 'react';
import brStates from './brStates.json';
import brCities from './brCities.json';
import DisplaySection from './components/DisplaySection/DisplaySection.js';
import Cities from './components/Cities/Cities.js';
import CityPicker from './components/CityPicker/CityPicker';

function App() {
  const [statesInfo, setStatesInfo] = useState(brStates);
  const [citiesInfo, setCitiesInfo] = useState(brCities);
  const [brMainState, setBrMainState] = useState({"temperature": "",
                                                  "condition": {"main": "Clear"},
                                                  "capital": "São Paulo",
                                                  "abbr": "SP"});
  const [brMainCities, setBrMainCities] = useState([]);
  const [brState, setBrState] = useState("São Paulo");
  const [brCity, setBrCity] = useState("");
  const [brCityData, setBrCityData] = useState({});
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");

  return (
    <div>
      <DisplaySection
        statesInfo={statesInfo}
        setStatesInfo={setStatesInfo}
        brMainState={brMainState}
        setBrMainState={setBrMainState}
        hour={hour}
        setHour={setHour}
        day={day}
        setDay={setDay}
      />
      <Cities 
        brMainState={brMainState}
        brMainCities={brMainCities}
        setBrMainCities={setBrMainCities}
        citiesInfo={citiesInfo}
      />
      <CityPicker 
        statesInfo={statesInfo}
        citiesInfo={citiesInfo}
        brState={brState}
        setBrState={setBrState}
        brCity={brCity}
        setBrCity={setBrCity}
        brCityData={brCityData}
        setBrCityData={setBrCityData}
      />
    </div>
  );
}

export default App;
