import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Day from "./Day/Day";
import Footer from "./Footer";

import styled from "styled-components";

export default function Showtimes(){
    const { id } = useParams();
    const [showtimes, setShowtimes] = useState ({});
    const [days, setDays] = useState ([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`);
        promise.then((re) => {
            console.log(re);
            setShowtimes(re.data);
            setDays(re.data.days);
        });
    }, []);
    
    return(
        <>
            <ShowTimes>
                <p>Selecione o horário</p>
                <div className="days">
                    {days.map((day) => (
                        <Day weekday={day.weekday} date={day.date} showtimes={day.showtimes} />
                    ))}
                </div>
            </ShowTimes>
            <Footer>
                <div className="movie">
                    <img alt={showtimes.title} src={showtimes.posterURL} />
                </div>
                <p>{showtimes.title}</p>
            </Footer>
        </>
    );
}


const ShowTimes = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 67px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 117px;
    > p{
        width: 100%;
        height: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        font-size: 24px;
    }
    .days{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
`