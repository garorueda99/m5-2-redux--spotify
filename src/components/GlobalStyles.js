import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../theme';
const GlobalStyles = createGlobalStyle`
html,
body,
div,
span, h1, h2, p, ul, li {
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  box-sizing: border-box;
}

body{
  background-color: ${COLORS.charcoal}
}

/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-family: Montserrat, sans-serif;
}
`;

export default GlobalStyles;
