import styled from "styled-components";

export const Container =  styled.div`
    vertical-align: middle;
    margin-left: auto;
    margin-right: auto;
    width: 60vh;
    @media screen and (max-width: 768px) {
        width: 80%  
    }
`

export const Header = styled.div`
    h2{
        color: var(--primary-color);
        font-weight: 500;
        margin-bottom: 12px;
        font-size: 32px;
    }
    h3{
        color: var(--button-color);
        font-weight: 500;
    }
`

export const Content = styled.div`
    margin-top: 24px;
    margin-bottom: 24px;
    .img{
        width: 100%;
    }
`

export const Button = styled.div`
    background-color: var(--button-color) ;
    color: white;
    padding-top: 14px;
    padding-bottom: 14px;
    border-radius: 10px;
    font-size: medium;
    cursor: pointer;
    text-align: center;
`