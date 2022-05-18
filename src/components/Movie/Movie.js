import { Link } from "react-router-dom";

import "./movie.css";

export default function Movie({ title ,url, id }){
    return(
        <Link to={`/filme/${id}`}>
            <div className="movie">
                <img alt={title} src={url} />
            </div>
        </Link>
    );
}