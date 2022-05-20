// 外部モジュール
// import { Switch, Route, Link } from 'react-router-dom';
import { GlobalStyle } from './style/GlobalStyle'

// 内部モジュール
import { Header } from './components/organisms/Header'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header></Header>
    </>
  )
}

export default App
