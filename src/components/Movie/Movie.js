import "./movie.css";

export default function Movie({ title ,url }){
    return(
        <div className="movie">
            <img alt={title} src={url} />
        </div>
    );
}