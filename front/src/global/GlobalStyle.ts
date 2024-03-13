import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "NotoSansKR", Arial, Helvetica, sans-serif;
}
  
a {
    text-decoration: none;
    color: #332126;
}
`;

export default GlobalStyle;
