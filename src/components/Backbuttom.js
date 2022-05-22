import { useNavigate } from "react-router-dom";

import styled from "styled-components";

export default function Backbutton(){
    const navigate = useNavigate();

    return(
        <Button onClick={() => navigate(-1)}> 
            <ion-icon name="arrow-back-circle"></ion-icon>
        </Button>
    );
}

const Button = styled.button`
    width: auto;
    height: auto;
    border: none;
    border-radius: 10px;
    background: none;
    font-weight: 400;
    font-size: 18px;
    color: #293845;
    position: fixed;
    top: 18px;
    left: 14px;
    z-index: 2;
    ion-icon{
        width: 32px;
        height: 32px;
        color: #E8833A;
    }
`