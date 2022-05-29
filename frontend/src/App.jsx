// 外部モジュール
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { GlobalStyle } from './style/GlobalStyle'
import axios from 'axios'

// 内部モジュール
import { Home } from './components/pages/Home'
import { LogIn } from './components/pages/LogIn'
import { SignUp } from './components/pages/SignUp'
import Dashboard from './components/Dashboard'

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState('未ログイン')
  // const [user, setUser] = useState({})
  const navigate = useNavigate()

  const handleLogin = (data) => {
    setLoggedInStatus('ログインなう')
    navigate('/dashboard')
    // setUser(data.user)
    // console.log(user)
    // console.log(data.user)
    // console.log(loggedInStatus)
  }

  useEffect(() => {
    // console.log(user)
    console.log(loggedInStatus)
    checkLoginStatus()
  })

  const checkLoginStatus = () => {
    axios
      .get('http://localhost:3001/api/v1/logged_in', { withCredentials: true })
      .then((response) => {
        console.log(response)
        if (response.data.logged_in && loggedInStatus === '未ログイン') {
          console.log('nice')
          setLoggedInStatus('ログインなうrrrrr')
          // setUser(response.data.user)
        } else if (!response.data.logged_in && loggedInStatus === 'ログインなう') {
          setLoggedInStatus('未ログイン')
          // setUser({})
          console.log('failed from App.jsx')
        } else {
          console.log('elseeeeeee')
        }
      })
      .catch((error) => {
        console.log('ログインエラー', error)
      })
  }

  const handleLogout = () => {
    setLoggedInStatus('未ログイン')
    // setUser({})
  }

  return (
    <>
      <GlobalStyle />
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
        <Route exact path={'/dashboard'} element={<Dashboard loggedInStatus={loggedInStatus} />} />
      </Routes>
      {/* <Home /> */}
    </>
  )
}

export default App
