import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Space Grotesk', sans-serif;
  background-color: #fcfcfc;
}

h1 {
  font-family: 'Space Grotesk', sans-serif;
  color: #946a6a;
  font-size: 3rem;
}

h2 {
  font-family: 'Space Grotesk', sans-serif;
  color: #d6b0b0;
  font-size: 2.5rem;
}

h3 {
  font-family: 'Space Grotesk', sans-serif;
  color: #cfb753;
  font-size: 3rem;
}

h4 {
  font-family: 'Space Grotesk', sans-serif;
  color: #fcfcfc;
  font-size: 2.5rem;
}

`;

export default GlobalStyles;
