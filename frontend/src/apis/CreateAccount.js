import axios from 'axios'
import { CreateAccountUrl } from '../urls/index'

export const PostCreateAccount = (params) => {
  axios
    .post(CreateAccountUrl, {
      name: params.nameee,
      email: params.emaileee,
    })
    .then((res) => {
      console.log('success')
      return res.data
    })
    .catch((e) => console.error(e))
}

export const getCreateAccount = () => {
  axios
    .get(CreateAccountUrl)
    .then((res) => {
      console.log('success')
      console.log(res)
    })
    .catch((e) => console.error(e))
}
