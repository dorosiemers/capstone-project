import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      :root {
          --text-primary: #F5F3F6;
          --background-primary: #A18BA7;
      }
  
      * {
          box-sizing: border-box;
      }
  
      body {
          font-family: 'Noto Sans', sans-serif;
          background-color: var(--background-primary);
          color: var(--text-primary);
          text-shadow: 1px 1px #3d2443;
      }

      a {
        text-decoration: none;
      }
  `;

export default GlobalStyle;
