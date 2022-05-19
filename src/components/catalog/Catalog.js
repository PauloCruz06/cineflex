import { useState, useEffect } from "react";
import axios from "axios";

import "./catalog.css";
import Movie from "../Movie";

export default function Catalog() {
    const[movies, setMovies] = useState([])

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((re) => {
            console.log(re);
            setMovies(re.data);
        });
    }, []);

    return(
        <div className="catalog">
            <p>Selecione o filme</p>
            <div className="movies">
                {movies.map((movie) => (
                    <Movie title={movie.title} url={movie.posterURL} id={movie.id} />
                ))}
            </div>
        </div>
    );
}