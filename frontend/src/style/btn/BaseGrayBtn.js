// 外部モジュール
import { css } from 'styled-components'

// 内部モジュール
import { Color } from '../Color'

export const BaseGrayBtn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background-color: ${Color.LightGray};
  color: ${Color.DarkGray};
  letter-spacing: 0.03em;
`
