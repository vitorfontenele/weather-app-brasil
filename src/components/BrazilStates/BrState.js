import React from "react";

export default function BrState(props){
    const handleClick = () => {
        props.setBrMainState({...props.stateInfo});
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