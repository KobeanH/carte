import axios from 'axios'
import { LogInUrl } from '../urls/index'

export const SubmitLogIn = (email, password, props) => {
  axios
    .post(
      LogInUrl,
      {
        user: {
          email,
          password,
        },
      },
      { withCredentials: true }
    )
    .then((response) => {
      if (response.data.logged_in) {
        props.handleSuccessfulAuthentication(response.data)
      }
    })
    .catch((error) => {
      console.log('registration error', error)
    })
}
