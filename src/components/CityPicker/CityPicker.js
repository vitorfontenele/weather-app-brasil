import React from 'react';
import City from '../City/City';
import './style.css';

export default function CityPicker(props){
    const handleBrState = (event) => {
        props.setBrState(event.target.value);
    }
    
    const handleBrCity = (event) => {
        props.setBrCity(event.target.value);
    }

    const handleClick = async () => {
        const cityData = props.citiesInfo
            .filter(city => city["state"] === props.brState)
            .filter(city => city["name"] === props.brCity);
        if (cityData.length < 1){return ;}
        const queryId = cityData[0]["id"];
        const url = `https://api.openweathermap.org/data/2.5/group?id=${queryId}&units;=metric&appid=fe772bb5ff9d8486d890ff783f7fcf86`;
        let data;
        try {
            const response = await fetch(url);
            data = await response.json();
        } catch {
            console.log("Erro ao mostrar condições em cidade.");
        }
        const bgImageLink = setBgImageLink(data["list"][0]["weather"][0]);
        data["list"][0]["bgImageLink"] = bgImageLink;
        // props.setBrCity(event.target.value);
        const stateAbbr = props.statesInfo.filter(state => state["name"] === props.brState)[0]['abbr'];
        data["list"][0]["stateAbbr"] = stateAbbr;
        props.setBrCityData({...data["list"][0]})
        console.log(props.statesInfo);
        
    }  

    const setBgImageLink = (conditionObject) => {
        // let bgImageLink = "";
        console.log(conditionObject);
        const atmosphereConditions = ["Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Ash", "Squall", "Tornado"];
        const mainCondition = conditionObject["main"];
        const icon = conditionObject["icon"];
  
        if (mainCondition === "Clear") {
            if (icon.includes("d")) {
                return `/img-picker/${mainCondition}-day.png`;
            } else {
                return `/img-picker/${mainCondition}-night.png`;
            }
        } else if (mainCondition === "Clouds") {
            if (icon.includes("d")) {
                return `/img-picker/${mainCondition}-day.png`;
            } else {
                return `/img-picker/${mainCondition}-night.png`;
            }
        } else if (atmosphereConditions.includes(mainCondition)) {
            return `/img-picker/Atmosphere.png`;
        } else {
            return `/img-picker/${mainCondition}.png`;
        }
        
        // props.setBrMainState({...props.stateInfo, bgImageLink});
      }
    
    return (
        <section id="city-picker-section" style={{backgroundImage: `url(${props.brCityData["bgImageLink"]})`}}>
            <div id="city-picker-content">
                <h2 id="city-picker-title">Escolha uma cidade de qualquer estado</h2>
                <select id='select-state' className="element" onChange={handleBrState} value={props.brState}>
                    <option value={""}>--Estado--</option>
                    {props.statesInfo
                            .sort((a, b) => 
                                (a["name"] < b["name"]) ? -1 : 1
                            )
                            .map(state => {
                        return <option key={state.name} value={state.name}>{state.name}</option>
                    })}
                </select>
                <select id='select-city' className="element" onChange={handleBrCity} value={props.brCity}>
                    <option value={""}>--Cidade--</option>
                    {props.citiesInfo
                    .filter(city => city["state"] === props.brState)
                    .sort((a, b) => a["name"] < b["name"] ? -1 : 1)
                    .map(city => {
                        return <option key={city.id} value={city.name}>{city.name}</option>
                    })}
                </select>
                <button className="element" onClick={handleClick}>Ver dados</button>
                {props.brCityData["main"] ? 
                    <City brCityData={props.brCityData}/> : <></>}
            </div>
        </section>
    )
}