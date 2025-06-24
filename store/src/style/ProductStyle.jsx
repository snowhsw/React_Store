import styled from "styled-components";


const ProductBox =  styled.div`
    border: 1px solid black;
    background-color: white;
    width: calc((100% - (1.2rem * 3)) / 4);
    border-radius: 0.5rem;
    overflow: hidden;
    img{
        width: 100%;
    }
    > a{
        color:black
    }
    > a:visited{
        color:transparent
    }
`;


export { ProductBox }