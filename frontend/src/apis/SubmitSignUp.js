import axios from 'axios'
import { CreateAccountUrl } from '../urls/index'

export const SubmitSignUp = (data, props) => {
  axios
    .post(
      CreateAccountUrl,
      {
        user: {
          name: data.name,
          email: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
        },
      },
      { withCredentials: true }
    )
    .then((res) => {
      console.log('From SubmitSignUp')
      if (res.data.status === 'created') {
        props.handleLogin(res.data)
      }
      console.log(res)
    })
    .catch((error) => {
      console.log('registration error', error)
    })
}
