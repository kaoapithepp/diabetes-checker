import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    color: (--black);
    overscroll-behavior: none;
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    font-family: "Mitr", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
  }
`;