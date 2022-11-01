import React from "react";
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

export default function BrazilMap(){
    const alerta = () => {alert("Clicou em Rondônia!")}

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
        <Rondonia alerta={alerta}/>
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