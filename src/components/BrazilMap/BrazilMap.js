import React from "react";
import { useEffect } from "react";
import "./styled.css";
import BrState from "../BrazilStates/BrState";
import statepaths from "../BrazilStates/statepaths.json";

export default function BrazilMap(props){
    const setBgImageLink = (conditionObject) => {
      // let bgImageLink = "";
      const atmosphereConditions = ["Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Ash", "Squall", "Tornado"];
      const mainCondition = conditionObject["main"];
      const icon = conditionObject["icon"];

      if (mainCondition === "Clear") {
          if (icon.includes("d")) {
              return `/assets/${mainCondition}-day.png`;
          } else {
              return `/assets/${mainCondition}-night.png`;
          }
      } else if (mainCondition === "Clouds") {
          if (icon.includes("d")) {
              return `/assets/${mainCondition}-day.png`;
          } else {
              return `/assets/${mainCondition}-night.png`;
          }
      } else if (atmosphereConditions.includes(mainCondition)) {
          return `/assets/Atmosphere.png`;
      } else {
          return `/assets/${mainCondition}.png`;
      }

      // props.setBrMainState({...props.stateInfo, bgImageLink});
    }

    useEffect(() => {
      async function paintMap() {
        //States ids (for each query)
        let queryIds1 = "";
        let queryIds2 = "";

        //Each group of states
        let group1 = props.statesInfo.slice(0, props.statesInfo.length / 2);
        let group2 = props.statesInfo.slice(props.statesInfo.length / 2);

        //Filling the ids in the groups
        group1.map((element) => {
          queryIds1 += `${String(element["id"])},`;
        });
        group2.map((element) => {
          queryIds2 += `${String(element["id"])},`;
        });

        //Adjust
        queryIds1 = queryIds1.slice(0, -1);
        queryIds2 = queryIds2.slice(0, -1);

        //URL for each query
        const url1 = `http://api.openweathermap.org/data/2.5/group?id=${queryIds1}&units;=metric&appid=fe772bb5ff9d8486d890ff783f7fcf86`;
        const url2 = `http://api.openweathermap.org/data/2.5/group?id=${queryIds2}&units;=metric&appid=fe772bb5ff9d8486d890ff783f7fcf86`;

        //Call Open Weather API
        let data1;
        let data2;
        try {
          let response1 = await fetch(url1);
          data1 = await response1.json();
          let response2 = await fetch(url2);
          data2 = await response2.json();
        } catch {
          console.log("Erro ao colorir mapa");
        }
      
        const fullData = data1["list"].concat(data2["list"]);
        const generalInfo = [...props.statesInfo];

        fullData.map((element, index) => {
          let temperature = KelvinToCelsius(element["main"]["temp"]);
          generalInfo[index]["temperature"] = Math.round(temperature);
          generalInfo[index]["humidity"] = element["main"]["humidity"];
          generalInfo[index]["condition"] = element["weather"][0];
          generalInfo[index]["bgImageLink"] = setBgImageLink(element["weather"][0]);
          //console.log(element["weather"][0])
          // generalInfo[index]["sys"] = element["sys"];
          if (temperature > 35) {
            generalInfo[index]["colorClass"] = "very-hot"
          } else if (temperature <= 35 && temperature > 25) {
            generalInfo[index]["colorClass"] = "warm"
          } else if (temperature <= 25 && temperature > 15) {
            generalInfo[index]["colorClass"] = "regular"
          } else if (temperature <= 15 && temperature > 5) {
            generalInfo[index]["colorClass"] = "cold"
          } else {
            generalInfo[index]["colorClass"] = "very-cold"
          }
        })
        props.setStatesInfo([...generalInfo]);
        props.setBrMainState({...props.statesInfo[25]});
      }
      paintMap();
    }, [])


    const KelvinToCelsius = (temperature) => temperature - 273;

    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      width="220mm"
      height="194mm"
      viewBox="0 0 220000 194010"
      id="svg2"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      // {...props}
    >
      <g id="Estados">
        {props.statesInfo.map((state) => {
          return <BrState 
                    id={state["pathId"]} 
                    key={state["pathId"]}
                    classes={`state str0 ${state["colorClass"]}`}
                    d={statepaths[state["name"]]}
                    stateInfo={{...state}}
                    // index={index}
                    brMainState={props.brMainState}
                    setBrMainState={props.setBrMainState}
                  />
        })}
      </g>
    </svg>
  )
}