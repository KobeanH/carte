// 外部モジュール
import { useState } from 'react'
import styled from 'styled-components'

// 内部モジュール
import { CreateInputField } from '../molecules/CreateInputField'
import { Line } from '../../img/Line'
import { FormBtn } from '../atoms/btn/FormBtn'
import { Color } from '../../style/Color'
import { LogIn } from '../../apis/LogIn'

const Title = styled.h1`
  margin-bottom: 32px;
  font-size: 3.2rem;
  text-align: center;
`
const Wrap = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  max-width: 736px;
  width: 100%;
  margin: 0 auto;
  padding: 32px;
  > div:not(:nth-child(4)) {
    margin-bottom: 24px;
  }
  > div:nth-child(4) {
    margin-bottom: 40px;
  }
  > svg {
    margin: 24px 0;
  }
`
const LogInText = styled.p`
  font-size: 1.6rem;
  text-align: center;
  letter-spacing: 0.03em;
`
const LogInTextLink = styled.a`
  font-size: 1.6rem;
  color: ${Color.MainColor};
`

export const LogInForm = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // const [loggedInStatus] = props

  // メアド入力欄
  const getEmail = (e) => {
    const value = e.target.value.replace(/[ぁ-んァ-ン一-龠 \u3000]/g, '') // 日本語とスペースは入力できないように
    setEmail(value)
  }
  // パスワード入力欄
  const getPassword = (e) => {
    const value = e.target.value.replace(/[ぁ-んァ-ン一-龠 \u3000]/g, '') // 日本語とスペースは入力できないように
    setPassword(value)
  }

  const PostLogIn = () => {
    LogIn({
      name: 'good1',
      email: 'good1@gmail.com',
      password: 'goodgood',
      password_confirmation: 'goodgood',
    })
  }

  return (
    <>
      {/* {loggedInStatus} */}
      <Title>アカウント作成</Title>
      <Wrap action="/users" id="new_user" method="post">
        <CreateInputField
          inputFor={'email'}
          type={'text'}
          name={'email'}
          value={email}
          placeholder={'example@gmail.com'}
          onChange={getEmail}
        >
          メールアドレス
        </CreateInputField>
        <CreateInputField
          inputFor="password"
          type={'password'}
          name="password"
          value={password}
          placeholder="パスワード"
          onChange={getPassword}
        >
          パスワード
        </CreateInputField>
        <FormBtn onClick={PostLogIn}>ログイン</FormBtn>
        <Line />
        <LogInText>
          アカウントをお持ちでない方は<LogInTextLink>こちら</LogInTextLink>
        </LogInText>
      </Wrap>
    </>
  )
}
