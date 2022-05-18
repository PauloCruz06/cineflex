import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Day from "../Day/Day";

import "./showtimes.css";

export default function Showtimes(){
    const { id } = useParams();
    const [showtimes, setShowtimes] = useState ([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`);
        promise.then((re) => {
            console.log(re);
            setShowtimes(re.data.days);
        });
    }, []);
    
    return(
        <div className="showtimes">
            <p>Selecione o horário</p>
            <div className="days">
                {showtimes.map((day) => (
                    <Day weekday={day.weekday} date={day.date} showtimes={day.showtimes} />
                ))}
            </div>
        </div>
    );
}