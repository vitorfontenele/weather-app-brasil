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
            let displayCities = stateCities.slice(0, 10);
            
            let queryIds = displayCities.map(city => city["id"]).join(",");

            let data;
            try {
                const url = `http://api.openweathermap.org/data/2.5/group?id=${queryIds}&units;=metric&appid=fe772bb5ff9d8486d890ff783f7fcf86`;
                const response = await fetch(url);
                data = await response.json();
            } catch {
                console.log("Erro ao preencher cidades");
            }
            console.log(data);
            props.setBrMainCities([...displayCities]);
        }
        renderCities();
    }, [props.brMainState]);

    // const getData = async (queryIds) => {
    //     //Call Open Weather API
        

    //     return data;
    // }

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
    };
    
    return (
        <section id="cards-section">
            {props.brMainCities.map(city => {
                return (
                    <div className="card">
                        <h3 className="card-city">{city["name"]} <span className="card-state">{props.brMainState["abbr"]}</span></h3>
                        <div className="card-info">
                            <div className="card-image-info">
                                <img className="card-image" src="http://openweathermap.org/img/wn/10d@2x.png" alt="" />
                            </div>
                            <div className="card-text-info">
                                <h4 className="card-temperature">25ºC</h4>
                                <h5 className="card-condition">Nuvens</h5>
                                <h6 className="card-max-min">30ºC / 19ºC</h6>
                            </div>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}