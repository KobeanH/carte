import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`

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
