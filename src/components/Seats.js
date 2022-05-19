import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Footer from "./Footer";

import styled from "styled-components";

export default function Seats(){
    const { id } = useParams();
    const[session, setSession] = useState({});
    const[seats, setSeats] = useState ([]);
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`);
        promise.then((re) => {
            console.log(re.data);
            setSession(re.data);
            setSeats(re.data.seats);
        });
    }, []);

    if(seats.length > 0){
        return(
            <>
                <Footer>
                    <div className="movie">
                        <img  src={session.movie.posterURL} />
                    </div>
                    <p>
                        <p>{session.movie.title}</p>
                        <p>{session.day.weekday} - {session.name}</p>
                    </p>
                </Footer>
            </>
        );
    }else{
        return(
            <>
                <Footer>
                    <p>
                        Carregando...
                    </p>
                </Footer>
            </>
        );
    }
}