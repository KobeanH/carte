// 外部モジュール
import { memo, useCallback, useState } from 'react'
import styled from 'styled-components'

// 内部モジュール
import { BaseInputField } from '../molecules/BaseInputField'
import { Line } from '../../img/Line'
import { FormBtn } from '../atoms/btn/FormBtn'
import { Color } from '../../style/Color'
import { SubmitLogIn } from '../../apis/LogIn'

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

export const LogInForm = memo((props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // メアド入力欄
  const getEmail = useCallback(
    (e) => {
      const value = e.target.value.replace(/[ぁ-んァ-ン一-龠 \u3000]/g, '') // 日本語とスペースは入力できないように
      setEmail(value)
    },
    [email]
  )
  // パスワード入力欄
  const getPassword = useCallback(
    (e) => {
      const value = e.target.value.replace(/[ぁ-んァ-ン一-龠 \u3000]/g, '') // 日本語とスペースは入力できないように
      setPassword(value)
    },
    [password]
  )

  return (
    <>
      <Wrap onClick={useCallback(() => SubmitLogIn(email, password, props), [])} id="new_user">
        <BaseInputField
          inputFor={'email'}
          type={'text'}
          name={'email'}
          value={email}
          placeholder={'example@gmail.com'}
          onChange={getEmail}
        >
          メールアドレス
        </BaseInputField>
        <BaseInputField
          inputFor="password"
          type={'password'}
          name="password"
          value={password}
          placeholder="パスワード"
          onChange={getPassword}
        >
          パスワード
        </BaseInputField>
        <FormBtn type={'submit'}>ログイン</FormBtn>
        <Line />
        <LogInText>
          アカウントをお持ちでない方は<LogInTextLink>こちら</LogInTextLink>
        </LogInText>
      </Wrap>
    </>
  )
})
