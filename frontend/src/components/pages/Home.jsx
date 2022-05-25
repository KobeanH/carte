// 内部モジュール
import axios from 'axios'
import { Header } from '../organisms/Header'
import { LogIn } from './LogIn'
import { SignUp } from './SignUp'

export const Home = (props) => {
  const { loggedInStatus } = props
  const handleSuccessfulAuthentication = (data) => {
    props.handleLogin(data)
    props.history.push('/')
  }

  const handleLogoutClick = () => {
    axios
      .delete('http://localhost:3000/api/v1/logout', { withCredentials: true })
      .then((response) => {
        props.handleLogout()
      })
      .catch((error) => console.log('ログアウトエラー', error))
  }

  return (
    <>
      <Header />
      <button onClick={handleLogoutClick}>ログアウト</button>
      {loggedInStatus}
      <SignUp handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
      <LogIn handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
    </>
  )
}
