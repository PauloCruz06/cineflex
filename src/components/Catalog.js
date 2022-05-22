import { useState, useEffect } from "react";
import axios from "axios";

import Movie from "./Movie";

import styled from "styled-components";

export default function Catalog() {
    const[movies, setMovies] = useState([])

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((re) => {
            console.log(re);
            setMovies(re.data);
        });
    }, []);

    if(movies.length === 0){
        return(
            <CataLog>
                <p>Carregando...</p>
            </CataLog>
        );
    }else{
        return(
            <>
                <CataLog>
                    <p>Selecione o filme</p>
                    <div className="movies">
                        {movies.map((movie) => (
                            <Movie title={movie.title} url={movie.posterURL} id={movie.id} />
                        ))}
                    </div>
                </CataLog>
            </>
        );
    }
}


const CataLog = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 67px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > p{
        width: 100%;
        height: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 400;
        font-size: 24px;
    }
    .movies{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: safe center;
    }
`