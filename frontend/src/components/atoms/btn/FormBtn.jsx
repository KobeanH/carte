// 外部モジュール
import styled from 'styled-components'

// 内部モジュール
import { BaseBlueBtn } from '../../../style/btn/BaseBlueBtn'

const Btn = styled.button`
  ${BaseBlueBtn}
  height: 40px;
  width: 200px;
  padding: 10px 32px;
  font-size: 2rem;
  border-radius: 8px;
  border: none;
`

export const FormBtn = (props) => {
  const { children, type, onClick } = props
  return (
    <>
      <Btn type={type} onClick={onClick}>
        {children}
      </Btn>
    </>
  )
}
