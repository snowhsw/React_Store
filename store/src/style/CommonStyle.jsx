import styled from "styled-components";

export const HeaderWrap = styled.header`
    width: 100%;
`;

export const HeaderTop = styled.div`
    width: 100%;
    height: 4rem;
    padding: 0 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    font-size: 2rem;
    font-weight: 900;
    border-bottom: 1px solid #8e8e8e;
    p{
        color:rgb(79, 70, 229);
    }
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
        width: 2rem;
        height: 2rem;
    }
    img{
        width: 100%;
        height: 100%;
    }
`;

export const HeaderBot = styled.div`
    width: 100%;
    background-color: white;
    padding: 0.8rem 3rem;
    border-bottom: 1px solid #8e8e8e;
    position: relative;
    >input{
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        border-radius: 10px;
        border: 1px solid grey;
        &:focus{
            outline: none;
        }
    }
    > svg{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 60px;
        color: #8e8e8e;
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