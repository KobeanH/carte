import { Switch, Route, Link } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Header } from './organisms/Header';

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
  body{
    background-color:#F4F8F9;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
    </>
  );
}

export default App;
