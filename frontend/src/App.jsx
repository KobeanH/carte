// 外部モジュール
// import { Switch, Route, Link } from 'react-router-dom';
import { GlobalStyle } from './style/GlobalStyle'

// 内部モジュール
import { Home } from './components/pages/Home'

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  )
}

export default App
