import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

export default function Form({ id, title, date, session }){
    const[purchaser, setPurchaser] = useState ("");
    const[cpf, setCpf] = useState("");
    const navigate = useNavigate();

    function reservation(event){
        event.preventDefault();
        const seats = (id.filter((seat) => seat.color === "#8dd7cf"));
        const obj = {
            ids: seats.map((seat) => seat.id),
            name: purchaser,
            cpf: cpf
        }
        const seatsname = seats.map((seat) => seat.name);
        setPurchaser("");
        setCpf("");
        axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", obj);
        navigate("/sucesso", {state:{
                                ...obj, 
                                names: seatsname,
                                title: title,
                                date: date,
                                session: session
                            }});
    }

    function seatempty(event){
        event.preventDefault();
        return alert("Escolha um assento");
    }

    function validSeat(){
        const idseats = (id.filter((seat) => seat.color === "#8dd7cf"));
        console.log(idseats);
        if(idseats.length === 0){
            return false;
        }
        return true;
    }

    return(
        <Data onSubmit={validSeat() ? reservation : seatempty}>
            <label htmlFor="name">Nome do comprador:</label>
            <input
                type="text"
                id="name"
                placeholder="Digite seu nome..."
                value={purchaser}
                onChange={(e) => setPurchaser(e.target.value)}
                required
            />
            <label htmlFor="cpf">CPF do comprador:</label>
            <input
                type="text"
                id="cpf"
                placeholder="Digite seu CPF (apenas números)..."
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                pattern="[0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[-][0-9]{2}"
                required
            />
            <button type="submit">Reservar assento(s)</button>
        </Data>
    );
}

const Data = styled.form`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    label{
        width: 92%;
        height: 25px;
        font-weight: 400;
        font-size: 18px;
        color: #293845;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
    }
    input{
        width: 92%;
        height: 51px;
        border: 1px solid #D4D4D4;
        border-radius: 3px;
        font-weight: 400;
        font-style: italic;
        font-size: 18px;
        color: #AFAFAF;
        margin-bottom: 8px;
        padding-left: 15px;
        box-sizing: border-box;
    }
    button{
        width: 225px;
        height: 42px;
        margin-top: 40px;
        margin-bottom: 18px;
        border: none;
        border-radius: 3px;
        background-color: #e8833a;
        color: #ffffff;
        font-weight: 400;
        font-size: 18px
    }
`