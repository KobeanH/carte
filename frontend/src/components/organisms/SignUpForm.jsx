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
const ErrorMessageText = styled.span`
  display: block;
  margin-top: 8px;
  font-size: 1rem;
  color: red;
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
            // value={name}
            placeholder={'山田太郎'}
            // onChange={getName}
            {...register('name', {
              required: '必須',
              maxLength: {
                value: 60,
                message: '60文字以内で入力してください',
              },
              pattern: {
                value: /[ぁ-んァ-ン一-龠 \u3000]/g,
                message: '名前の形式が不正です(日本語のみで登録してください)',
              },
              onChange: (e) => console.log(e.target.value),
            })}
          >
            名前
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => <ErrorMessageText>{message}</ErrorMessageText>}
            />
          </CreateInputField>

          <CreateInputField
            inputFor={'email'}
            type={'text'}
            // value={name}
            placeholder={'example@gmail.com'}
            // onChange={getName}
            {...register('email', {
              required: '必須',
              maxLength: {
                value: 255,
                message: '255文字以内で入力してください',
              },
              pattern: {
                value: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/,
                message: 'メールアドレスの形式が不正です',
              },
            })}
          >
            メールアドレス
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <ErrorMessageText>{message}</ErrorMessageText>}
            />
          </CreateInputField>

          <CreateInputField
            inputFor={'password'}
            type={'password'}
            // value={name}
            placeholder={'パスワード'}
            // onChange={getName}
            {...register('password', {
              required: '必須',
              minLength: {
                value: 6,
                message: '6文字以上入力してください',
              },
              pattern: {
                value: /[^ぁ-んァ-ン一-龠 \u3000]/g,
                message: 'パスワードの形式が不正です',
              },
            })}
          >
            パスワード
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => <ErrorMessageText>{message}</ErrorMessageText>}
            />
          </CreateInputField>

          <CreateInputField
            inputFor={'password_confirmation'}
            type={'password'}
            // value={name}
            placeholder={'再度パスワードを入力してください'}
            // onChange={getName}
            {...register('password_confirmation', {
              required: '必須',
              minLength: {
                value: 6,
                message: '6文字以上入力してください',
              },
              pattern: {
                value: /[^ぁ-んァ-ン一-龠 \u3000]/g,
                message: 'パスワードの形式が不正です',
              },
              onChange: (e) => console.log(e.target.value),
            })}
          >
            確認用パスワード
            <ErrorMessage
              errors={errors}
              name="password_confirmation"
              render={({ message }) => <ErrorMessageText>{message}</ErrorMessageText>}
            />
          </CreateInputField>

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
