// 外部モジュール
import { memo } from 'react'

// 内部モジュール
import { Header } from '../organisms/Header'

export const Home = memo((props) => {
  const { loggedInStatus, handleLogout } = props

  return (
    <>
      <Header handleLogout={handleLogout} />
      <h2>ログイン状態{loggedInStatus}</h2>
    </>
  )
})
