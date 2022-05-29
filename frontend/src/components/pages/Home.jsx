// 内部モジュール
import axios from 'axios'

import Loginn from '../auth/login'
import Registration from '../auth/Registrations'
import { Header } from '../organisms/Header'
// import { LogIn } from './LogIn'
// import { SignUp } from './SignUp'

export const Home = (props) => {
  const { loggedInStatus } = props
  const handleSuccessfulAuthentication = (data) => {
    props.handleLogin(data)
  }

  const handleLogoutClick = () => {
    axios
      .delete('http://localhost:3001/api/v1/logout', { withCredentials: true })
      .then((response) => {
        props.handleLogout()
      })
      .catch((error) => console.log('ログアウトエラー', error))
  }

  return (
    <>
      <Header />
      <button onClick={handleLogoutClick}>ログアウト</button>
      <h2>ログイン状態{loggedInStatus}</h2>
      {/* <SignUp handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
      <LogIn handleSuccessfulAuthentication={handleSuccessfulAuthentication} /> */}
      <Registration handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
      <Loginn handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
    </>
  )
}
