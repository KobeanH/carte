// 外部モジュール
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './style/GlobalStyle'
import axios from 'axios'

// 内部モジュール
import { Home } from './components/pages/Home'
import { LogIn } from './components/pages/LogIn'
import { SignUp } from './components/pages/SignUp'
import Dashboard from './components/Dashboard'

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState('未ログイン')
  const [setUser] = useState({})

  const handleLogin = (data) => {
    setLoggedInStatus('ログインなう')
    setUser(data.user)
  }
  useEffect(() => {
    checkLoginStatus()
  })

  const checkLoginStatus = () => {
    axios
      .get('http://localhost:3001/api/v1/logged_in', { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in && loggedInStatus === '未ログイン') {
          setLoggedInStatus('ログインなう')
          setUser(response.data.user)
        } else if (!response.data.logged_in && loggedInStatus === 'ログインなう') {
          setLoggedInStatus('未ログイン')
          setUser({})
        }
      })
      .catch((error) => {
        console.log('ログインエラー', error)
      })
  }

  const handleLogout = () => {
    setLoggedInStatus('未ログイン')
    setUser({})
  }

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path={'/'}
            element={
              <Home
                handleLogout={handleLogout}
                handleLogin={handleLogin}
                loggedInStatus={loggedInStatus}
              />
            }
          />
          <Route exact path={'/login'} element={<LogIn loggedInStatus={loggedInStatus} />} />
          <Route exact path={'/signup'} element={<SignUp loggedInStatus={loggedInStatus} />} />
          <Route
            exact
            path={'/dashboard'}
            element={<Dashboard loggedInStatus={loggedInStatus} />}
          />
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
    </>
  )
}

export default App
