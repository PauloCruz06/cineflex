import { Link } from "react-router-dom";

import styled from "styled-components";

export default function Day({ weekday, date, showtimes }){
    return(
        <DaY>
            <p>{weekday} - {date}</p>
            <div className="schedule">
                {showtimes.map((time) => (
                    <Link to={`/assentos/${time.id}`}>
                        <button>{time.name}</button>
                    </Link>
                ))}
            </div>
        </DaY>
    );
}


const DaY = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 25px;
    > p{
        font-weight: 400;
        font-size: 20px;
        margin-bottom: 22px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-end;
        padding-left: 24px;
    }
    .schedule{
        width: auto;
        height: auto;
        display: flex;
        flex-direction: row;
        padding-left: 24px;
    }
    .schedule button{
        width: 83px;
        height: 43px;
        border-radius: 3px;
        border: none;
        background-color: #E8833A;
        color: #ffffff;
        font-weight: 400;
        font-size: 18px;
        margin-right: 10px;
    }
`