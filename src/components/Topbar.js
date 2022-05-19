import styled from "styled-components";

export default function Topbar(){
    return(
        <TopBar>
            CINEFLEX
        </TopBar>
    );
}


const TopBar = styled.div`
    width: 100%;
    height: 67px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #c3cfd9;
    color: #e8833a;
    font-weight: 400;
    font-size: 34px;
    position: fixed;
    top: 0px;
    left: 0px;
`
