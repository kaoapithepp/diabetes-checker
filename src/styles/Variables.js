import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        --background-color: #FFFFFF;
        --primary-color: #1E88E5; // Brand Blue
        --button-color: #64B5F6; // Button color
        --disabled: #A8CBE8;
        --black: #000000; // Everything which is black
        --form-grey: #B6B6B6; // Form placeholder, border
        --error: #FE0044; // Error red
        --cookie: #f4ca35;
        --blood: #f43563;

        /* PingPong Colors */
        --white: #ffffff;
        --pale-green: #AADA76; // Risk target
        --dark-green: #349933;
        --yellow: #FFFF01;
        --orange: #FD7610;
        --red: #FE2E04;
        --black: #000000;
    }
`;