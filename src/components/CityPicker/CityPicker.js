import React from 'react';
import City from '../City/City';
import './styled.css';

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
        const queryId = cityData[0]["id"];
        const url = `http://api.openweathermap.org/data/2.5/group?id=${queryId}&units;=metric&appid=fe772bb5ff9d8486d890ff783f7fcf86`;
        let data;
        try {
            const response = await fetch(url);
            data = await response.json();
        } catch {
            console.log("Erro ao mostrar condições em cidade.");
        }
        // console.log(data);
        // props.setBrCity(event.target.value);
        props.setBrCityData({...data["list"][0]})
    }  
    
    return (
        <section id="city-picker-section">
            <div id="city-picker-content">
                <h2 id="city-picker-title">Escolha uma cidade de qualquer estado</h2>
                <select className="element" onChange={handleBrState} value={props.brState}>
                    {props.statesInfo.map(state => {
                        return <option value={state.name}>{state.name}</option>
                    })}
                </select>
                <select className="element" onChange={handleBrCity} value={props.brCity}>
                    {props.citiesInfo
                    .filter(city => city["state"] === props.brState)
                    .map(city => {
                        return <option value={city.name}>{city.name}</option>
                    })}
                </select>
                <button className="element" onClick={handleClick}>Ver dados</button>
                {props.brCityData["main"] ? 
                    <City brCityData={props.brCityData}/> : <></>}
            </div>
        </section>
    )
}