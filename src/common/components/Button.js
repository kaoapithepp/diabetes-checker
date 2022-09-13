import styled from "styled-components";

export const Button = styled.button`
    background-color: ${props => props.disabled ? "#A8CBE8" : "#64B5F6"};
    color: white;
    padding: 14px 0px;
    border-radius: 10px;
    font-size: medium;
    text-align: center;
    cursor: ${props => props.disabled ? "no-drop": "pointer"};
    width: 100%;
    font-family: "Mitr", sans-serif;
    border: none;
`;