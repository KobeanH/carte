// 内部モジュール
import { CreateForm } from '../organisms/CreateForm'

export const SignUp = (props) => {
  const { handleSuccessfulAuthentication } = props
  return (
    <>
      <CreateForm handleSuccessfulAuthentication={handleSuccessfulAuthentication} />
    </>
  )
}
