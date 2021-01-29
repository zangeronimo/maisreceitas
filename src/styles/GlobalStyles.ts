import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root {
        font-size: 60%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #312E38;
        color: #F4EDE8;
        font-family: Roboto, Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif, sans-serif;
    }

    body, input, button, textarea {
        font: 400 1.8rem Roboto, sans-serif;
        outline: none;
    }

    .container {
        display: flex;
        flex-direction: column;
    }

@media (min-width: 650px) {
    :root {
        font-size: 62.5%
    }

    .container {
      flex-direction: row;
    }
}
`;
