import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: #332126;
  }

  body{
    font-family: PretendardRegular;
  }
`;

export default GlobalStyle;
