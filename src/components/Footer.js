import styled from "styled-components";

export default function Footer(props){
    return(
        <FooTer>
            {props.children}
        </FooTer>
    );
}

const FooTer = styled.div`
    width: 100%;
    height: 117px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    font-weight: 400;
    font-size: 26px;
    position: fixed;
    left: 0px;
    bottom: 0px;
    > p{
        margin-left: 14px;
    }
    > .movie{
        width: 64px;
        height: 89px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #FFFFFF;
        border: none;
        border-radius: 3px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.15);
        margin-left: 10px;
    }
    > .movie > img{
        width: 48px;
        height: 72px;
    }
`