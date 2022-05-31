// 外部モジュール
import { memo } from 'react'
import styled from 'styled-components'

// 内部モジュール
import { LogInForm } from '../organisms/LogInForm'

const Title = styled.h1`
  margin-bottom: 32px;
  font-size: 3.2rem;
  text-align: center;
`
export const LogIn = memo((props) => {
  const { handleSuccessfulAuthentication } = props
  return (
    <>
      <Title>ログイン</Title>
      <LogInForm handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
    </>
  )
})
