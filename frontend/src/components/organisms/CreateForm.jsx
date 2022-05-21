// 外部モジュール
// import styled from 'styled-components'
import { useState } from 'react'

// 内部モジュール
import { CreateInputField } from '../molecules/CreateInputField'

export const CreateForm = (props) => {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [confirmPass, setConfirmPass] = useState(null)

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
    const value = e.target.value.replace(/[^a-zA-Zぁ-んァ-ン一-龠 \u3000]/g, '') // 日本語とスペースは入力できないように
    setPassword(value)
  }
  // 確認用パスワード入力欄
  const getConfirPass = (e) => {
    const value = e.target.value.replace(/[ぁ-んァ-ン一-龠 \u3000]/g, '') // 日本語とスペースは入力できないように
    setConfirmPass(value)
  }
  return (
    <>
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
        inputFor={'password'}
        type={'password'}
        name={'password'}
        value={password}
        placeholder={'パスワード'}
        onChange={getPassword}
      >
        パスワード
      </CreateInputField>
      <CreateInputField
        inputFor={'confirmPass'}
        type={'password'}
        name={'confirmPass'}
        value={confirmPass}
        placeholder={'もう一度パスワードを入力してください'}
        onChange={getConfirPass}
      >
        再確認用パスワード
      </CreateInputField>
    </>
  )
}
