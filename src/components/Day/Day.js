import { Link } from "react-router-dom";

import "./day.css";

export default function Day({ weekday, date, showtimes }){
    return(
        <div className="day">
            <p>{weekday} - {date}</p>
            <div className="schedule">
                {showtimes.map((time) => (
                    <Link to={`/sessao/${time.id}`}>
                        <button>{time.name}</button>
                    </Link>
                ))}
            </div>
        </div>
    );
}