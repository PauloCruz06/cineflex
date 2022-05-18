import "./day.css";

export default function Day({ weekday, date, showtimes }){
    return(
        <div className="day">
            <p>{weekday} - {date}</p>
            <div className="schedule">
                {showtimes.map((time) => (
                    <button>{time.name}</button>
                ))}
            </div>
        </div>
    );
}