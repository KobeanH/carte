// 外部モジュール
import { memo } from 'react'
import styled from 'styled-components'

// 内部モジュール
import { SignUpForm } from '../organisms/SignUpForm'

const Title = styled.h1`
  margin-bottom: 32px;
  font-size: 3.2rem;
  text-align: center;
`
export const SignUp = memo((props) => {
  const { handleLogin } = props
  return (
    <>
      <Title>アカウント作成</Title>
      <SignUpForm handleLogin={handleLogin} />
    </>
  )
})
