import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Finishpage(){
    return(
        <Div>
            <p>
                <p>Pedido feito</p>
                <p>com sucesso!</p>
            </p>
            <Link to="/">
                <button>Voltar pra Home</button>
            </Link>
        </Div>
    )

}


const Div = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 67px;
    display: flex;
    flex-direction: column;
    align-items: center;
    > p{
        width: 100%;
        height: 110px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-weight: 700;
        font-size: 24px;
        color: #247A6B;
        margin-bottom: 25px;
    }
    button{
        width: 225px;
        height: 42px;
        border-radius: 3px;
        border: none;
        background-color: #e8833a;
        color: #ffffff;
        font-weight: 400;
        font-size: 18px;
        margin-top: 62px;
    }
`