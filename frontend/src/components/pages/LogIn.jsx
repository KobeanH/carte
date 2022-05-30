// 内部モジュール

import { LogInForm } from '../organisms/LogInForm'

export const LogIn = (props) => {
  const { handleSuccessfulAuthentication } = props
  return (
    <>
      <LogInForm handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
    </>
  )
}
