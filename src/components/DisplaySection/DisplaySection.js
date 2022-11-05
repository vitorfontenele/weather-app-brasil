import React, { useEffect } from "react";
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

    useEffect(() => {
        const updateDay = () => {
            let weekDays = {
              0: "Domingo",
              1: "Segunda-feira",
              2: "Terça-feira",
              3: "Quarta-feira",
              4: "Quinta-feira",
              5: "Sexta-feira",
              6: "Sábado",
            };
            let months = {
              0: "Janeiro",
              1: "Fevereiro",
              2: "Março",
              3: "Abril",
              4: "Maio",
              5: "Junho",
              6: "Julho",
              7: "Agosto",
              8: "Setembro",
              9: "Outubro",
              10: "Novembro",
              11: "Dezembro",
            };
          
            let now = new Date(Date.now());
            let dayOfWeek = weekDays[now.getDay()];
            let dayOfMonth = now.getDate();
            let month = months[now.getMonth()];

            props.setDay(`${dayOfWeek}, ${dayOfMonth} de ${month}`);
        }
        updateDay();
    }, []);

    useEffect(() => {
        const updateHour = () => {
            let now;
            setInterval(() => {
              now = new Date(Date.now());
              let hours =
                now.getHours() < 10
                  ? "0" + String(now.getHours())
                  : String(now.getHours());
              let minutes =
                now.getMinutes() < 10
                  ? "0" + String(now.getMinutes())
                  : String(now.getMinutes());
              props.setHour(`${hours}h${minutes}`);
            }, 1000);
        }
        updateHour();
    }, [props.hour])

    //Icone de tempo
    const pic = `https://openweathermap.org/img/wn/${props.brMainState["condition"]["icon"]}@2x.png`;

    return (
        <section id="display-section">
            <div id="bg" style={{backgroundImage: `url(${props.brMainState["bgImageLink"]})`}}></div>
            <div id="bg2"/>
            <div id="brazil-map-container">
                <div id="map-label">Clique em um estado</div>
                <BrazilMap
                    statesInfo={props.statesInfo}
                    setStatesInfo={props.setStatesInfo}
                    brMainState={props.brMainState}
                    setBrMainState={props.setBrMainState}
                />
                <div id="colors-group">
                    <div id="colors-title">Temperatura nas capitais</div>
                    <div id="colors">
                        <div className="color-element el-1"></div>
                        <div className="color-element el-2"></div>
                        <div className="color-element el-3"></div>
                        <div className="color-element el-4"></div>
                        <div className="color-element el-5"></div>
                    </div>
                    <div id="temperatures">
                        <div>5ºC</div>
                        <div>15ºC</div>
                        <div>25ºC</div>
                        <div>35ºC</div>
                    </div>
                </div>
            </div>
            <div id="capital-info-container">
                {/* <div id="bg" style={{backgroundImage: `url(${props.brMainState["bgImageLink"]})`}}></div> */}
                {/* <img src={"/assets/Rain.png"} alt='Apagar!'/> */}
                <div id="time" className="content">{props.hour}</div>
                    <div id="location-group" className="content">
                    <div id="state-capital">{props.brMainState["capital"]}</div>
                    <div id="state-abbr">{props.brMainState["abbr"]}</div>
                    <div id="day">{props.day}</div>
                </div>
                <div id="weather-group" className="content">
                    <div id="temperature">{`${props.brMainState["temperature"]}ºC`}</div> 
                    <div id="condition">{conditionToPT(props.brMainState["condition"]["main"])}</div>
                    <img id="image-condition" src={pic} alt="Ícone de tempo" />
                </div>
                <a id="more-cities-anchor" href="#cards-section" className="content">{`Mais cidades em ${props.brMainState["abbr"]}`}</a>
             </div>
        </section>
    )
}