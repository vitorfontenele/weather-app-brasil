import React from "react";
import "../BrazilMap/BrazilMap.js";
import BrazilMap from "../BrazilMap/BrazilMap.js";
import './styled.css'

export default function DisplaySection(props){
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

    return (
        <section id="display-section">
            <div id="brazil-map-container">
                <div id="map-label">Clique em um estado</div>
                <BrazilMap
                    statesInfo={props.statesInfo}
                    setStatesInfo={props.setStatesInfo}
                    brMainState={props.brMainState}
                    setBrMainState={props.setBrMainState}
                />
            </div>
            <div id="capital-info-container">
                <div id="bg"></div>
                <div id="time" className="content">23h02</div>
                    <div id="location-group" className="content">
                    <div id="state-capital">{props.brMainState["capital"]}</div>
                    <div id="state-abbr">{props.brMainState["abbr"]}</div>
                    <div id="day">Sábado, 22 de outubro</div>
                </div>
                <div id="weather-group" className="content">
                    <div id="temperature">{`${props.brMainState["temperature"]}ºC`}</div> 
                    <div id="condition">{conditionToPT(props.brMainState["condition"]["main"])}</div>
                    <img id="image-condition" src="https://openweathermap.org/img/wn/02d@2x.png" alt="" />
                </div>
                <a id="more-cities-anchor" href="" className="content">Mais cidades em SP</a>
             </div>
        </section>
    )
}