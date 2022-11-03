import React from 'react';
import './styled.css';

export default function CityPicker(props){
    const handleBrState = (event) => {
        props.setBrState(event.target.value);
        //console.log(brState);
        // console.log(props.statesInfo);
      }
    
      const handleBrCity = async (event) => {
        props.setBrCity(event.target.value);
        // console.log(event.target.id);
        const queryId = "";
        const url = `http://api.openweathermap.org/data/2.5/group?id=${queryId}&units;=metric&appid=fe772bb5ff9d8486d890ff783f7fcf86`;
        let data;
        try {
            const response = await fetch(url);
            data = await response.json();
        } catch {
            console.log("Erro ao mostrar condições em cidade.");
        }
        console.log(data);
        // props.setBrCity(event.target.value);
        props.setBrCityData({...data["list"][0]})
      }
    
    return (
        <section id="city-picker-section">
            <select onChange={handleBrState} value={props.brState}>
                {props.statesInfo.map(state => {
                    return <option value={state.name}>{state.name}</option>
                })}
            </select>
            <select onChange={handleBrCity} value={props.brCity}>
                {props.citiesInfo
                .filter(city => city["state"] === props.brState)
                .map(city => {
                    return <option value={city.name}>{city.name}</option>
                })}
            </select>
            <h1>{props.brCityData["main"] ? props.brCityData["main"]["temp"] : ""}</h1>
        </section>
    )
}