import axios from 'axios'
import { CreateAccountUrl } from '../urls/index'

export const LogIn = (params, props) => {
  axios
    .post(
      CreateAccountUrl,
      {
        user: {
          email: params.email,
          password: params.password,
        },
      },
      { withCredentials: true }
    )
    .then((res) => {
      // 変更
      if (res.data.logged_in) {
        props.handleSuccessfulAuthentication(res.data)
      }
    })
    .catch((e) => console.error(e))
  params.preventDefault()
}
