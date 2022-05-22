import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function Finishpage(){
    const location = useLocation();

    return(
        <Div>
            <p>
                <p>Pedido feito</p>
                <p>com sucesso!</p>
            </p>
            <div>
                <h3>Filme e sessão</h3>
                <p>{location.state.title}</p>
                <p>{location.state.date} {location.state.session}</p>
            </div>
            <div>
                <h3>Ingressos</h3>
                {location.state.names.map((name) => (
                    <p>Assento {name}</p>
                ))}
            </div>
            <div>
                <h3>Comprador</h3>
                <p>Nome: {location.state.name}</p>
                <p>CPF: {location.state.cpf}</p>
            </div>
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
    > div{
        width: 90%;
        height: auto;
        margin-bottom: 35px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        color: #293845;
        font-weight: 400;
        font-size: 22px;
    }
    h3{
        font-weight: 700;
        font-size: 24px;
        color: #293845;
        margin-bottom: 10px;
    }
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