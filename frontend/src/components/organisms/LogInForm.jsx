// 外部モジュール
import { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

// 内部モジュール
import { CreateInputField } from '../molecules/CreateInputField'
import { Line } from '../../img/Line'
import { FormBtn } from '../atoms/btn/FormBtn'
import { Color } from '../../style/Color'

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

  const handleSubmit = (event) => {
    axios
      .post(
        'http://localhost:3001/api/v1/login',
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
    <>
      <Title>ログイン</Title>
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
        <FormBtn onClick={handleSubmit}>ログイン</FormBtn>
        <Line />
        <LogInText>
          アカウントをお持ちでない方は<LogInTextLink>こちら</LogInTextLink>
        </LogInText>
      </Wrap>
    </>
  )
}
