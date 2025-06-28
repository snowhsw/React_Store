import styled from "styled-components";
import { Btn } from "./CommonStyle";

export const ProductBox =  styled.div`
    background-color: white;
    width: calc((100% - (1.2rem * 2)) / 3);
    overflow: hidden;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    .imgBox{
        overflow: hidden;
    }
    .prInfoBox{
        padding: 1rem;
    }
    &:hover > a > div > img{
        transform: scale(1.1);
        transition: transform 0.3s;
    }
    img{
        width: 100%;transition: transform 0.3s;
    }
    > a{
        color:black
    }
    > a:visited{
        color:transparent
    }
    .pr_title{
        font-size: 1rem; font-weight: 600;
    }
    .pr_price{
        font-size: 1.1rem; font-weight: 600;
    }
`;

export const AddCartBtn = styled(Btn)`
    background-color: rgb(79, 70, 229);
    width: 100%;
    text-align: center;
    color: white;
    padding: 0.7rem 0;
    border-radius: 0.3rem;
    &:active{
        opacity: 0.7;
    }
`;

