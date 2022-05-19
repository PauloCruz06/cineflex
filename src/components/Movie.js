import { Link } from "react-router-dom";

import styled from "styled-components";

export default function Movie({ title ,url, id }){
    return(
        <Link to={`/filme/${id}`}>
            <MoVie>
                <img alt={title} src={url} />
            </MoVie>
        </Link>
    );
}

const MoVie = styled.div`
    width: 145px;
    height: 209px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.15);
    margin: 0px 15px 12px 15px;
    img{
        width: 129px;
        height: 193px;
        object-fit: cover;
    }
`