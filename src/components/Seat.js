import React from "react";

import styled from "styled-components";

export default function Seat({ name, isAvailable }){
    const [color, setColor] = React.useState("#c3cfd9");

    if(isAvailable === true){
        return(
            <SeaT 
                backcolor={color} 
                onClick={(color==="#c3cfd9") ? (() => setColor("#8dd7cf")) : (() => setColor("#c3cfd9"))}
            >
                {name}
            </SeaT>
        );
    }else{
        return(
            <SeaT backcolor="#FBE192">
                {name}
            </SeaT>
        );
    }
}

const SeaT = styled.button`
    width: 26px;
    height: 26px;
    background-color: ${props => props.backcolor};
    border: 1px solid #808f9d;
    border-radius: 12px;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 11px;
    margin: 0px 3.5px 19px 3.5px;
`