// 外部モジュール
import { memo, useCallback, useState } from "react";
import styled from "styled-components";

// 内部モジュール
import { CreateInputField } from "../molecules/CreateInputField";
import { Line } from "../../img/Line";
import { FormBtn } from "../atoms/btn/FormBtn";
import { Color } from "../../style/Color";
import axios from "axios";
import { CreateAccountUrl } from "../../urls";
// import { SubmitSignUp } from '../../apis/SubmitSignUp'
// import axios from 'axios'
// import { CreateAccountUrl } from '../../urls'

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
`;
const LogInText = styled.p`
  font-size: 1.6rem;
  text-align: center;
  letter-spacing: 0.03em;
`;
const LogInTextLink = styled.a`
  font-size: 1.6rem;
  color: ${Color.MainColor};
`;

export const SignUpForm = memo((props) => {
  const [name, setName] = useState("aa");
  const [email, setEmail] = useState("q35@gmail.com");
  const [password, setPassword] = useState("aaaaaa");
  const [confirmPass, setConfirmPass] = useState("aaaaaa");
  // const { handleSuccessfulAuthentication } = props

  // 名前入力欄
  const getName = useCallback(
    (e) => {
      const value = e.target.value.replace(
        /[^a-zA-Zぁ-んァ-ン一-龠 \u3000]/g,
        ""
      ); // 文字列とスペース以外は入力できないように
      setName(value);
    },
    [name]
  );
  // メアド入力欄
  const getEmail = useCallback(
    (e) => {
      const value = e.target.value.replace(/[ぁ-んァ-ン一-龠 \u3000]/g, ""); // 日本語とスペースは入力できないように
      setEmail(value);
    },
    [email]
  );
  // パスワード入力欄
  const getPassword = useCallback(
    (e) => {
      const value = e.target.value.replace(/[ぁ-んァ-ン一-龠 \u3000]/g, ""); // 日本語とスペースは入力できないように
      setPassword(value);
    },
    [password]
  );
  // 確認用パスワード入力欄
  const getConfirmPass = useCallback(
    (e) => {
      const value = e.target.value.replace(/[ぁ-んァ-ン一-龠 \u3000]/g, ""); // 日本語とスペースは入力できないように
      setConfirmPass(value);
    },
    [confirmPass]
  );

  const SubmitSignUp = (event) => {
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
        console.log("From SubmitSignUp");
        if (res.data.status === "created") {
          props.handleSuccessfulAuthentication(res.data);
        }
        console.log(res);
      })
      .catch((error) => {
        console.log("registration error", error);
      });
    event.preventDefault();
  };

  // const SubmitSignUp2 = () => {
  //   console.log('mmmfiifioashfhdsafhiohfidsah;hdfhoiasufgsahf;hfeua')
  // }

  return (
    <>
      <Wrap onSubmit={() => SubmitSignUp()} id='new_user'>
        {/* <Wrap id="new_user"> */}
        <CreateInputField
          inputFor={"name"}
          type={"text"}
          name={"name"}
          value={name}
          placeholder={"山田　太郎"}
          onChange={getName}
        >
          名前
        </CreateInputField>
        <CreateInputField
          inputFor={"email"}
          type={"text"}
          name={"email"}
          value={email}
          placeholder={"example@gmail.com"}
          onChange={getEmail}
        >
          Email
        </CreateInputField>
        <CreateInputField
          inputFor='password'
          type={"password"}
          name='password'
          value={password}
          placeholder='パスワード'
          onChange={getPassword}
        >
          パスワード
        </CreateInputField>
        <CreateInputField
          inputFor='password_confirmation'
          type={"password"}
          name='password_confirmation'
          value={confirmPass}
          placeholder='もう一度パスワードを入力してください'
          onChange={getConfirmPass}
        >
          再確認用パスワード
        </CreateInputField>
        <FormBtn type={"submit"}>
          {/* <FormBtn type={'button'} onClick={SubmitSignUp}> */}
          作成する
        </FormBtn>
        <Line />
        <LogInText>
          ログインは<LogInTextLink>こちら</LogInTextLink>
        </LogInText>
      </Wrap>
    </>
  );
});
