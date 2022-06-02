import axios from 'axios'
import { LogInUrl } from '../urls/index'

export const SubmitLogIn = (data, props) => {
  axios
    .post(
      LogInUrl,
      {
        user: {
          email: data.email,
          password: data.password,
        },
      },
      { withCredentials: true }
    )
    .then((response) => {
      if (response.data.logged_in) {
        props.handleLogin(response.data)
      }
    })
    .catch((error) => {
      console.log('registration error', error)
    })
}
