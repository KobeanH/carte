import axios from 'axios'
import { CreateAccountUrl } from '../urls/index'

export const SubmitSignUp = (
  name,
  email,
  password,
  confirmPass,
  handleSuccessfulAuthentication
) => {
  axios
    .post(
      CreateAccountUrl,
      {
        user: {
          name,
          email,
          password,
          password_confirmation: confirmPass,
        },
      },
      { withCredentials: true }
    )
    .then((res) => {
      if (res.data.status === 'created') {
        handleSuccessfulAuthentication(res.data)
      }
      console.log(res)
      console.log('From SubmitSignUp')
    })
    .catch((e) => console.error(e))
}
