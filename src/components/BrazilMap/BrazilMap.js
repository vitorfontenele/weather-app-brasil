import React from "react";
import { useEffect } from "react";
import brStates from '../../brStates.json';
import Rondonia from "../BrazilStates/Rondonia";
import Acre from "../BrazilStates/Acre";
import Amazonas from "../BrazilStates/Amazonas";
import Roraima from "../BrazilStates/Roraima";
import Amapa from "../BrazilStates/Amapa";
import Tocantins from "../BrazilStates/Tocantins";
import MatoGrosso from "../BrazilStates/MatoGrosso";
import Goias from "../BrazilStates/Goias";
import MatoGrossoDoSul from "../BrazilStates/MatoGrossoDoSul";
import MinasGerais from "../BrazilStates/MinasGerais";
import Parana from "../BrazilStates/Parana";
import RioGrandeDoSul from "../BrazilStates/RioGrandeDoSul";
import Bahia from "../BrazilStates/Bahia";
import Piaui from "../BrazilStates/Piaui";
import Ceara from "../BrazilStates/Ceara";
import RioGrandeDoNorte from "../BrazilStates/RioGrandeDoNorte";
import Alagoas from "../BrazilStates/Alagoas";
import Sergipe from "../BrazilStates/Sergipe";
import DistritoFederal from "../BrazilStates/DistritoFederal";
import Pernambuco from "../BrazilStates/Pernambuco";
import Maranhao from "../BrazilStates/Maranhao";
import Para from "../BrazilStates/Para";
import SaoPaulo from "../BrazilStates/SaoPaulo";
import RioDeJaneiro from "../BrazilStates/RioDeJaneiro";
import EspiritoSanto from "../BrazilStates/EspiritoSanto";
import SantaCatarina from "../BrazilStates/SantaCatarina";
import Paraiba from "../BrazilStates/Paraiba";
import "./styled.css";

export default function BrazilMap(props){
    useEffect(() => {
      async function paintMap() {
        //States ids (for each query)
        let queryIds1 = "";
        let queryIds2 = "";

        //Each group of states
        let group1 = brStates.slice(0, brStates.length / 2);
        let group2 = brStates.slice(brStates.length / 2);

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
        const classes = {};

        fullData.map((element, index) => {
          let state = brStates[index]["name"];
          let temperature = KelvinToCelsius(element["main"]["temp"]);
          // let state = document.getElementById(key);
          // idStates[index]["temperature"] = `${Math.floor(temperature)}ºC`;
          // idStates[index]["condition"] = element["weather"][0];
          // idStates[index]["sys"] = element["sys"];
          // console.log(idStates[index]["capital"], temperature);
          // console.log(temperature)
          if (temperature > 35) {
            classes[state] = "very-hot"
          } else if (temperature <= 35 && temperature > 25) {
            classes[state] = "warm";
          } else if (temperature <= 25 && temperature > 15) {
            classes[state] = "regular"
          } else if (temperature <= 15 && temperature > 5) {
            classes[state] = "cold";
          } else {
            classes[state] = "very-cold"
          }
        })
        props.setColorClasses({...classes});
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
        <Rondonia colorClass={props.colorClasses["Rondônia"]}/>
        <Acre />
        <Amazonas />
        <Roraima />
        <Amapa />
        <Tocantins />
        <MatoGrosso />
        <Goias />
        <MatoGrossoDoSul />
        <MinasGerais />
        <Parana />
        <RioGrandeDoSul />
        <Bahia />
        <Piaui />
        <Ceara />
        <RioGrandeDoNorte />
        <Alagoas />
        <Sergipe />
        <DistritoFederal />
        <Pernambuco />
        <Maranhao />
        <Para />
        <SaoPaulo />
        <RioDeJaneiro />
        <EspiritoSanto />
        <SantaCatarina />
        <Paraiba />
      </g>
    </svg>
  )
}