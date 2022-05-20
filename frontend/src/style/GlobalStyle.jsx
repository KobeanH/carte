import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&family=Noto+Sans:wght@400;600;700;900&display=swap');
  ${reset}
  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
html {
  font-size: 62.5%;
}
body {
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: 900;
  color: #333;
  background-color: #f4f8f9;
}
a {
  cursor: pointer;
}
`
