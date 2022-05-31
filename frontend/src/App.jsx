// 外部モジュール
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
// import axios from 'axios'

// 内部モジュール
import { GlobalStyle } from './style/GlobalStyle'
import { Home } from './components/pages/Home'
import { LogIn } from './components/pages/LogIn'
import { SignUp } from './components/pages/SignUp'
import Dashboard from './components/Dashboard'
import './style.css'
// import { LoggedInUrl } from './urls'

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState('未ログイン')
  const navigate = useNavigate()

  const handleLogin = () => {
    setLoggedInStatus('ログインなう')
    navigate('/dashboard')
    console.log('From App')
  }

  // useEffect(() => {
  //   console.log(loggedInStatus)
  //   checkLoginStatus()
  // })

  // const checkLoginStatus = () => {
  //   axios
  //     .get(LoggedInUrl, { withCredentials: true })
  //     .then((response) => {
  //       console.log(response)
  //       if (response.data.logged_in && loggedInStatus === '未ログイン') {
  //         setLoggedInStatus('ログインなうrrrrr')
  //       } else if (!response.data.logged_in && loggedInStatus === 'ログインなう') {
  //         setLoggedInStatus('未ログイン')
  //         console.log('failed from App.jsx')
  //       }
  //     })
  //     .catch((error) => {
  //       console.log('ログインエラー', error)
  //     })
  // }

  const handleLogout = () => {
    setLoggedInStatus('未ログイン')
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
