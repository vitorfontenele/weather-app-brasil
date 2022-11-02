import React from "react";

export default function BrState(props){
    const handleClick = () => {
        let bgImageLink = "";
        const mainCondition = props.stateInfo["condition"]["main"];
        const icon = props.stateInfo["condition"]["icon"];

        if (mainCondition === "Clear") {
            if (icon.includes("d")) {
                bgImageLink = `url('../src/assets/${mainCondition}-day.png')`;
            } else {
                bgImageLink = `url('../src/assets/${mainCondition}-night.png')`;
            }
        } else if (mainCondition === "Clouds") {
            if (icon.includes("d")) {
                bgImageLink = `url('../src/assets/${mainCondition}-day.png')`;
            } else {
                bgImageLink = `url('../src/assets/${mainCondition}-night.png')`;
            }
        } else {
            bgImageLink = `url('../src/assets/${mainCondition}.png')`;
        }

        props.setBrMainState({...props.stateInfo, bgImageLink});
    }

    return(
       <path 
            id={props.id}
            className={props.classes}
            onClick={handleClick}
            fill="#999"
            stroke="#fff"
            strokeOpacity={1}
            strokeWidth={282.23677982}
            strokeMiterlimit={4}
            strokeDasharray="none"
            d={props.d}
       /> 
    )
}