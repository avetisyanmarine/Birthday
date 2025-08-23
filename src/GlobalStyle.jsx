import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --dark-color: #776716;
    --color: #F2DA07;
    --black: #0E1111;
  }
  body {
    font-family: 'Vrdznagir';
    letter-spacing: 1px;
    background: #F3F3F3;
    color: var(--black);
    scroll-behavior: smooth;
  }
  @font-face {
    font-family: 'family-home';
    src: url("/font/family-home.woff2");
    font-display: swap;
  }
  @font-face {
    font-family: "DavelAghvor";
    src: url("/font/davel-aghvor.woff2");
    font-display: swap;
  }
  @font-face {
    font-family: 'Vrdznagir';
    src: url("/font/Vrdznagir.woff2");
    font-display: swap;
  }
  h4 {
    font-size: 36px;
    font-weight: 100;
  }
  h1 {
    font-size: 80px;
    color: var(--color);
    opacity: .9;
    font-weight: 100;
    margin-top: 25px;
    text-shadow: 1px 6px 5px rgba(0,0,0,0.5);    /* -webkit-text-stroke: 1px var(--color); */
  }
`;
const Container = styled.div`
  max-width: 390px;
  margin: 0 auto;
  padding: 16px;
`;
const Flexible = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { GlobalStyle, Container, Flexible };
