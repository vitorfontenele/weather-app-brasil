import React from "react";

export default function City(props){ 
    const conditionToPT = (condition) => {
        const translatedConditions = {
            "Clouds": "Nuvens",
            "Clear": "Claro",
            "Drizzle": "Garoa",
            "Thunderstorm": "Tempestade",
            "Atmosphere": "Névoa",
            "Snow": "Neve",
            "Rain": "Chuva",
            "Mist": "Névoa",
            "Smoke": "Fumaça",
            "Haze": "Confusão",
            "Dust": "Pó",
            "Fog": "Névoa",
            "Sand": "Areia",
            "Dust": "Pó",
            "Ash": "Cinza",
            "Squall": "Tempestade",
            "Tornado": "Tornado"
        }
        return translatedConditions[condition];
    }
    
    const formatTemperature = (temperature) => {
        return Math.round(temperature - 273);
    }
    
    return(
        <div id="special-card" className="card">
            <h3 className="card-city">{props.brCityData["name"]} <span className="card-state">{props.brCityData["stateAbbr"]}</span></h3>
            <div className="card-info">
                <div className="card-image-info">
                    <img className="card-image" src={`http://openweathermap.org/img/wn/${props.brCityData["weather"][0]["icon"]}@2x.png`} alt="" />
                </div>
                <div className="card-text-info">
                    <h4 className="card-temperature">{`${formatTemperature(props.brCityData["main"]["temp"])}ºC`}</h4>
                    <h5 className="card-condition">{conditionToPT(props.brCityData["weather"][0]["main"])}</h5>
                    <h6 className="card-max-min">{`Umidade: ${props.brCityData["main"]["humidity"]}%`}</h6>
                </div>
            </div>
        </div>
    )
}