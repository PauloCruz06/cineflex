import React from "react";

import styled from "styled-components";

export default function Seat({ name, isAvailable, index, book }){
    const [color, setColor] = React.useState("#c3cfd9");

    function addColor(color){
        setColor(color);
        book(color, index);
    }

    if(isAvailable === true){
        return(
            <SeaT 
                backcolor={color} 
                onClick={(color==="#c3cfd9") ? (() => addColor("#8dd7cf")) : (() => addColor("#c3cfd9"))}
            >
                {name}
            </SeaT>
        );
    }else{
        return(
            <SeaT backcolor="#FBE192" onClick={() => alert("Esse assento não está disponível")}>
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