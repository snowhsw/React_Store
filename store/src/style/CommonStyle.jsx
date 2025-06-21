import styled from "styled-components";

export const HeaderWrap = styled.header`
    width: 100%;
    height: 65px;
    padding: 0 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    font-size: 30px;
    font-weight: 900;
    > div{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    > div > a,
    > div > button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
    }
    img{
        width: 100%;
        height: 100%;
    }
`;


export const MainWrap = styled.main`
    max-width: 1280px;
    margin: auto;
    background-color: rgb(249, 250, 251);
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;


export const Btn = styled.button`
    all: unset;
    cursor: pointer;
`;