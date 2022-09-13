import styled from "styled-components";

export const Container =  styled.div`
    vertical-align: middle;
    margin-left: auto;
    margin-right: auto;
    width: 60vh;
    @media screen and (max-width: 768px) {
        width: 80%  
    }
    p{
        font-size: 14px;
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

export const Circle = styled.div`
    display: flex;
    width: 100px;
    height: 100px;
    background-color: green;
    border-radius: 50%;
`

export const Content = styled.div`
    margin-top: 24px;
    h3{
        color: var(--button-color);
        font-weight: 500;
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
    margin-top: 24px;
    margin-bottom: 24px;
`
export const Detail = styled.span`
    .blue{
        color: var(--primary-color);
    }
`

export const Instruction = styled.div`
    margin-top: 14px;
    .h4{
        font-weight: 500;
        font-size: 16px;
    }
`

export const Caption = styled.p`
    font-size: 12px;
    color: var(--button-color);
`
