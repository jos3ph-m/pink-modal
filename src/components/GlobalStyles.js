import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Space Grotesk', sans-serif;
  background-color: #f2dcdc;
}

h1 {
  font-family: 'Space Grotesk', sans-serif;
  color: #d6b0b0;
}
`;

export default GlobalStyles;
