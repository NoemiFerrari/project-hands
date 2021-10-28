import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;

  }
  
  *, button, input{
    border: 0;
    background: 0;
    font-family: var(--roboto)
  }
  
  button:focus {
    outline: none;
  }

  h1,
  h2,
  h3,
  h4,
  p {
    margin: 0;
  }

  ul,
  li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  :root {
    --poppins: Poppins;
    --roboto: 'Roboto';
  }
`;