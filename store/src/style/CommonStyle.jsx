import styled from "styled-components";

export const HeaderWrap = styled.header`
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: white;
    /* border-bottom: 1px solid #ccc; */
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
        :active{
            opacity: 0.7;
        }
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
    display: ${({$isSearch})=>$isSearch?"block":"none"};
    >input{
        font-size: 1.1rem;
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        border-radius: 10px;
        border: 1px solid grey;
        padding: 0px 50px;
    }
    > svg{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 60px;
        color: #8e8e8e;
    }

`;

export const NavDiv = styled.nav`
    width: 100%;
    margin-bottom: 2.2rem;
    background-color: white;
    padding: 0.7rem 1.2rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    button{
        padding: 0.6rem 1.2rem;
        border: 1px solid black;
        border: 1.2rem;
        color: #8e8e8e;
        border-radius: 0.5rem;
        &:hover{
            background-color: red;
            color: white;
        }
        &:active{
            opacity: 0.7;
        }
    }
`;

export const Btn = styled.button`
    all: unset;
    cursor: pointer;
    font-size: 1rem;
    :active{
        opacity: 0.7;
    }
`;


