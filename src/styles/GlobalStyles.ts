import { createGlobalStyle, css } from "styled-components";

export const theme = {
  primary: "#823F15",
  primaryLight: "#B06209",
  primaryDark: "#4F1F0E",
  secondary: "#a7af7e",
  secondaryLight: "#FFF1CC",
  secondaryDark: "#485122",
  black: "#010101",
  white: "#fefefe",

  queryes: {
    smallDevices: "43.75em",
    mediumDevices: "56.25em",
    normalDevices: "75em",
    bigDevices: "93.75em",
  },
};

export default createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
      margin: 0;
       padding: 0;
      box-sizing: border-box;
      font-family: "Inter", sans-serif;
      -webkit-font-smoothing: antialiased;
    }

    strong {
      font-size: 2.4rem;
      font-family: "Dancing Script", sans-serif;
    }

    body {
      max-width: 93.75em;
      margin: 0 auto;
      background-color: ${theme.secondary};
      color: ${theme.black};
    }

    body, input, button, textarea {
      font: 400 1.6rem Inter, sans-serif;
      outline: none;
      -webkit-font-smoothing: antialiased;
    }

    .container {
        display: flex;
        flex-direction: column;
        background-color: ${theme.white};
    }

    .content {
      background-color: ${theme.white};
      padding: 1rem;
      flex: 1;
    }

@media (min-width: 650px) {
    :root {
        font-size: 62.5%
    }

    .container {
      flex-direction: row;
    }

    .content {
      position: relative;
      border-radius: 10px 10px 0 0;
      border: 1px solid ${theme.white};
    }
}
`;
