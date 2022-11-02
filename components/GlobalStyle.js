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
      }

      a {
        text-decoration: none;
        color: #3d2443;
      }
  `;

export default GlobalStyle;
