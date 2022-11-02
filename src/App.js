import './App.css';
import {useState} from 'react';
import brStates from './brStates.json';
import brCities from './brCities.json';
import DisplaySection from './components/DisplaySection/DisplaySection.js';
import Cities from './components/Cities/Cities.js';

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
  const [day, setDay] = useState("");
  const [hour, setHour] = useState("");

  const handleBrState = (event) => {
    setBrState(event.target.value);
    //console.log(brState);
    console.log(statesInfo);
  }

  const handleBrCity = (event) => {
    setBrCity(event.target.value);
    console.log(brCity);
  }

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
      <select onChange={handleBrState} value={brState}>
        {brStates.map(state => {
          return <option value={state.name}>{state.name}</option>
        })}
      </select>
      <select onChange={handleBrCity} value={brCity}>
        {brCities
        .filter(city => city["state"] === brState)
        .map(city => {
          return <option value={city.name}>{city.name}</option>
        })}
      </select>
      <br/>
    </div>
  );
}

export default App;
