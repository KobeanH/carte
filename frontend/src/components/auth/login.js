// useStateフックをimportする
import { useState } from 'react'
import axios from 'axios'

export default function Loginn(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    axios
      .post(
        'http://localhost:3000/api/v1/login',
        {
          user: {
            email,
            password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          props.handleSuccessfulAuthentication(response.data)
        }
      })
      .catch((error) => {
        console.log('registration error', error)
      })
    event.preventDefault()
  }

  return (
    <div>
      <p>ログイン</p>

      {/* onSubmit、onChangeイベントを追加 */}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="メールアドレス"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="パスワード"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="submit">ログイン</button>
      </form>
    </div>
  )
}
