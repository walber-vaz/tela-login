import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --bg-primary: rgb(247, 244, 243);
    --bg-secondary: rgb(36, 55, 72);
    --color-primary: rgb(36, 55, 72);
    --color-secondary: rgb(247, 244, 243);
    --color-hover: rgb(186, 27, 29);
    --color-shadow: rgba(0, 0, 0, 0.2);
    /**
    --charcoal: rgb(36, 55, 72);
    --blue-yonder: rgb(75, 116, 159);
    --cultured: rgb(247, 244, 243);
    --rosewood: rgb(82, 5, 10);
    --carnelian: rgb(186, 27, 29);
    */
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    --webkit-font-smoothing: antialiased;
    --moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background-color: var(--bg-primary);
    color: var(--color-primary);
    font-family: sans-serif;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  #root {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyles;
