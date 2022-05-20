// 外部モジュール
import styled from 'styled-components'

// 内部モジュール
import { DarkGray, LightGray } from '../../../style/Color'

export const GrayBtn = (props) => {
  const { children, fSize } = props

  const GrayBtn = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    max-height: 48px;
    /* width: 163px; */
    padding: 24px 32px;
    background-color: ${LightGray};
    color: ${DarkGray};
    font-size: ${fSize}rem;
    letter-spacing: 0.03em;
    border-radius: 8px;
  `
  return (
    <>
      <GrayBtn>{children}</GrayBtn>
    </>
  )
}
