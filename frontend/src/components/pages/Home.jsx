// 外部モジュール
import axios from 'axios'

// 内部モジュール
import { Header } from '../organisms/Header'
import { LogOutInUrl } from '../../urls'
import { LogIn } from './LogIn'
// import { SignUp } from './SignUp'

export const Home = (props) => {
  const { loggedInStatus } = props
  const handleSuccessfulAuthentication = (data) => {
    props.handleLogin(data)
  }

  const handleLogoutClick = () => {
    axios
      .delete(LogOutInUrl, { withCredentials: true })
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
      {/* <SignUp handleSuccessfulAuthentication={handleSuccessfulAuthentication} /> */}
      <LogIn handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
    </>
  )
}
