import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

export default function Form({ id }){
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
        setPurchaser("");
        setCpf("");
        console.log(seats.map((seat) => seat.id));
        console.log(obj);
        axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", obj);
        navigate("/sucesso");
    }

    return(
        <Data onSubmit={reservation}>
            <label htmlFor="name">Nome do comprador</label>
            <input
                type="text"
                id="name"
                value={purchaser}
                onChange={(e) => setPurchaser(e.target.value)}
                required
            />
            <label htmlFor="cpf">CPF do comprador</label>
            <input
                type="text"
                id="cpf"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
            />
            <button type="submit">Fazer reserva!</button>
        </Data>
    );
}

const Data = styled.form`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`