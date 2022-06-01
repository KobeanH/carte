// 外部モジュール
import { memo } from 'react'
import styled from 'styled-components'
import { useForm, FormProvider } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

// 内部モジュール
import { CreateInputField } from '../molecules/CreateInputField'
import { Line } from '../../img/Line'
import { FormBtn } from '../atoms/btn/FormBtn'
import { Color } from '../../style/Color'
// import axios from 'axios'
// import { CreateAccountUrl } from '../../urls'
// import { SubmitSignUp } from '../../apis/SubmitSignUp'

const Wrap = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  max-width: 736px;
  width: 100%;
  margin: 0 auto;
  padding: 32px;
  > div:not(:nth-child(4)) {
    margin-bottom: 24px;
  }
  > div:nth-child(4) {
    margin-bottom: 40px;
  }
  > svg {
    margin: 24px 0;
  }
`
const LogInText = styled.p`
  font-size: 1.6rem;
  text-align: center;
  letter-spacing: 0.03em;
`
const LogInTextLink = styled.a`
  font-size: 1.6rem;
  color: ${Color.MainColor};
`

export const SignUpForm = memo((props) => {
  const {
    register,
    handleSubmit,
    reset,
    methods,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    reset()
  }

  // const SubmitSignUp = (event) => {
  //   axios
  //     .post(
  //       CreateAccountUrl,
  //       {
  //         user: {
  //           name,
  //           email,
  //           password,
  //           password_confirmation: confirmPass,
  //         },
  //       },
  //       { withCredentials: true }
  //     )
  //     .then((res) => {
  //       console.log('From SubmitSignUp')
  //       if (res.data.status === 'created') {
  //         props.handleSuccessfulAuthentication(res.data)
  //       }
  //       console.log(res)
  //     })
  //     .catch((error) => {
  //       console.log('registration error', error)
  //     })
  //   event.preventDefault()
  // }

  // const SubmitSignUp2 = () => {
  //   console.log('mmmfiifioashfhdsafhiohfidsah;hdfhoiasufgsahf;hfeua')
  // }

  return (
    <>
      <FormProvider {...methods}>
        <Wrap onSubmit={handleSubmit(onSubmit)}>
          {/* <Wrap id="new_user"> */}
          <CreateInputField
            inputFor={'name'}
            type={'text'}
            name={'name'}
            // value={name}
            placeholder={'山田　太郎'}
            // onChange={getName}
            {...register('name', {
              required: true,
              maxLength: 60,
              pattern: {
                value: /[ぁ-んァ-ン一-龠 \u3000]/g,
                message: 'メールアドレスの形式が不正です',
              },
            })}
          >
            名前
          </CreateInputField>
          <ErrorMessage errors={errors} name="name" />
          <FormBtn type={'submit'}>作成する</FormBtn>
          <Line />
          <LogInText>
            ログインは<LogInTextLink>こちら</LogInTextLink>
          </LogInText>
        </Wrap>
      </FormProvider>
    </>
  )
})
