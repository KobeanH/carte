// 外部モジュール
import { useState } from 'react'
import styled from 'styled-components'

// 内部モジュール
import { CreateInputField } from '../molecules/CreateInputField'
import { Line } from '../../img/Line'
import { FormBtn } from '../atoms/btn/FormBtn'
import { Color } from '../../style/Color'
import { PostCreateAccount } from '../../apis/CreateAccount'

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

export const CreateForm = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  // const [loggedInStatus] = props

  // 名前入力欄
  const getName = (e) => {
    const value = e.target.value.replace(/[^a-zA-Zぁ-んァ-ン一-龠 \u3000]/g, '') // 文字列とスペース以外は入力できないように
    setName(value)
  }
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
  // 確認用パスワード入力欄
  const getConfirmPass = (e) => {
    const value = e.target.value.replace(/[ぁ-んァ-ン一-龠 \u3000]/g, '') // 日本語とスペースは入力できないように
    setConfirmPass(value)
  }

  const CreateAccount = () => {
    PostCreateAccount(
      {
        name: 'good9',
        email: 'good9@gmail.com',
        password: 'goodgood',
        password_confirmation: 'goodgood',
      },
      props.handleSuccessfulAuthentication
    )
  }

  // useEffect(() => {
  //   getCreateAccount()
  // }, [])
  return (
    <>
      {/* {loggedInStatus} */}
      <Title>アカウント作成</Title>
      <Wrap onSubmit={CreateAccount} id="new_user">
        <CreateInputField
          inputFor={'name'}
          type={'text'}
          name={'name'}
          value={name}
          placeholder={'山田　太郎'}
          onChange={getName}
        >
          名前
        </CreateInputField>
        <CreateInputField
          inputFor={'email'}
          type={'text'}
          name={'email'}
          value={email}
          placeholder={'example@gmail.com'}
          onChange={getEmail}
        >
          Email
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
        <CreateInputField
          inputFor="password_confirmation"
          type={'password'}
          name="password_confirmation"
          value={confirmPass}
          placeholder="もう一度パスワードを入力してください"
          onChange={getConfirmPass}
        >
          再確認用パスワード
        </CreateInputField>
        <FormBtn type={'submit'}>作成する</FormBtn>
        <Line />
        <LogInText>
          ログインは<LogInTextLink>こちら</LogInTextLink>
        </LogInText>
      </Wrap>
    </>
  )
}
