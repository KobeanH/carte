// 外部モジュール
import styled from 'styled-components'

// 内部モジュール
import { BaseGrayBtn } from '../../../style/btn/BaseGrayBtn'

const Btn = styled.a`
  ${BaseGrayBtn}
  height: 48px;
  padding: 10px 32px;
  font-size: 2rem;
  border-radius: 8px;
`

export const GrayBtn = (props) => {
  const { children, onClick } = props
  return (
    <>
      <Btn onClick={onClick}>{children}</Btn>
    </>
  )
}
