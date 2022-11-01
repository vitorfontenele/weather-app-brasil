import React from "react";
import "../BrazilMap/BrazilMap.js";
import BrazilMap from "../BrazilMap/BrazilMap.js";
import './styled.css'

export default function DisplaySection(){
    return (
        <section id="display-section">
            <div id="brazil-map-container">
                <div id="map-label">Clique em um estado</div>
                <BrazilMap width={150} height={150}/>
            </div>
            <div id="capital-info-container">
                <div id="bg"></div>
                <div id="time" className="content">23h02</div>
                    <div id="location-group" className="content">
                    <div id="state-capital">São Paulo</div>
                    <div id="state-abbr">SP</div>
                    <div id="day">Sábado, 22 de outubro</div>
                </div>
                <div id="weather-group" className="content">
                    <div id="temperature">28ºC</div>
                    <div id="condition">Claro</div>
                    <img id="image-condition" src="https://openweathermap.org/img/wn/02d@2x.png" alt="" />
                </div>
                <a id="more-cities-anchor" href="" className="content">Mais cidades em SP</a>
             </div>
        </section>
    )
}