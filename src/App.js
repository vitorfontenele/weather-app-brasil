import './App.css';
import {useState} from 'react';
import brStates from './brStates.json';
import brCities from './brCities.json';
import DisplaySection from './components/DisplaySection/DisplaySection.js';

function App() {
  const [statesInfo, setStatesInfo] = useState(brStates);
  const [brMainState, setBrMainState] = useState({"temperature": "20",
                                                  "condition": {"main": "Clear"},
                                                  "capital": "São Paulo",
                                                  "abbr": "SP"});
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

  const renderCities = () => {
    // Cities from selected state
    let stateCities = brCities
    .filter(city => city["state"] === brState);

    // Shuffling array of state cities
    shuffleArray(stateCities);

    //Taking only ten cities
    let displayCities = stateCities.slice(0, 10);

    return displayCities;
  }

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  return (
    <div>
      {/* {renderCities().map(city => {
        return <p>{city["name"]}</p>
      })} */}
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
