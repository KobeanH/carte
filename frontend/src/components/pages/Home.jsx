// 外部モジュール
import { memo } from 'react'
import axios from 'axios'

// 内部モジュール
import { Header } from '../organisms/Header'
import { LogOutInUrl } from '../../urls'

export const Home = memo((props) => {
  const { loggedInStatus } = props

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
    </>
  )
})
