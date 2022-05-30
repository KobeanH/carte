import axios from 'axios'
import { CreateAccountUrl } from '../urls/index'

export const PostCreateAccount = (params, props) => {
  axios
    .post(
      CreateAccountUrl,
      {
        user: {
          name: params.name,
          email: params.email,
          password: params.password,
          password_confirmation: params.password_confirmation,
        },
      },
      { withCredentials: true }
    )
    .then((res) => {
      if (res.data.status === 'created') {
        props.handleSuccessfulAuthentication(res.data)
      }
      console.log(res)
    })
    .catch((e) => console.error(e))
  params.preventDefault()
}
