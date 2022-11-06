import React, { useEffect } from "react";
import "./styled.css";

export default function Cities(props){
    useEffect(() => {
        async function renderCities(){
            let stateCities = props.citiesInfo
            .filter(city => city["state"] === props.brMainState["name"]);
        
            // Shuffling array of state cities
            shuffleArray(stateCities);
        
            //Taking only ten cities
            let displayCities = stateCities.slice(0, 12);
            
            let queryIds = displayCities.map(city => city["id"]).join(",");

            let data;
            try {
                const url = `http://api.openweathermap.org/data/2.5/group?id=${queryIds}&units;=metric&appid=fe772bb5ff9d8486d890ff783f7fcf86`;
                const response = await fetch(url);
                data = await response.json();
            } catch {
                console.log("Erro ao preencher cidades");
            }
            
            data["list"].map(city => {city["stateAbbr"] = props.brMainState["abbr"]});
            //console.log(data["list"]);
            props.setBrMainCities([...data["list"]]);
        }
        renderCities();
    }, [props.brMainState]);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
    };

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
    
    return (
        <section id="cards-section">
            <h2 id="cards-section-title">{`Tempo em cidades de ${props.brMainState["abbr"]}`}</h2>
            <div id="cards-grid">
            {props.brMainCities.map(city => {
                return (
                    <div key={city.id} className="card">
                        <h3 className="card-city">{city["name"]} <span className="card-state">{city["stateAbbr"]}</span></h3>
                        <div className="card-info">
                            <div className="card-image-info">
                                <img className="card-image" src={`http://openweathermap.org/img/wn/${city["weather"][0]["icon"]}@2x.png`} alt="" />
                            </div>
                            <div className="card-text-info">
                                <h4 className="card-temperature">{`${formatTemperature(city["main"]["temp"])}ºC`}</h4>
                                <h5 className="card-condition">{conditionToPT(city["weather"][0]["main"])}</h5>
                                <h6 className="card-max-min">{`Umidade: ${city["main"]["humidity"]}%`}</h6>
                            </div>
                        </div>
                    </div>
                )
            })}
            </div>
        </section>
    )
}